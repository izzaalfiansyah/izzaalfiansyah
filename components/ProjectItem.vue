<script lang="ts" setup>
import type { Project } from "~/datas/project";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <NuxtLink
    class="rounded-lg relative text-left block group bg-gradient-to-r from-transparent to-transparent"
    :href="`/project/${project.slug}`"
  >
    <div class="h-60 rounded-lg overflow-hidden relative">
      <img
        :src="`/projects/${project.photo[0]}`"
        alt=""
        class="w-full h-full object-cover group-hover:scale-110 transition"
      />
    </div>
    <div class="p-4">
      <div class="text-2xl font-semibold text-primary">
        {{ project.name }}
      </div>
      <div class="text-sm truncate">
        {{ project.description }}
      </div>
    </div>
  </NuxtLink>
</template>
