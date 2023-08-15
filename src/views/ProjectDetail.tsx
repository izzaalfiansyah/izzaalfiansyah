import { Link, useParams } from "@solidjs/router";
import { Component, For, Show, onMount } from "solid-js";
import { project } from "./Project";
import Title from "@/components/title/title";

import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

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
        <section class="splide">
          <div class="splide__track">
            <ul class="splide__list">
              <For each={item.photo}>
                {(p) => (
                  <li class="splide__slide">
                    <img
                      src={"/assets/project/" + p}
                      class="rounded-lg shadow object-cover"
                    />
                  </li>
                )}
              </For>
            </ul>
          </div>
        </section>
        <div class="flex lg:flex-row flex-col gap-4 items-stretch mt-5">
          <div class="bg-white dark:bg-gray-900 shadow p-5 rounded-lg lg:w-3/5 w-full">
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
          <div class="bg-white dark:bg-gray-900 shadow p-5 rounded-lg w-full lg:flex-1">
            <div class="font-semibold">Stack</div>
            <div class="grid grid-cols-4 gap-4">
              <For each={item.language.length ? item.language : []}>
                {(item) => (
                  <a
                    href={lang[item.toLowerCase() as "svelte"].web}
                    class="bg-white dark:bg-gray-900 rounded shadow p-1 text-center ml-2 block hover:shadow-primary transition mt-4"
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
        {/* <div class="text-right">
          <Show when={item.link}>
            <a
              href={item.link}
              target="_blank"
              class="uppercase mr-4 flex items-center dark:bg-gray-900 dark:hover:bg-primary bg-white rounded-full shadow h-10 px-4 p-1 hover:bg-primary hover:text-white transition mt-4 float-left"
            >
              <i class="mdi mdi-link-variant"></i> Preview
            </a>
          </Show>
          
        </div> */}
        <div class="bg-white dark:bg-gray-900 shadow p-5 rounded-lg mt-5 h-80 flex items-center justify-center">
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
