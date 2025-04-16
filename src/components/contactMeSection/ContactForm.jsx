import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-discord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSuccess("❌ Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      setSuccess("⚠️ An error occurred.");
    }
  };

  return (
    <div>
      <p className="text-iceBlue">{success}</p>
      <form onSubmit={sendEmail} autoComplete="off" className="flex flex-col gap-4">
        {/* Dummy anti-autofill fields */}
        <input type="text" name="fakeuser" style={{ display: "none" }} />
        <input type="password" name="fakepass" style={{ display: "none" }} />

        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Your Name"
          required
          className="h-12 w-full rounded-lg border border-glowingPink text-lavenderMist text-xl bg-gr transition-all duration-500 px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Your Email"
          required
          className="h-12 w-full rounded-lg border border-glowingPink text-lavenderMist font-bold text-xl bg-gr transition-all duration-500 px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          autoComplete="off"
          placeholder="Message"
          required
          className="w-full rounded-lg border border-glowingPink text-lavenderMist font-bold text-xl bg-gr transition-all duration-500 p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-glowingPink text-glowingPink h-12 font-bold text-xl hover:bg-darkBackground bg-gr transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
