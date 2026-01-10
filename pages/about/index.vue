<script setup lang="ts">
import { profile } from "~/datas/identity";
import { skills } from "~/datas/skill";

import About from "~/assets/images/about.png";
</script>

<template>
  <SeoMeta title="About Me"></SeoMeta>
  <div
    class="h-[80vh] bg-gradient-to-t from-transparent via-transparent to-primary/10 rounded-lg px-10 flex items-center justify-center">
    <div class="text-center">
      <img :src="About" class="md:size-36 size-24 inline-block rounded-full overflow-hidden" data-aos="fade-down" />
      <div class="text-4xl font-semibold mt-5 text-primary" data-aos="fade-up">
        About Me
      </div>
      <div class="mt-5" data-aos="fade-up">
        {{ profile.description }}
      </div>
    </div>
  </div>
  <div class="mt-15">
    <div class="text-4xl font-bold" data-aos="fade-left">Tech Stack</div>
    <div class="mt-8">
      <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
        <template v-for="skill in skills">
          <div
            class="flex justify-center rounded bg-radial to-transparent from-primary/15 p-8 group relative overflow-hidden"
            data-aos="fade-up">
            <img :src="skill.icon" alt="" class="h-24" />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 dark:bg-black/75 bg-white/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div class="font-bold text-2xl dark:text-white text-black">
                {{ skill.title }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="mt-20">
      <InterestTogether />
    </div>
  </div>
</template>
