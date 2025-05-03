<script setup lang="ts">
import { profile } from "~/datas/identity";
import { skills } from "~/datas/skill";
</script>

<template>
  <SeoMeta title="About Me"></SeoMeta>
  <div
    class="h-[80vh] bg-gradient-to-t from-primary/15 to-transparent rounded-lg px-10 flex items-center justify-center"
  >
    <div class="text-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQHerR8s9LGp6A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722494257505?e=1751500800&v=beta&t=AvurztA8LDdE1zJHFpHd55zKAJ6NhgWE75_UXmluNRE"
        class="size-36 inline-block rounded-full overflow-hidden"
        data-aos="fade-down"
      />
      <div class="text-4xl font-semibold mt-5 text-primary" data-aos="fade-up">
        About Me
      </div>
      <div class="mt-8" data-aos="fade-up">
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
            class="flex justify-center rounded bg-primary/15 p-8"
            data-aos="fade-up"
          >
            <img :src="skill.icon" alt="" class="h-24" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
