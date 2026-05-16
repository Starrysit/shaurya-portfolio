"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const SKILL_CATEGORIES = [
  {
    name: "Languages",
    color: "#7c3aed",
    bgColor: "rgba(124,58,237,0.1)",
    borderColor: "rgba(124,58,237,0.2)",
    emoji: "💻",
    skills: [
      { name: "Java", level: 85, icon: "☕" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "JavaScript", level: 78, icon: "⚡" },
      { name: "C", level: 70, icon: "🔧" },
    ],
  },
  {
    name: "Frameworks",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.1)",
    borderColor: "rgba(59,130,246,0.2)",
    emoji: "🚀",
    skills: [
      { name: "Spring Boot", level: 82, icon: "🌱" },
      { name: "React", level: 80, icon: "⚛️" },
      { name: "Spring Data JPA", level: 75, icon: "🗄️" },
    ],
  },
  {
    name: "Databases",
    color: "#06b6d4",
    bgColor: "rgba(6,182,212,0.1)",
    borderColor: "rgba(6,182,212,0.2)",
    emoji: "🗃️",
    skills: [
      { name: "MySQL", level: 82, icon: "🐬" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      { name: "MongoDB", level: 68, icon: "🍃" },
    ],
  },
  {
    name: "Tools",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.1)",
    borderColor: "rgba(245,158,11,0.2)",
    emoji: "🛠️",
    skills: [
      { name: "Git", level: 85, icon: "📌" },
      { name: "Docker", level: 65, icon: "🐳" },
      { name: "Postman", level: 80, icon: "📬" },
      { name: "IntelliJ IDEA", level: 88, icon: "💡" },
      { name: "Maven", level: 75, icon: "📦" },
    ],
  },
  {
    name: "Concepts",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.1)",
    borderColor: "rgba(16,185,129,0.2)",
    emoji: "🧠",
    skills: [
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "OOP", level: 88, icon: "🏗️" },
      { name: "Multithreading", level: 75, icon: "🔀" },
      { name: "CI/CD Basics", level: 65, icon: "⚙️" },
      { name: "Linux", level: 72, icon: "🐧" },
    ],
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

function SkillBar({
  name,
  level,
  icon,
  color,
  delay,
  animate,
}: {
  name: string;
  level: number;
  icon: string;
  color: string;
  delay: number;
  animate: boolean;
}) {
  return (
    <motion.div
      className="space-y-1.5"
      initial={{ opacity: 0, x: -10 }}
      animate={animate ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-gray-300 font-medium">{name}</span>
        </div>
        <span className="text-xs font-semibold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(to right, ${color}aa, ${color})` }}
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  const active = SKILL_CATEGORIES[activeTab];

  return (
    <section id="skills" className="section-padding relative z-10">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-14 gap-4">
            <SectionLabel>Skills & Expertise</SectionLabel>
            <h2
              className="font-outfit font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              My Technical{" "}
              <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              A diverse set of tools and technologies I use to bring ideas to life.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {SKILL_CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.name}
                id={`skills-tab-${cat.name.toLowerCase()}`}
                onClick={() => setActiveTab(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: activeTab === i ? cat.bgColor : "rgba(255,255,255,0.04)",
                  border: `1px solid ${activeTab === i ? cat.borderColor : "rgba(255,255,255,0.08)"}`,
                  color: activeTab === i ? cat.color : "#6b7280",
                  boxShadow: activeTab === i ? `0 4px 20px ${cat.color}22` : "none",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{cat.emoji}</span>
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skill Bars */}
            <motion.div
              key={activeTab}
              className="glass gradient-border rounded-2xl p-8 space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{active.emoji}</span>
                <div>
                  <h3 className="text-white font-semibold font-outfit">{active.name}</h3>
                  <p className="text-gray-500 text-xs">{active.skills.length} technologies</p>
                </div>
              </div>
              {active.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={active.color}
                  delay={i * 0.08}
                  animate={isInView}
                />
              ))}
            </motion.div>

            {/* All Skills Pills Grid */}
            <motion.div
              className="glass gradient-border rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-white font-semibold font-outfit mb-5">
                All Technologies
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SKILL_CATEGORIES.flatMap((cat) =>
                  cat.skills.map((skill) => (
                    <motion.span
                      key={`${cat.name}-${skill.name}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-default"
                      style={{
                        background: `${cat.color}12`,
                        border: `1px solid ${cat.color}28`,
                        color: cat.color,
                      }}
                      whileHover={{
                        scale: 1.08,
                        background: `${cat.color}22`,
                        boxShadow: `0 4px 16px ${cat.color}30`,
                      }}
                    >
                      <span>{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-gray-500 text-xs mb-3">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div
                      key={cat.name}
                      className="flex items-center gap-1.5 text-xs text-gray-500"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: cat.color }}
                      />
                      {cat.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
