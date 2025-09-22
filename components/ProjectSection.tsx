"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Maareeye",
    description:
      "An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.",
    longDescription:
      "Maareeye is a modern, AI-powered personal finance management application built with React and Supabase. It empowers users to track transactions, manage budgets, scan receipts using AI, and visualize financial reports—all through an intuitive and responsive user interface.",
    image: "/maareeye.png",
    technologies: ["React", "Gemini Api", "Supabase", "Shadcn", "Tailwind"],
    features: [
      "Secure signup, login, and logout via Supabase.",
      "View and update personal information.",
      "Create, view, and manage financial transactions.",
      "Add and display financial accounts.",
      "Visual summaries of income, expenses, and balances.",
      "Extract transaction data from uploaded receipts.",
      "Create and manage financial plans.",
      "Seamless light and dark mode support for enhanced user experience.",
    ],
    category: "Finance Website",
    duration: "2 months",
    liveUrl: "https://maareeye1.vercel.app/",
    githubUrl: "https://github.com/shiinedev/maareeye",
  },
  {
    title: "Soplang",
    description:
      "Soplang is the first Somali programming language, created to make coding accessible to Somali speakers.",
    longDescription:
      "Soplang is the first Somali programming language, created to make coding accessible to Somali speakers using native Somali syntax and keywords.",
    image: "/soplang.png",
    technologies: [
      "Python",
      "Rust",
      "TypeScript",
      "Javascript",
      "Tailwind CSS",
    ],
    features: [
      "🚀 Started in February 2023, officially released in October 2023",
      "⚙️ Built with Rust & Python",
      "🧠 Includes a compiler, interpreter, and VS Code extension",
      "🌍 Promoting digital inclusion and language development",
      "🔧 Currently working on a powerful new update,",
    ],
    category: "Programing Language",
    duration: "4 months",
    liveUrl: "https://www.soplang.org/",
    githubUrl: "https://github.com/soplang/soplang",
  },
  {
    title: "Trenda",
    description:
      "A full-stack e-commerce solution with real-time inventory management and admin dashboard.",
    longDescription:
      "A comprehensive e-commerce platform built with modern web technologies. This project demonstrates full-stack development capabilities with a focus on user experience, performance, and scalability. The platform includes advanced features like real-time inventory tracking, and a comprehensive admin dashboard for managing products, orders, and customers.",
    image: "/trenda.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Mongodb",
      ,
      "Tailwind",
      "Better-auth",
      "Shadcn Ui",
      "Vercel",
    ],
    features: [
      "Real-time inventory management with automatic stock updates",
      "Comprehensive admin dashboard with analytics",
      "User authentication and profile management",
      "Advanced product filtering and search functionality",
      "Responsive design optimized for all devices",
    ],
    category: "Full-Stack Web Application",
    duration: "1 months",
    liveUrl: "https://trenda-sand.vercel.app/",
    githubUrl: "https://github.com/shiinedev/trenda",
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer pt-0">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1">
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}>
                      <Github className="h-4 w-4" />
                      <span className="sr-only">View source</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
