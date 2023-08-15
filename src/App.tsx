import { Link, useLocation } from "@solidjs/router";
import { Component, createSignal, For, onMount, Show } from "solid-js";
import MyAudio from "@/assets/Serenity.mp3";
import "@/App.css";
import Router from "./Router";

const paths = [
  {
    title: "Home",
    icon: "mdi mdi-home-outline",
    path: "/",
  },
  {
    title: "About",
    icon: "mdi mdi-account-settings-outline",
    path: "/about",
  },
  {
    title: "Career",
    icon: "mdi mdi-chart-timeline-variant",
    path: "/career",
  },
  {
    title: "Project",
    icon: "mdi mdi-chart-line",
    path: "/project",
  },
  {
    title: "Contact",
    icon: "mdi mdi-phone-outline",
    path: "/contact",
  },
];

const App: Component = () => {
  const location = useLocation();
  const [audio, setAudio] = createSignal<HTMLAudioElement>(
    document.createElement("audio")
  );
  const [showSidebar, setShowSidebar] = createSignal(false);
  const [audioPlaying, setAudioPlaying] = createSignal<boolean>(false);
  const [darkMode, setDarkMode] = createSignal<boolean>(false);

  function handleMusic() {
    if (audioPlaying()) {
      audio().pause();
    } else {
      audio().play();
    }
    setAudioPlaying(!audioPlaying());
  }

  function darkInit() {
    if (localStorage.getItem("dark")) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleDark() {
    setDarkMode(!darkMode());
    if (darkMode()) {
      localStorage.setItem("dark", "1");
    } else {
      localStorage.removeItem("dark");
    }
    darkInit();
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar());
  };

  onMount(() => {
    const music = document.createElement("audio");
    music.src = MyAudio;
    music.loop = true;

    setAudio(music);
    darkInit();
  });

  return (
    <>
      <div class="bg-white transition bg-opacity-95 backdrop-blur border-white dark:border-gray-900 border-4 text-black dark:(bg-gray-800 bg-opacity-95 text-white) relative rounded-xl overflow-hidden shadow w-full flex items-stretch">
        <div class="lg:hidden absolute top-0 left-0 right-0 h-20 bg-white dark:bg-gray-900 shadow-sm flex items-center justify-between px-5">
          <button type="button" onClick={toggleSidebar}>
            <i class="mdi mdi-menu text-xl"></i>
          </button>
        </div>
        <Show when={showSidebar()}>
          <div
            onClick={toggleSidebar}
            class="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 z-49"
          ></div>
        </Show>
        <div
          class="bg-white dark:bg-gray-900 rounded-r-xl w-80 absolute top-0 left-0 bottom-0 shadow z-50 transition transform lg:translate-x-0 -translate-x-full"
          classList={{
            "!translate-x-0": showSidebar(),
          }}
        >
          <div class="h-250px flex items-center flex-col justify-center">
            <div class="rounded-full bg-white dark:bg-gray-900 p-1 shadow relative">
              <img
                src="/assets/me.png"
                alt="My Image"
                class="w-100px h-100px rounded-full"
              />
              <div class="absolute bottom-2.5 right-2.5 bg-green-400 rounded-full p-1.5 border-3 border-white dark:border-gray-900 shadow-sm"></div>
            </div>
            <div class="mt-3 text-center">
              <div class="text-primary">Muhammad Izza Alfiansyah</div>
              <div class="font-light text-xs">Full Stack Developer</div>
            </div>
          </div>
          <ul class="px-5">
            <For each={paths}>
              {(item) => (
                <li class="mb-2">
                  <Link
                    href={item.path}
                    title={item.title}
                    class="px-5 text-gray-500 block hover:text-primary rounded-full border border-gray-100 dark:border-gray-700 transform transition hover:-translate-x-1 py-2 flex items-center"
                    onClick={toggleSidebar}
                    classList={{
                      "!bg-primary !text-white !dark:text-gray-900 shadow-sm":
                        location.pathname == item.path,
                    }}
                  >
                    <i class={"mdi text-lg mr-3 " + item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              )}
            </For>
          </ul>
          <div class="mt-10 flex items-center justify-center">
            <button class="outline-none" onClick={toggleDark}>
              <i
                class="text-xl mdi text-yellow-500 mdi-weather-night"
                classList={{ "mdi-weather-sunny": !darkMode() }}
              ></i>
            </button>
          </div>
        </div>
        <div class="lg:ml-80 lg:mt-0 mt-20 py-10 lg:px-10 lg:p-5 p-2.5 flex items-stretch w-full overflow-y-scroll">
          <Router />
        </div>
        {/* <div class="nav h-15 px-6 flex z-20 flex-row items-center bg-white dark:bg-gray-900 shadow lg:(absolute left-0 bottom-0 top-0 w-72 h-screen flex-col py-10 justify-between) transition relative rounded-xl">
          <div class="flex-1">
            <Link
              href="/"
              class="text-blue-500 text-2xl text-shadow transform lg:(-rotate-90 inline-block mt-8)"
            >
              Alfiansyah
            </Link>
          </div>
          <div class="fixed z-20 bottom-5 left-5 right-5 rounded-full transition bg-white dark:bg-gray-900 shadow p-2 flex flex-row justify-evenly px-4 lg:(flex-1 flex-col relative p-0 left-0 right-0 py-4 mb-20 shadow-none)">
            <For each={paths}>
              {(item) => (
                <Link
                  href={item.path}
                  title={item.title}
                  class="px-3 text-gray-600 hover:text-blue-500 transform transition hover:-translate-y-1 (lg:px-0 py-3)"
                  classList={{
                    "!text-blue-500": location.pathname == item.path,
                  }}
                >
                  <i class={"mdi text-2xl " + item.icon}></i>
                </Link>
              )}
            </For>
          </div>
          <div class="flex-1 text-right lg:(absolute bottom-5 left-0 right-0 flex items-center justify-center)">
            <button class="outline-none" onClick={toggleDark}>
              <i
                class="text-xl mdi text-yellow-500 mdi-weather-night"
                classList={{ "mdi-weather-sunny": !darkMode() }}
              ></i>
            </button>
          </div>
        </div> */}
        {/* <div class="px-4 pb-16 py-10 lg:(ml-18 py-0 pb-0) lg:min-h-screen view">
          <Router></Router>
        </div> */}
        <button
          class="outline-none absolute top-5 right-5 w-10 z-10 h-10 flex items-center justify-center rounded-full transition bg-primary shadow-lg"
          onClick={handleMusic}
        >
          <i
            class="mdi dark:text-gray-900 text-white mdi-access-point text-xl"
            classList={{ "animate-spin": audioPlaying() }}
          ></i>
        </button>
      </div>
      {/* <div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center font-semibold lg:text-5xl text-3xl bg-white dark:bg-gray-900 z-30 text-blue-500 animate-loading pointer-events-none">
        <span class="animate-bounce">Loading...</span>
      </div> */}
    </>
  );
};

export default App;
