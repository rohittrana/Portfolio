// src/components/Contact.tsx
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/maygeddq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-neutral-950 to-gray-900 text-white px-6 py-20 scroll-mt-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent leading-relaxed">
        Contact
      </h2>

      <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl">
        Let’s connect! You can find me on these platforms or send me a direct message.
      </p>

      {/* Social Links */}
      <div className="flex space-x-10 mb-16">
        <a
          href="https://www.linkedin.com/in/rohittrana17/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
        >
          <Linkedin size={40} />
          <span className="mt-2">LinkedIn</span>
        </a>

        <a
          href="https://x.com/Rohittrana17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
        >
          <Twitter size={40} />
          <span className="mt-2">X (Twitter)</span>
        </a>

        <a
          href="https://github.com/rohittrana"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
        >
          <Github size={40} />
          <span className="mt-2">GitHub</span>
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-neutral-900/70 border border-neutral-800 rounded-2xl shadow-xl p-8 flex flex-col space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-black text-white border border-neutral-700 focus:border-gray-400 focus:ring focus:ring-gray-500/40 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-black text-white border border-neutral-700 focus:border-gray-400 focus:ring focus:ring-gray-500/40 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="p-3 rounded-lg bg-black text-white border border-neutral-700 focus:border-gray-400 focus:ring focus:ring-gray-500/40 outline-none"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition text-white font-semibold disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {/* Status Messages */}
        {status === "success" && (
          <p className="text-green-400 mt-4 text-center">Message sent successfully.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-4 text-center">Something went wrong. Please try again.</p>
        )}
      </form>

      {/* Footer Line */}
      <p className="mt-12 text-sm text-gray-500 text-center">
        Created by <span className="font-semibold text-gray-300">Rohit Rana</span>
      </p>
    </div>
  );
};

export default Contact;
