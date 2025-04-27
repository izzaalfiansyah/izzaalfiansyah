<script lang="ts" setup>
import MyPhoto from "./assets/images/izzaalfiansyah.png";
</script>

<template>
  <div
    class="rounded-lg min-h-[80vh] bg-primary/15 px-10 flex flex-wrap items-center justify-between overflow-x-hidden relative"
  >
    <img
      :src="MyPhoto"
      class="absolute h-[90vh] bottom-0 right-10"
      data-aos="fade-left"
    />
    <div
      class="lg:w-1/2 w-full space-y-10 relative backdrop-blur-xs lg:h-auto min-h-[80vh] flex flex-col justify-center"
      data-aos="fade-right"
    >
      <div class="lg:text-6xl text-5xl font-bold">
        Muhammad <br />
        <span class="text-primary">Izza Alfiansyah</span>
      </div>
      <div>
        <span class="font-thin text-xl"
          >Full Stack & Mobile Flutter Developer</span
        >
      </div>
      <div class="flex items-center space-x-6">
        <a
          href="/cv.pdf"
          target="_blank"
          class="px-8 py-3 rounded bg-primary text-white outline-none"
        >
          Download CV
        </a>
        <NuxtLink
          href="/contact"
          class="px-8 py-3 rounded dark:bg-gray-900 bg-white outline-none"
        >
          Contact Me
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="min-h-screen py-20">
    <div class="text-center font-bold text-4xl" data-aos="fade-up">Project</div>
    <div class="mt-10">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <template v-for="(_, i) in Array.from({ length: 4 })">
          <div
            :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
            class="bg-primary/15 h-80 rounded-lg"
          ></div>
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
