import Title from "@/components/title/title";
import { Link } from "@solidjs/router";
import { Component, For } from "solid-js";

const About: Component = () => {
  const skills = [
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
      icon: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
      title: "Python",
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
      icon: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/codeigniter-icon.svg",
      title: "Codeigniter",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
      title: "Laravel",
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
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      title: "Tailwind",
    },
    {
      icon: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      title: "NodeJS",
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

  return (
    <>
      <div class="w-full">
        <Title
          title="About"
          subtitle="A short piece about my personal background"
        />
        <div class="w-full">
          <div class="rounded-lg shadow-sm bg-white dark:bg-gray-900 !bg-opacity-30 p-4 mb-4 transition hover:scale-[103%]">
            <p class="mb-4">
              Hello! My Name is Muhammad Izza Alfiansyah and you can call me
              Alfian. I Live in Jember Regency, East Java, Indonesia. I started
              programming when I was in high school at{" "}
              <a
                href="https://esekmaprima.com"
                target="_blank"
                class="text-primary"
              >
                SMK PGRI 5 Jember
              </a>
              , The most meritorious place in my ability development.
            </p>
            <p>
              I am very enthusiastic about learning new things in the world of
              technology. Now, I am a student who is studying at{" "}
              <a
                href="https://polije.ac.id"
                target="_blank"
                class="text-primary"
              >
                Politeknik Negeri Jember
              </a>
              .
            </p>
          </div>
          <div class="p-4 shadow-sm bg-white dark:bg-gray-900 !bg-opacity-30 rounded-lg mb-4 transition hover:scale-[103%]">
            Some of my skills are:
            <div class="grid lg:grid-cols-8 grid-cols-4 my-10 lg:gap-8 gap-4 mx-5 justify-center items-center">
              <For each={skills}>
                {(item) => (
                  <div class="flex flex-col items-center justify-end h-20">
                    <img
                      src={item.icon}
                      alt={item.title}
                      class="lg:h-16 h-11 mb-1"
                    />
                    <div class="text-center text-sm">{item.title}</div>
                  </div>
                )}
              </For>
            </div>
            You can see my experience at{" "}
            <Link href="/project" class="text-primary">
              project
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
