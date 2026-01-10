<script setup lang="ts">
import { projects } from "~/datas/project";

const description =
  "Collection of works of achievements that I made individually or in groups";
</script>

<template>
  <SeoMeta title="Project" :description="description"></SeoMeta>
  <div class="py-10">
    <div class="text-center" data-aos="fade-down">
      <div class="text-4xl font-bold">Project</div>
      <div>
        {{ description }}
      </div>
    </div>
    <div class="mt-10">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-10 gap-y-10">
        <template v-for="(project, i) in projects">
          <ProjectItem :project="project" :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'" />
        </template>
      </div>
    </div>
  </div>
  <div class="mt-20">
    <InterestTogether />
  </div>
</template>
