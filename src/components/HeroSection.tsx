"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  Download,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    href: "https://github.com/shaurya-sharma",
    label: "GitHub",
    id: "hero-github-link",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/shaurya-sharma",
    label: "LinkedIn",
    id: "hero-linkedin-link",
  },
  {
    icon: Mail,
    href: "mailto:shaurya.1229@gmail.com",
    label: "Email",
    id: "hero-email-link",
  },
  {
    icon: Phone,
    href: "tel:+916398951291",
    label: "Phone",
    id: "hero-phone-link",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="ambient-blob ambient-blob-1" />
        <div className="ambient-blob ambient-blob-2" />
        <div className="ambient-blob ambient-blob-3" />
        <div className="grid-lines" />
        {/* Radial gradient center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants}>
              <div
                id="availability-badge"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium text-emerald-400"
                style={{
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Opportunities
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1
                className="font-outfit font-black leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
              >
                <span className="text-white">Hi, I&apos;m</span>
                <br />
                <span className="gradient-text text-glow">Shaurya</span>
                <br />
                <span className="text-white">Sharma</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-2">
                {["Full Stack Developer", "AI/ML Enthusiast"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-sm font-semibold rounded-full"
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(124,58,237,0.25)",
                      color: "#c4b5fd",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              Building{" "}
              <span className="text-purple-400 font-medium">scalable applications</span>,{" "}
              <span className="text-blue-400 font-medium">intelligent systems</span>, and{" "}
              <span className="text-cyan-400 font-medium">premium digital experiences</span>.
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>Ghaziabad, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <motion.a
                id="hero-view-projects-btn"
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Sparkles className="w-4 h-4" />
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                id="hero-contact-btn"
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                id="hero-resume-btn"
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, id }) => (
                <motion.a
                  key={label}
                  id={id}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4.5 h-4.5" size={18} />
                </motion.a>
              ))}
              <div className="ml-2 text-sm text-gray-600">
                shaurya.1229@gmail.com
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-2">
              {[
                { value: "200+", label: "DSA Problems" },
                { value: "2+", label: "Projects Built" },
                { value: "1+", label: "Internships" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold font-outfit gradient-text">{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Outer glow ring */}
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0 0 60px rgba(124,58,237,0.35))",
              }}
            >
              {/* Rotating gradient border */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-70"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7c3aed, #3b82f6, #06b6d4, #7c3aed)",
                  animation: "rotate-border 6s linear infinite",
                  borderRadius: "28px",
                  padding: "2px",
                }}
              />
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(260px, 40vw, 400px)",
                  height: "clamp(260px, 40vw, 400px)",
                  borderRadius: "24px",
                  background: "rgba(10,10,18,0.8)",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Shaurya Sharma — Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 260px, 400px"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 100%)",
                  }}
                />
              </div>
            </div>

            {/* Floating skill cards */}
            <motion.div
              className="absolute -left-4 top-8 glass rounded-xl px-3.5 py-2.5 text-sm font-medium"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="text-white text-xs font-semibold">Spring Boot</div>
                  <div className="text-gray-500 text-[10px]">Backend</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-16 glass rounded-xl px-3.5 py-2.5 text-sm font-medium"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{ border: "1px solid rgba(59,130,246,0.3)" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <div>
                  <div className="text-white text-xs font-semibold">AI / ML</div>
                  <div className="text-gray-500 text-[10px]">Enthusiast</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-4 glass rounded-xl px-3.5 py-2.5 text-sm font-medium"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ border: "1px solid rgba(6,182,212,0.3)" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">⚛️</span>
                <div>
                  <div className="text-white text-xs font-semibold">React</div>
                  <div className="text-gray-500 text-[10px]">Frontend</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-gray-600 text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-purple-500 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
