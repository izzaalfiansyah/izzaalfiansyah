<script setup lang="ts">
import { careers } from "~/datas/career";

const isOdd = (index: number) => index % 2 === 0;

const description = "Let me share you some of my experience";
</script>

<template>
  <SeoMeta title="Career" :description="description"></SeoMeta>
  <div class="py-10">
    <div class="text-center" data-aos="fade-down">
      <div class="text-4xl font-bold">Career</div>
      <div>{{ description }}</div>
    </div>
    <div class="mt-20 space-y-10">
      <template v-for="(career, i) in careers">
        <div
          class="flex md:flex-row flex-col md:items-stretch"
          :class="isOdd(i) ? 'md:flex-row-reverse items-start' : 'items-end'"
        >
          <img
            :src="career.image"
            alt=""
            class="md:size-56 sm:size-32 size-24 md:rounded rounded-full object-cover md:mb-0 mb-5"
            :data-aos="isOdd(i) ? 'fade-right' : 'fade-left'"
          />
          <div
            class="grow md:w-auto w-full min-w-0 flex flex-col justify-center from-primary/15 to-transparent rounded-lg p-8"
            :class="isOdd(i) ? 'bg-gradient-to-r' : 'bg-gradient-to-l'"
            :data-aos="isOdd(i) ? 'fade-right' : 'fade-left'"
          >
            <div>
              <div class="md:text-3xl text-2xl font-bold">
                {{ career.company }}
              </div>
              <div class="text-primary mt-3">{{ career.position }}</div>
              <div class="text-sm">{{ career.date }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
