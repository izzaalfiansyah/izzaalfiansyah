<script lang="ts" setup>
type Theme = "system" | "light" | "dark";

const themes = ["system", "light", "dark"];
const theme = ref<Theme>("system");

function getTheme(): Theme {
  return (localStorage.getItem("theme") as Theme) || "system";
}

function setTheme() {
  switch (theme.value) {
    case "system":
      const colorScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", colorScheme);
      break;
    case "light":
      document.documentElement.classList.remove("dark");
      break;
    case "dark":
      document.documentElement.classList.add("dark");
      break;
  }
}

function toggleTheme() {
  const nextTheme =
    themes[themes.findIndex((t) => t === theme.value) + 1] || themes[0];
  theme.value = nextTheme as Theme;
  localStorage.setItem("theme", nextTheme);
  setTheme();
}

onMounted(() => {
  theme.value = getTheme();
  setTheme();
});
</script>

<template>
  <div class="fixed bottom-0 mx-auto left-0 right-0 flex items-center justify-center pointer-events-none">
    <button
      class="cursor-pointer bg-background rounded-t-full px-3 py-3 pb-1.5 shadow hover:shadow-3xl hover:shadow-primary transition group pointer-events-auto"
      @click="toggleTheme">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-5 scale-95 group-hover:text-primary transition">
        <template v-if="theme == 'system'">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </template>
        <template v-else-if="theme == 'light'">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </template>
        <template v-else-if="theme == 'dark'">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </template>
      </svg>
    </button>
  </div>
</template>
