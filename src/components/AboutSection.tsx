"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Brain } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Tech CSE (AI & ML)",
    school: "ABES Engineering College",
    year: "2023 – 2027",
    icon: GraduationCap,
    color: "#7c3aed",
    description: "Specialization in Artificial Intelligence and Machine Learning",
  },
  {
    degree: "Class XII",
    school: "Senior Secondary",
    year: "2022",
    icon: Brain,
    color: "#3b82f6",
    description: "Science stream with Computer Science",
  },
  {
    degree: "Class X",
    school: "Secondary School",
    year: "2020",
    icon: Code2,
    color: "#06b6d4",
    description: "Foundation years with distinction",
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

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <SectionLabel>About Me</SectionLabel>
            <h2
              className="font-outfit font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Crafting{" "}
              <span className="gradient-text">Digital Experiences</span>
              <br />
              with Precision & Passion
            </h2>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              A passionate developer who blends engineering rigor with creative thinking
              to build solutions that truly matter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bio Card */}
            <motion.div
              className="glass gradient-border rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.15)" }}
                >
                  <Code2 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-lg font-outfit">Who I Am</h3>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>
                  I&apos;m{" "}
                  <span className="text-purple-400 font-medium">Shaurya Sharma</span>, a
                  Full Stack Developer and AI/ML Enthusiast pursuing B.Tech in Computer
                  Science (AI & ML) at ABES Engineering College, Ghaziabad.
                </p>
                <p>
                  I specialize in building end-to-end web applications using{" "}
                  <span className="text-blue-400 font-medium">Spring Boot</span> on the
                  backend and <span className="text-cyan-400 font-medium">React</span> on
                  the frontend, with a strong foundation in{" "}
                  <span className="text-purple-400 font-medium">AI/ML systems</span>.
                </p>
                <p>
                  Currently interning at{" "}
                  <span className="text-white font-medium">EduFyi Tech Solutions</span>,
                  where I&apos;m building full-stack features for real-world applications.
                  I&apos;m passionate about solving complex problems with clean code and
                  great UX.
                </p>
                <p>
                  Beyond code, I&apos;ve completed a{" "}
                  <span className="text-emerald-400 font-medium">half marathon</span>,
                  practice powerlifting, and love staying disciplined both mentally and
                  physically.
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { label: "Location", value: "Ghaziabad, India" },
                  { label: "Degree", value: "B.Tech CSE (AI&ML)" },
                  { label: "Focus", value: "Full Stack + AI/ML" },
                  { label: "Status", value: "Open to Work" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="px-3 py-2.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="text-gray-600 text-xs mb-0.5">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              className="glass gradient-border rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.15)" }}
                >
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg font-outfit">Education</h3>
              </div>

              <div className="relative pl-8 space-y-6">
                {/* Timeline line */}
                <div
                  className="absolute left-3.5 top-2 bottom-2 w-px"
                  style={{
                    background:
                      "linear-gradient(to bottom, #7c3aed44, #3b82f644, #06b6d444, transparent)",
                  }}
                />

                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-8 top-1 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        background: `${edu.color}22`,
                        border: `1.5px solid ${edu.color}55`,
                        boxShadow: `0 0 12px ${edu.color}33`,
                      }}
                    >
                      <edu.icon
                        className="w-3.5 h-3.5"
                        style={{ color: edu.color }}
                      />
                    </div>

                    <div
                      className="rounded-xl p-4"
                      style={{ background: "rgba(255,255,255,0.025)" }}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-white font-semibold text-sm">
                          {edu.degree}
                        </h4>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ml-2"
                          style={{
                            background: `${edu.color}18`,
                            color: edu.color,
                            border: `1px solid ${edu.color}33`,
                          }}
                        >
                          {edu.year}
                        </span>
                      </div>
                      <div className="text-gray-400 text-xs font-medium">{edu.school}</div>
                      <div className="text-gray-600 text-xs mt-1">{edu.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
