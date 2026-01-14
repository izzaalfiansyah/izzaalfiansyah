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
      :class="{ 'justify-center': project.photo.length == 1 }">
      <template v-for="photo in project.photo">
        <img :src="`/projects/${photo}`" alt="" class="md:h-[45vh]! max-w-[90%] h-[30vh]! object-cover rounded-lg"
          data-aos="fade-left" />
      </template>
    </div>
    <div class="mt-10" data-aos="fade-left">
      <div class="text-4xl font-bold text-primary">{{ project.name }}</div>
      <div class="mt-3">{{ project.description }}</div>
    </div>
    <div class="mt-10" data-aos="fade-left">
      <div class="text-2xl font-semibold">Tech Used:</div>
      <div class="flex items-center flex-wrap gap-2 mt-1">
        <div v-for="stack in project.stacks" class="px-2.5 py-0.5 rounded border border-primary/20 bg-primary/5">
          {{ stack }}
        </div>
      </div>
    </div>
    <div v-if="!!project.as" class="mt-10" data-aos="fade-left">
      <div class="text-2xl font-semibold">Project Role:</div>
      <div>
        {{ project.as }}
      </div>
    </div>
    <div v-if="!!project.link" class="mt-10" data-aos="fade-left">
      <div class="text-2xl font-semibold">Demo:</div>
      <a :href="project.link" class="text-primary" target="_blank">
        {{ project.link }}
      </a>
    </div>
    <div class="mt-10">
      <InterestTogether />
    </div>
  </div>
</template>
