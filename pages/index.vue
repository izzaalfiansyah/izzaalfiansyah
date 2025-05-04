<script lang="ts" setup>
import { profile } from "~/datas/identity";
import MyPhoto from "./assets/images/izzaalfiansyah.png";
import Me from "./assets/images/me.png";
import { projects } from "~/datas/project";
</script>

<template>
  <SeoMeta></SeoMeta>
  <div
    class="rounded-lg min-h-[80vh] bg-gradient-to-t from-primary/15 to-transparent flex flex-wrap items-center justify-between overflow-hidden relative"
  >
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/049/688/540/small/blue-infinite-curvy-curly-line-3d-png.png"
      class="absolute h-[50vh] md:scale-75 scale-50 top-24 md:right-0 right-auto left-auto object-cover md:inline-block hidden"
      data-aos="fade-left"
    />
    <div
      class="w-full space-y-10 relative backdrop-blur-xs lg:h-auto min-h-[80vh] flex flex-col justify-center md:px-10 px-5"
      data-aos="fade-right"
    >
      <div class="lg:text-6xl text-5xl font-bold">
        {{ profile.firstName }} <br />
        <span class="text-primary">{{ profile.lastName }}</span>
      </div>
      <div>
        <span class="font-thin text-xl">{{ profile.position }}</span>
      </div>
      <div class="flex items-center space-x-6 flex-wrap">
        <a
          href="/cv.pdf"
          target="_blank"
          class="px-8 py-3 rounded bg-primary text-white outline-none mb-3"
        >
          Download CV
        </a>
        <NuxtLink
          href="/contact"
          class="px-8 py-3 rounded dark:bg-gray-900 bg-white outline-none mb-3"
        >
          Contact Me
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="min-h-screen py-20">
    <div class="text-center font-bold text-4xl" data-aos="fade-up">Project</div>
    <div class="mt-10">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <template v-for="(project, i) in projects.slice(0, 4)">
          <ProjectItem
            :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
            :project="project"
          />
        </template>
      </div>
    </div>
    <div class="mt-10 text-center" data-aos="fade-up">
      <NuxtLink href="/project" class="bg-primary text-white rounded px-8 py-3"
        >Show More</NuxtLink
      >
    </div>
  </div>
  <InterestTogether></InterestTogether>
</template>
