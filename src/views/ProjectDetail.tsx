import { Link, useParams } from "@solidjs/router";
import { Component, For, Show, onMount } from "solid-js";
import Title from "@/components/title/title";

import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";
import project from "@/datas/project";

export const lang = {
  codeigniter: {
    web: "https://codeigniter.com",
    img: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
  },
  laravel: {
    web: "https://laravel.com",
    img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  },
  react: {
    web: "https://reactjs.org",
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  vue: {
    web: "https://vuejs.org",
    img: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
  },
  svelte: {
    web: "https://svelte.dev",
    img: "https://cdn.worldvectorlogo.com/logos/svelte-1.svg",
  },
  solid: {
    web: "https://solidjs.com",
    img: "https://www.solidjs.com/img/logo/without-wordmark/logo.png",
  },
  flutter: {
    web: "https://flutter.dev",
    img: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
  },
  express: {
    web: "https://expressjs.com",
    img: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
  },
  arduino: {
    web: "https://www.arduino.cc",
    img: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
  },
};

const ProjectDetail: Component = () => {
  const params = useParams();
  const item = project.filter(
    (p) => p.name.toLowerCase().replace(/ /gi, "-") == params.slug
  )?.[0];

  onMount(() => {
    new Splide(".splide").mount();
  });

  return (
    <>
      <div class="w-full">
        <Title title={item.name} subtitle="" />
        <section class="splide bg-white dark:bg-gray-900 !bg-opacity-25 rounded-lg overflow-hidden shadow-sm">
          <div class="splide__track">
            <ul class="splide__list">
              <For each={item.photo}>
                {(p) => (
                  <li class="splide__slide flex items-center justify-center">
                    <img
                      src={"/assets/project/" + p}
                      class="shadow object-cover w-full"
                    />
                  </li>
                )}
              </For>
            </ul>
          </div>
        </section>
        <div class="flex lg:flex-row flex-col gap-4 items-stretch mt-5">
          <div class="bg-white dark:bg-gray-900 !bg-opacity-30 shadow p-5 rounded-lg lg:w-3/5 w-full">
            <div class="font-semibold">Description</div>
            <div class="mt-4">{item.description}</div>

            <Show when={item.link}>
              <a
                href={item.link}
                target="_blank"
                class="text-primary mt-5 inline-block"
              >
                <i class="mdi mdi-link-variant"></i> Preview
              </a>
            </Show>
          </div>
          <div class="bg-white dark:bg-gray-900 !bg-opacity-30 shadow p-5 rounded-lg w-full lg:flex-1">
            <div class="font-semibold">Stacks</div>
            <div class="grid grid-cols-3 gap-3">
              <For each={item.language.length ? item.language : []}>
                {(item) => (
                  <a
                    href={lang[item.toLowerCase() as "svelte"].web}
                    target="_blank"
                    class="bg-white dark:bg-gray-900 !bg-opacity-30 rounded shadow p-5 text-center block hover:shadow-primary transition mt-4"
                  >
                    <img
                      src={lang[item.toLowerCase() as "svelte"].img}
                      alt=""
                      class="h-full inline-block"
                    />
                  </a>
                )}
              </For>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-900 !bg-opacity-30 shadow p-5 rounded-lg mt-5 h-80 flex items-center justify-center">
          <div class="text-center">
            <div class="lg:text-5xl text-3xl font-semibold">
              Are you interested?
            </div>
            <div class="mt-3">
              Let's work together. We will make something infinite.
            </div>
            <div class="mt-10">
              <Link
                class="bg-primary inline-block px-20 uppercase text-sm p-3 rounded-full text-white dark:text-gray-900"
                href="/contact"
              >
                Call Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
