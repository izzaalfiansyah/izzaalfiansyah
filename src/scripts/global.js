/* eslint-disable no-undef */
function applyTheme() {
  const theme = localStorage.getItem("theme") || "system"

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  document.documentElement.classList.toggle("dark", isDarkMode)
}

applyTheme()

document.addEventListener("astro:after-swap", applyTheme)
