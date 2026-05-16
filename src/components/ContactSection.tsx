"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const CONTACT_LINKS = [
  {
    id: "contact-email-link",
    icon: Mail,
    label: "Email",
    value: "shaurya.1229@gmail.com",
    href: "mailto:shaurya.1229@gmail.com",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.1)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    id: "contact-linkedin-link",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/in/shaurya-sharma",
    href: "https://linkedin.com/in/shaurya-sharma",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
  },
  {
    id: "contact-github-link",
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/shaurya-sharma",
    href: "https://github.com/shaurya-sharma",
    color: "#f8fafc",
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    id: "contact-phone-link",
    icon: Phone,
    label: "Phone",
    value: "+91 6398951291",
    href: "tel:+916398951291",
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
      style={{
        background: "rgba(124,58,237,0.1)",
        border: "1px solid rgba(124,58,237,0.2)",
        color: "#a78bfa",
      }}
    >
      {children}
    </span>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2
            className="font-outfit font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Have a project in mind, an opportunity to share, or just want to say hi?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass gradient-border rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  👋
                </div>
                <div>
                  <h3 className="text-white font-semibold font-outfit">Shaurya Sharma</h3>
                  <p className="text-gray-500 text-sm">Full Stack Developer · AI/ML</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-purple-500" />
                Ghaziabad, India
              </div>
              <div
                className="mt-4 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-emerald-400 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for full-time and freelance opportunities
              </div>
            </div>

            <div className="space-y-3">
              {CONTACT_LINKS.map(({ id, icon: Icon, label, value, href, color, bg, border }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{ background: bg, border: `1px solid ${border}` }}
                  whileHover={{ x: 6, boxShadow: `0 8px 30px ${color}20` }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon className="w-4.5 h-4.5" size={18} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-500 text-xs font-medium">{label}</div>
                    <div className="text-white text-sm font-medium truncate">{value}</div>
                  </div>
                  <div className="ml-auto text-gray-600">→</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass gradient-border rounded-2xl p-8">
              <h3 className="text-white font-bold text-lg font-outfit mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="text-white font-semibold">Message Sent!</p>
                  <p className="text-gray-500 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${focused === "name" ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                        boxShadow: focused === "name" ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${focused === "email" ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                        boxShadow: focused === "email" ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${focused === "message" ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.08)"}`,
                        boxShadow: focused === "message" ? "0 0 0 3px rgba(124,58,237,0.1)" : "none",
                      }}
                    />
                  </div>

                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
