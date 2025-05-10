<template>
  <SeoMeta></SeoMeta>
  <div
    class="min-h-screen bg-gradient-to-b from-primary/15 to-transparent flex items-center justify-center"
  >
    <div class="text-center">
      <div class="text-6xl font-bold text-primary" data-aos="fade-down">
        Whats Wrong?
      </div>
      <div class="mt-2" data-aos="fade-down">
        It seems like you're lost. Come on, follow me to get back on the right
        path!
      </div>
      <div class="mt-10" data-aos="fade-up">
        <NuxtLink
          href="/"
          class="bg-primary rounded px-5 py-2 text-white inline-flex items-center hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
