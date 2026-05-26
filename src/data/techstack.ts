export interface Tech {
  name: string
  icon: string
  category: "frontend" | "backend" | "mobile" | "devops" | "database"
}

export const techstack: Tech[] = [
  // Frontend
  {
    name: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    category: "frontend",
  },
  {
    name: "CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    category: "frontend",
  },
  {
    name: "Javascript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    category: "frontend",
  },
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    category: "frontend",
  },
  {
    name: "Vue",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    category: "frontend",
  },
  {
    name: "Svelte",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
    category: "frontend",
  },
  {
    name: "Nuxt",
    icon: "https://nuxt.com/assets/design-kit/icon-green.svg",
    category: "frontend",
  },
  // Backend
  {
    name: "PHP",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    category: "backend",
  },
  {
    name: "Go",
    icon: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
    category: "backend",
  },
  {
    name: "Laravel",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
    category: "backend",
  },
  {
    name: "ExpressJS",
    icon: "https://img.icons8.com/office40/512/express-js.png",
    category: "backend",
  },
  {
    name: "NestJS",
    icon: "https://nestjs.com/img/logo-small.svg",
    category: "backend",
  },
  // Mobile
  {
    name: "Dart",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    category: "mobile",
  },
  {
    name: "Flutter",
    icon: "https://assets.website-files.com/60d251a34163cf29e1220806/626accd8eefaec54f23310ba_flutter%20developer%20logo.png",
    category: "mobile",
  },
  // DevOps
  {
    name: "Docker",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    category: "devops",
  },
  // Database
  {
    name: "MySql",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
    category: "database",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    category: "database",
  },
  {
    name: "GraphQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
    category: "database",
  },
]
