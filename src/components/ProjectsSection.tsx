"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const PROJECTS = [
  {
    id: "fake-news-detection",
    title: "Fake News Detection System",
    description:
      "ML-based web application that classifies news articles as real or fake using TF-IDF vectorization and a Passive Aggressive Classifier. Features a Flask REST API backend and a React frontend with real-time confidence scoring.",
    image: "/project-fakenews.png",
    tags: ["Python", "Flask", "React", "ML", "TF-IDF", "Scikit-learn"],
    tagColors: {
      Python: "#3b82f6",
      Flask: "#10b981",
      React: "#06b6d4",
      ML: "#7c3aed",
      "TF-IDF": "#f59e0b",
      "Scikit-learn": "#ef4444",
    } as Record<string, string>,
    github: "https://github.com/Starrysit/fake-news",
    live: null,
    featured: true,
    accentColor: "#7c3aed",
  },
  {
    id: "real-chat",
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with WebSocket-based messaging, user presence, and group chat support. Backend built with Spring Boot (WebSocket/STOMP) and a React frontend with live updates.",
    image: "/project-library.png",
    tags: ["Spring Boot", "React", "WebSocket", "MySQL", "JPA", "STOMP"],
    tagColors: {
      "Spring Boot": "#10b981",
      React: "#06b6d4",
      WebSocket: "#7c3aed",
      MySQL: "#3b82f6",
      JPA: "#8b5cf6",
      STOMP: "#f59e0b",
    } as Record<string, string>,
    github: "https://github.com/Starrysit/realtime-chat-application",
    live: null,
    featured: true,
    accentColor: "#3b82f6",
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

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.05) 0%, transparent 70%)",
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
          <SectionLabel>Projects</SectionLabel>
          <h2
            className="font-outfit font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Things I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            A selection of projects that showcase my skills in full-stack development
            and machine learning.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              className="group relative glass rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div
                  className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${project.accentColor}20`,
                    border: `1px solid ${project.accentColor}40`,
                    color: project.accentColor,
                  }}
                >
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(5,5,8,0.97) 100%)",
                  }}
                />
                {/* Accent glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse 60% 40% at 50% 100%, ${project.accentColor}18, transparent)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-white font-bold text-xl font-outfit mb-3 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background: `${project.tagColors[tag] || "#7c3aed"}14`,
                        border: `1px solid ${project.tagColors[tag] || "#7c3aed"}30`,
                        color: project.tagColors[tag] || "#a78bfa",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    id={`${project.id}-github-btn`}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GithubIcon className="w-4 h-4" size={16} />
                    GitHub
                  </motion.a>
                  {project.live ? (
                    <motion.a
                      id={`${project.id}-live-btn`}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  ) : (
                    <div
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl text-gray-600"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, transparent, ${project.accentColor}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* More projects teaser */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            id="view-more-github-btn"
            href="https://github.com/shaurya-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" size={16} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
