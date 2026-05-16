"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const EXPERIENCE = [
  {
    id: "edufyi",
    company: "EduFyi Tech Solutions",
    role: "Full Stack Developer Intern",
    type: "Remote",
    period: "Mar 2026 – Present",
    color: "#7c3aed",
    bgColor: "rgba(124,58,237,0.08)",
    borderColor: "rgba(124,58,237,0.2)",
    icon: "🚀",
    status: "current",
    responsibilities: [
      "Built full-stack web features for the EduFyi platform",
      "Developed React frontend components with responsive UI",
      "Created Spring Boot backend services and REST APIs",
      "Integrated MySQL database with Spring Data JPA",
      "Collaborated with cross-functional teams in Agile workflow",
    ],
  },
  {
    id: "ibm",
    company: "IBM PBEL AI/ML Internship",
    role: "AI/ML Intern",
    type: "Certification Program",
    period: "Aug 2025",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.08)",
    borderColor: "rgba(59,130,246,0.2)",
    icon: "🤖",
    status: "completed",
    responsibilities: [
      "Completed IBM's hands-on AI/ML internship program",
      "Learned core machine learning algorithms and applications",
      "Worked on real-world AI problem statements",
      "Earned IBM certification in AI/ML fundamentals",
    ],
  },
  {
    id: "trishul",
    company: "Trishul Defence Society",
    role: "Core Member & Event Coordinator",
    type: "Extracurricular",
    period: "2023 – Present",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.2)",
    icon: "🏆",
    status: "current",
    responsibilities: [
      "Active core member of the Defence Society at ABES",
      "Coordinated and managed campus-level events",
      "Led team planning for inter-college competitions",
      "Developed leadership and organizational skills",
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

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
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
          <SectionLabel>Experience</SectionLabel>
          <h2
            className="font-outfit font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            My{" "}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Building real-world experience through internships, certifications, and
            leadership roles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line (desktop) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(124,58,237,0.3) 10%, rgba(59,130,246,0.3) 50%, rgba(245,158,11,0.3) 90%, transparent)",
            }}
          />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                id={`experience-${exp.id}`}
                className={`relative flex gap-6 lg:gap-0 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Card (takes half width on desktop) */}
                <div className={`w-full lg:w-[46%] ${i % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 h-full"
                    style={{
                      border: `1px solid ${exp.borderColor}`,
                      background: exp.bgColor,
                    }}
                    whileHover={{ y: -4, boxShadow: `0 20px 60px ${exp.color}18` }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                          style={{ background: `${exp.color}18` }}
                        >
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-base font-outfit leading-tight">
                            {exp.company}
                          </h3>
                          <p className="text-sm font-medium" style={{ color: exp.color }}>
                            {exp.role}
                          </p>
                        </div>
                      </div>
                      {exp.status === "current" && (
                        <span
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0"
                          style={{
                            background: "rgba(34,197,94,0.1)",
                            border: "1px solid rgba(34,197,94,0.25)",
                            color: "#22c55e",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Active
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.type}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0 mt-0.5"
                            style={{ color: exp.color }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Center dot (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: `${exp.color}22`,
                      border: `2px solid ${exp.color}55`,
                      boxShadow: `0 0 20px ${exp.color}44`,
                    }}
                  >
                    <Briefcase className="w-4 h-4" style={{ color: exp.color }} />
                  </div>
                </div>

                {/* Empty side */}
                <div className="hidden lg:block w-[46%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
