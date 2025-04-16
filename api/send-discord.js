export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

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
    console.error("Error sending message.:", err);
    return res.status(500).json({ message: "Failed to send message." });
  }
}
