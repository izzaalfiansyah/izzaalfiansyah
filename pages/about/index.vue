<script setup lang="ts">
interface Skill {
  icon: string;
  title: string;
}

const skills: Skill[] = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
    title: "HTML",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    title: "CSS",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    title: "Javascript",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    title: "PHP",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png",
    title: "Dart",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    title: "Bootstrap",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    title: "Tailwind",
  },
  {
    icon: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/codeigniter-icon.svg",
    title: "Codeigniter",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
    title: "Laravel",
  },
  {
    icon: "https://img.icons8.com/office40/512/express-js.png",
    title: "ExpressJS",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    title: "React",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    title: "Vue",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
    title: "Svelte",
  },
  {
    icon: "https://www.solidjs.com/img/logo/without-wordmark/logo.png",
    title: "Solid",
  },
  {
    icon: "https://assets.website-files.com/60d251a34163cf29e1220806/626accd8eefaec54f23310ba_flutter%20developer%20logo.png",
    title: "Flutter",
  },
];
</script>

<template>
  <div
    class="h-[80vh] bg-primary/15 rounded-lg px-10 flex items-center justify-center"
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
        Hello! My Name is Muhammad Izza Alfiansyah and you can call me Alfian. I
        Live in Jember Regency, East Java, Indonesia. I started programming when
        I was in high school at SMK PGRI 5 Jember, The most meritorious place in
        my ability development. I am very enthusiastic about learning new things
        in the world of technology. Now, I am a student who is studying at
        Politeknik Negeri Jember.
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
