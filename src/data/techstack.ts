import Arduino from "@/components/icon/techstack/Arduino.astro"
import Astro from "@/components/icon/techstack/Astro.astro"
import Bootstrap from "@/components/icon/techstack/Bootstrap.astro"
import Cloudflare from "@/components/icon/techstack/Cloudflare.astro"
import Css from "@/components/icon/techstack/Css.astro"
import Dart from "@/components/icon/techstack/Dart.astro"
import Docker from "@/components/icon/techstack/Docker.astro"
import Elysia from "@/components/icon/techstack/Elysia.astro"
import Express from "@/components/icon/techstack/Express.astro"
import Fastapi from "@/components/icon/techstack/Fastapi.astro"
import Firebase from "@/components/icon/techstack/Firebase.astro"
import Flutter from "@/components/icon/techstack/Flutter.astro"
import Git from "@/components/icon/techstack/Git.astro"
import Github from "@/components/icon/techstack/Github.astro"
import Gitlab from "@/components/icon/techstack/Gitlab.astro"
import Go from "@/components/icon/techstack/Go.astro"
import Graphql from "@/components/icon/techstack/Graphql.astro"
import Html from "@/components/icon/techstack/Html.astro"
import Js from "@/components/icon/techstack/Js.astro"
import Langchain from "@/components/icon/techstack/Langchain.astro"
import Laravel from "@/components/icon/techstack/Laravel.astro"
import Llamaindex from "@/components/icon/techstack/Llamaindex.astro"
import Mongo from "@/components/icon/techstack/Mongo.astro"
import MySql from "@/components/icon/techstack/MySql.astro"
import Nest from "@/components/icon/techstack/Nest.astro"
import Next from "@/components/icon/techstack/Next.astro"
import Nginx from "@/components/icon/techstack/Nginx.astro"
import Nuxt from "@/components/icon/techstack/Nuxt.astro"
import Php from "@/components/icon/techstack/Php.astro"
import Postgree from "@/components/icon/techstack/Postgree.astro"
import Python from "@/components/icon/techstack/Python.astro"
import Qdrant from "@/components/icon/techstack/Qdrant.astro"
import Rabbit from "@/components/icon/techstack/Rabbit.astro"
import React from "@/components/icon/techstack/React.astro"
import Redis from "@/components/icon/techstack/Redis.astro"
import Rust from "@/components/icon/techstack/Rust.astro"
import Sass from "@/components/icon/techstack/Sass.astro"
import Socket from "@/components/icon/techstack/Socket.astro"
import Solid from "@/components/icon/techstack/Solid.astro"
import Svelte from "@/components/icon/techstack/Svelte.astro"
import Tailwind from "@/components/icon/techstack/Tailwind.astro"
import Ts from "@/components/icon/techstack/Ts.astro"
import Vercel from "@/components/icon/techstack/Vercel.astro"
import Vue from "@/components/icon/techstack/Vue.astro"
import type { AIconProps } from "@/components/icon/type"

export type TechCategory =
  | "language"
  | "backend"
  | "frontend"
  | "database"
  | "service"
  | "frontend"
  | "mobile"
  | "devops"
  | "iot"
  | "ai"
  | "ai"
  | "other"

export interface Tech {
  name: string
  icon: (props: AIconProps) => unknown
  category: TechCategory
}

export const techstack: Tech[] = [
  // Language
  {
    name: "HTML",
    icon: Html,
    category: "language",
  },
  {
    name: "CSS",
    icon: Css,
    category: "language",
  },
  {
    name: "Sass",
    icon: Sass,
    category: "language",
  },
  {
    name: "JavaScript",
    icon: Js,
    category: "language",
  },
  {
    name: "TypeScript",
    icon: Ts,
    category: "language",
  },
  {
    name: "PHP",
    icon: Php,
    category: "language",
  },
  {
    name: "Python",
    icon: Python,
    category: "language",
  },
  {
    name: "Go",
    icon: Go,
    category: "language",
  },
  {
    name: "Rust",
    icon: Rust,
    category: "language",
  },
  {
    name: "Dart",
    icon: Dart,
    category: "language",
  },

  // Frontend
  {
    name: "Bootstrap",
    icon: Bootstrap,
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: Tailwind,
    category: "frontend",
  },
  {
    name: "React",
    icon: React,
    category: "frontend",
  },
  {
    name: "Vue",
    icon: Vue,
    category: "frontend",
  },
  {
    name: "Svelte",
    icon: Svelte,
    category: "frontend",
  },
  {
    name: "SolidJS",
    icon: Solid,
    category: "frontend",
  },
  {
    name: "Nuxt",
    icon: Nuxt,
    category: "frontend",
  },
  {
    name: "Next",
    icon: Next,
    category: "frontend",
  },
  {
    name: "Astro",
    icon: Astro,
    category: "frontend",
  },

  // Backend
  {
    name: "Laravel",
    icon: Laravel,
    category: "backend",
  },
  {
    name: "ExpressJS",
    icon: Express,
    category: "backend",
  },
  {
    name: "NestJS",
    icon: Nest,
    category: "backend",
  },
  {
    name: "ElysiaJS",
    icon: Elysia,
    category: "backend",
  },
  {
    name: "FastAPI",
    icon: Fastapi,
    category: "backend",
  },
  {
    name: "GraphQL",
    icon: Graphql,
    category: "backend",
  },

  // Database
  {
    name: "MySQL",
    icon: MySql,
    category: "database",
  },
  {
    name: "PostgreSQL",
    icon: Postgree,
    category: "database",
  },
  {
    name: "MongoDB",
    icon: Mongo,
    category: "database",
  },
  {
    name: "Redis",
    icon: Redis,
    category: "database",
  },
  {
    name: "Qdrant",
    icon: Qdrant,
    category: "database",
  },

  // Mobile
  {
    name: "Flutter",
    icon: Flutter,
    category: "mobile",
  },

  // DevOps
  {
    name: "Docker",
    icon: Docker,
    category: "devops",
  },
  {
    name: "Git",
    icon: Git,
    category: "devops",
  },
  {
    name: "Github",
    icon: Github,
    category: "devops",
  },
  {
    name: "Gitlab",
    icon: Gitlab,
    category: "devops",
  },

  // AI
  {
    name: "LangChain",
    icon: Langchain,
    category: "ai",
  },
  {
    name: "LLamaIndex",
    icon: Llamaindex,
    category: "ai",
  },

  // Service
  {
    name: "Nginx",
    icon: Nginx,
    category: "service",
  },
  {
    name: "RabbitMQ",
    icon: Rabbit,
    category: "service",
  },
  {
    name: "Cloudflare",
    icon: Cloudflare,
    category: "service",
  },
  {
    name: "Vercel",
    icon: Vercel,
    category: "service",
  },
  {
    name: "Socket.IO",
    icon: Socket,
    category: "service",
  },
  {
    name: "Firebase",
    icon: Firebase,
    category: "service",
  },

  // IoT
  {
    name: "Arduino",
    icon: Arduino,
    category: "iot",
  },
]
