import { useParams } from "@solidjs/router";
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
        <div class="w-full relative">
          <section class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <For each={item.photo}>
                  {(p) => (
                    <li class="splide__slide">
                      <img
                        src={"/assets/project/" + p}
                        class="rounded shadow object-cover"
                      />
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </section>
          <div class="text-right">
            <Show when={item.link}>
              <a
                href={item.link}
                target="_blank"
                class="uppercase mr-4 flex items-center dark:bg-gray-900 dark:hover:bg-primary bg-white rounded-full shadow h-10 px-4 p-1 hover:bg-primary hover:text-white transition mt-4 float-left"
              >
                <i class="mdi mdi-link-variant"></i> Preview
              </a>
            </Show>
            <For each={item.language.length ? item.language : []}>
              {(item) => (
                <a
                  href={lang[item.toLowerCase() as "svelte"].web}
                  class="bg-white dark:bg-gray-900 rounded shadow p-1 inline-block text-center ml-2 w-10 h-10 hover:shadow-primary transition mt-4"
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
    </>
  );
};

export default ProjectDetail;
