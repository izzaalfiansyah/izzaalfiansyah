<script lang="ts" setup>
import { projects } from "~/datas/project";

const params = useRoute().params;
const slug = params.slug;

const project = projects.find((p) => p.slug == slug)!;
</script>

<template>
  <SeoMeta :title="project.name" :description="project.description"></SeoMeta>
  <div class="py-10">
    <div
      class="overflow-x-auto flex max-w-full no-scrollbar space-x-6 p-5 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"
      :class="{ 'justify-center': project.photo.length == 1 }"
    >
      <template v-for="photo in project.photo">
        <img
          :src="`/projects/${photo}`"
          alt=""
          class="md:w-[80%] w-[90%] h-full rounded-lg"
          data-aos="fade-left"
        />
      </template>
    </div>
    <div class="mt-10" data-aos="fade-left">
      <div class="text-4xl font-bold text-primary">{{ project.name }}</div>
      <div class="mt-3">{{ project.description }}</div>
    </div>
    <div class="mt-10" data-aos="fade-left">
      <div class="text-2xl font-semibold">Tech Used:</div>
      <div>
        {{ project.language.join(", ") }}
      </div>
    </div>
    <template v-if="!!project.link">
      <div class="mt-10" data-aos="fade-left">
        <div class="text-2xl font-semibold">Demo:</div>
        <a :href="project.link" class="text-primary" target="_blank">{{
          project.link
        }}</a>
      </div>
    </template>
    <div class="mt-10">
      <InterestTogether />
    </div>
  </div>
</template>
