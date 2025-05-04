<script setup lang="ts">
import { profile } from "~/datas/identity";
import { skills } from "~/datas/skill";

import About from "~/assets/images/about.png";
</script>

<template>
  <SeoMeta title="About Me"></SeoMeta>
  <div
    class="h-[80vh] bg-gradient-to-t from-transparent via-transparent to-primary/10 rounded-lg px-10 flex items-center justify-center"
  >
    <div class="text-center">
      <img
        :src="About"
        class="md:size-36 size-24 inline-block rounded-full overflow-hidden"
        data-aos="fade-down"
      />
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
            class="flex justify-center rounded bg-radial to-transparent from-primary/15 p-8"
            data-aos="fade-up"
          >
            <img :src="skill.icon" alt="" class="h-24" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
