<script lang="ts" setup>
interface Link {
  name: string;
  path: string;
}

const links: Link[] = [
  {
    name: "Uses",
    path: "/uses",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Career",
    path: "/career",
  },
  {
    name: "Project",
    path: "/project",
  },
];

const route = useRoute();
</script>

<template>
  <div
    class="bg-white/50 dark:bg-gray-900/50 backdrop-blur-3xl sticky top-0 left-0 right-0 z-50 border-b border-gray-100 dark:border-gray-800">
    <div
      class="md:h-20 h-auto py-5 main-container px-5 mx-auto flex md:flex-row flex-col items-center justify-between md:space-y-0 space-y-5">
      <NuxtLink href="/" class="font-semibold text-2xl text-primary">izzaalfiansyah</NuxtLink>
      <ul class="flex items-center space-x-8 overflow-x-auto">
        <template v-for="link in links">
          <li class="relative">
            <NuxtLink :href="link.path" class="relative hover:text-primary transition" :class="{
              'text-primary after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:right-0 after:border-b-2 after:border-primary':
                route.path == link.path,
              'md:inline hidden': link.path == '/',
            }">{{ link.name }}</NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
