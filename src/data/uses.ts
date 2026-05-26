export interface UseItem {
  name: string
  description: string
  url: string
}

export interface UsesCategory {
  title: string
  items: UseItem[]
}

export const usesCategories: UsesCategory[] = [
  {
    title: "Devices",
    items: [
      {
        name: "MacBook Air M1 (2020)",
        description:
          "This was my primary device. It was very powerful and can support fast workflow in multitasking, coding, and technology exploration.",
        url: "https://support.apple.com/id-id/111883",
      },
    ],
  },
  {
    title: "Coding",
    items: [
      {
        name: "VS Code",
        description: "Versatile code editor. You know it!",
        url: "https://code.visualstudio.com/",
      },
      {
        name: "Neovim",
        description:
          "via LazyVim. Current my code editor. Perform well for flexibility and productivity.",
        url: "https://neovim.io/",
      },
      {
        name: "Kitty",
        description: "The fast, feature-rich, GPU based terminal emulator.",
        url: "https://sw.kovidgoyal.net/kitty/",
      },
      {
        name: "Iosevka",
        description:
          "I was using Fira code before. But now, I feel comfortable with Iosevka fonts for coding.",
        url: "https://github.com/be5invis/Iosevka",
      },
      {
        name: "Cloudflare",
        description:
          "with Vercel actually. For build and deploy on the cloud service.",
        url: "https://www.cloudflare.com/",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        name: "Zen",
        description:
          "Welcome to a calmer internet browser. Beautifully designed, privacy-focused, and packed with features.",
        url: "https://zen-browser.app/",
      },
      {
        name: "Podman",
        description: "Manage containers, pods, and images.",
        url: "https://podman.io/",
      },
      {
        name: "Bruno",
        description: "Fast, git-friendly open-source API client.",
        url: "https://www.usebruno.com/",
      },
      {
        name: "Fish",
        description:
          "Smart and user-friendly command line shell for Linux, macOS, and the rest of the family.",
        url: "https://fishshell.com/",
      },
      {
        name: "Notion",
        description:
          "Notion is an all-in-one productivity tool that helps users organize notes, tasks, databases, and projects in one place.",
        url: "https://www.notion.com/",
      },
      {
        name: "Proton",
        description:
          "End-to-end encrypted password manager. Securely store, share, and autofill your credentials.",
        url: "https://proton.me/",
      },
      {
        name: "Raycast",
        description:
          "Shortcut to everything. Powerful productivity tools all with an extendable launcher.",
        url: "https://www.raycast.com/",
      },
      {
        name: "Dotfiles",
        description:
          "My setup configuration files. You can check it on GitHub.",
        url: "https://github.com/izzaalfiansyah/dotfiles",
      },
    ],
  },
]
