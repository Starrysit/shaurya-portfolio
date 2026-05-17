"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="logo-mark w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
              >
                S
              </div>
              <span className="gradient-text font-outfit font-bold text-lg">
                Shaurya Sharma
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer & AI/ML Enthusiast building scalable applications
              and intelligent systems.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-emerald-400"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to Opportunities
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                id="footer-email-link"
                href="mailto:shaurya.1229@gmail.com"
                className="flex items-center gap-2 text-gray-500 text-sm hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                shaurya.1229@gmail.com
              </a>
              <a
                id="footer-linkedin-link"
                href="https://linkedin.com/in/shaurya-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 text-sm hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon size={16} />
                linkedin.com/in/shaurya-sharma
              </a>
              <a
                id="footer-github-link"
                href="https://github.com/shaurya-sharma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors"
              >
                <GithubIcon size={16} />
                github.com/shaurya-sharma
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Shaurya Sharma. All rights reserved.
          </p>
          <motion.p
            className="text-gray-600 text-xs flex items-center gap-1.5"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> using
            Next.js & Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
