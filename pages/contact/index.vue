<script setup lang="ts">
import { contacts } from "~/datas/contact";

const description = "The places where you can find me";
</script>

<template>
  <SeoMeta title="Contact" :description="description"></SeoMeta>
  <div class="py-10">
    <div class="text-center" data-aos="fade-down">
      <div class="text-4xl font-bold">Contact</div>
      <div>{{ description }}</div>
    </div>
    <div class="grid md:grid-cols-2 gap-4 mt-10">
      <template v-for="(contact, i) in contacts">
        <a
          class="md:py-8 py-5 rounded-lg from-primary/15 to-transparent md:px-8 px-5 block group"
          :class="`${i % 2 == 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}`"
          :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
          target="_blank"
          :href="contact.link"
        >
          <div class="flex items-center space-x-5">
            <img
              :src="contact.image"
              class="w-6"
              :class="{
                'dark:invert': contact.title.toLowerCase() == 'github',
              }"
              alt=""
            />
            <div
              class="font-semibold text-xl group-hover:text-primary transition"
            >
              {{ contact.title }}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>
