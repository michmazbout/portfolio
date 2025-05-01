const rateLimitMap = new Map();
import dotenv from "dotenv";
dotenv.config();
console.log("Webhook ENV:", process.env.DISCORD_WEBHOOK);

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const limit = 2;

  const entry = rateLimitMap.get(ip) || { count: 0, last: now };
  if (now - entry.last > windowMs) {
    rateLimitMap.set(ip, { count: 1, last: now });
    return false;
  }

  if (entry.count >= limit) return true;

  rateLimitMap.set(ip, { count: entry.count + 1, last: entry.last });
  return false;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  if (isRateLimited(ip)) {
    return res.status(429).json({ message: "Too many requests. Slow down." });
  }

  const { name, email, message, phone } = req.body;

  if (phone) {
    return res.status(400).json({ message: "Bot detected." });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  const discordWebhookUrl = process.env.DISCORD_WEBHOOK;

  if (!discordWebhookUrl) {
    console.error("Discord webhook is not set.");
    return res.status(500).json({ message: "Webhook URL not configured." });
  }

  const payload = {
    username: "📨 Elias' Portfolio Bot",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    embeds: [
      {
        title: "📬 New Contact Form Submission",
        color: 0xff69b4,
        fields: [
          { name: "👤 Name", value: name || "N/A", inline: false },
          { name: "📧 Email", value: email || "N/A", inline: false },
          { name: "💬 Message", value: message || "N/A", inline: false },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "eliasalalam.dev • React Form Bot",
          icon_url: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
        },
      },
    ],
  };

  try {
    const response = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.status}`);
    }

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error sending message:", err);
    return res.status(500).json({ message: "Failed to send message." });
  }
}
