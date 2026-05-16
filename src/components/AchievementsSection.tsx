"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ACHIEVEMENTS = [
  {
    id: "dsa",
    emoji: "⚡",
    title: "200+ DSA Problems",
    subtitle: "Algorithmic Excellence",
    description:
      "Solved 200+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks, strengthening problem-solving and coding fundamentals.",
    color: "#7c3aed",
    bgColor: "rgba(124,58,237,0.08)",
    borderColor: "rgba(124,58,237,0.2)",
    metric: "200+",
    metricLabel: "Problems Solved",
  },
  {
    id: "hackathon",
    emoji: "🏆",
    title: "Hackathon Participant",
    subtitle: "Competitive Coding",
    description:
      "Participated in multiple hackathons, building rapid prototypes and innovative solutions under pressure with cross-functional teams.",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.2)",
    metric: "3+",
    metricLabel: "Hackathons",
  },
  {
    id: "ibm-cert",
    emoji: "🤖",
    title: "IBM AI/ML Certified",
    subtitle: "Industry Certification",
    description:
      "Earned IBM certification through the PBEL AI/ML internship program, demonstrating expertise in applied AI and machine learning techniques.",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.08)",
    borderColor: "rgba(59,130,246,0.2)",
    metric: "IBM",
    metricLabel: "Certified",
  },
  {
    id: "marathon",
    emoji: "🏃",
    title: "Half Marathon",
    subtitle: "Athletic Achievement",
    description:
      "Completed a 21km half marathon, demonstrating exceptional endurance, discipline, and mental fortitude beyond the world of code.",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.2)",
    metric: "21km",
    metricLabel: "Completed",
  },
  {
    id: "fitness",
    emoji: "💪",
    title: "Fitness & Powerlifting",
    subtitle: "Physical Discipline",
    description:
      "Dedicated to powerlifting and fitness — building physical strength that reflects the same discipline and consistency applied to engineering.",
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.08)",
    borderColor: "rgba(239,68,68,0.2)",
    metric: "PRs",
    metricLabel: "Personal Records",
  },
  {
    id: "leadership",
    emoji: "🌟",
    title: "Community Leadership",
    subtitle: "Core Member",
    description:
      "Serving as core member and event coordinator at Trishul Defence Society, leading initiatives, planning events, and building community.",
    color: "#06b6d4",
    bgColor: "rgba(6,182,212,0.08)",
    borderColor: "rgba(6,182,212,0.2)",
    metric: "3+",
    metricLabel: "Years Active",
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

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="section-padding relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(245,158,11,0.03) 0%, transparent 70%)",
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
          <SectionLabel>Achievements</SectionLabel>
          <h2
            className="font-outfit font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Beyond the{" "}
            <span className="gradient-text">Code</span>
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Milestones and achievements that define my journey — technical, athletic,
            and personal.
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.id}
              id={`achievement-${item.id}`}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
              style={{
                border: `1px solid ${item.borderColor}`,
                background: item.bgColor,
              }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
                boxShadow: `0 20px 60px ${item.color}22`,
                borderColor: `${item.color}55`,
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${item.color}10, transparent)`,
                }}
              />

              {/* Metric bubble */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black"
                style={{
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}30`,
                  color: item.color,
                }}
              >
                {item.metric}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}25`,
                  boxShadow: `0 4px 20px ${item.color}20`,
                }}
              >
                {item.emoji}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-xs font-semibold mb-1" style={{ color: item.color }}>
                  {item.subtitle}
                </div>
                <h3 className="text-white font-bold text-base font-outfit mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>

                {/* Metric label */}
                <div className="mt-4 pt-4 border-t border-white/[0.05]">
                  <span className="text-xs text-gray-600 font-medium">{item.metricLabel}</span>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, transparent, ${item.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
