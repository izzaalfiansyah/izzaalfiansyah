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
  const [isLoading, setIsLoading] = createSignal(true);

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

    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  });

  return (
    <div class="min-h-screen lg:p-3 p-0.5 bg-primary flex items-stretch bg-center bg-fixed bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ485eueXmsPR6z4HhzXF1Fl7NoQhv3kLyA&usqp=CAU')] dark:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-h9ytvbqRrKymPrUc7GeDcErNlVYE_lq9odW2oXmxfeT3sM6yNToxVn9s8-iEcHiF1w&usqp=CAU')] transition">
      <div class="bg-white transition bg-opacity-25 dark:bg-opacity-25 backdrop-blur border-white dark:border-gray-900 border-2 !border-opacity-25 text-black dark:bg-gray-800 dark:text-white relative rounded-xl overflow-hidden shadow w-full flex items-stretch">
        <Show
          when={!isLoading()}
          fallback={
            <div class="flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0">
              <div class="flex loading">
                <div class="bg-primary p-7 rounded-full"></div>
                <div class="bg-white dark:bg-gray-900 !bg-opacity-50 p-7 rounded-full"></div>
              </div>
            </div>
          }
        >
          <div class="lg:hidden absolute top-0 left-0 right-0 h-20 rounded-xl bg-white dark:bg-gray-900 !bg-opacity-50 shadow-sm flex items-center justify-between px-5">
            <button type="button" onClick={toggleSidebar}>
              <i class="mdi mdi-menu text-xl"></i>
            </button>
          </div>
          <Show when={showSidebar()}>
            <div
              onClick={toggleSidebar}
              class="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-49"
            ></div>
          </Show>
          <div
            class="bg-white dark:bg-gray-900 lg:!bg-opacity-50 bg-opacity-100 rounded-r-xl w-80 absolute top-0 left-0 bottom-0 shadow z-50 transition transform lg:translate-x-0 -translate-x-full"
            classList={{
              "!translate-x-0": showSidebar(),
            }}
          >
            <div class="h-[250px] flex items-center flex-col justify-center">
              <div class="rounded-full bg-white dark:bg-gray-900 !bg-opacity-25 p-1 shadow relative">
                <img
                  src="/assets/me.png"
                  alt="My Image"
                  class="w-[100px] h-[100px] rounded-full"
                />
                <div class="absolute bottom-2 right-2 bg-green-400 rounded-full p-1.5 border-4 border-white dark:border-gray-900 shadow-sm"></div>
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
                      class="px-5 text-gray-700 dark:text-gray-400 font-light block rounded-full bg-opacity-50 dark:bg-opacity-50 bg-white dark:bg-gray-900 transform transition hover:-translate-x-1 py-2 flex items-center outline-none shadow-sm"
                      onClick={toggleSidebar}
                      classList={{
                        "!bg-primary !bg-opacity-100 !text-white !dark:text-gray-900":
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
                  class="text-xl mdi text-primary mdi-weather-night"
                  classList={{ "mdi-weather-sunny": !darkMode() }}
                ></i>
              </button>
            </div>
          </div>
          <div class="lg:ml-80 lg:mt-0 mt-20 py-10 lg:px-10 p-2.5 flex items-stretch w-full view">
            <Router />
          </div>
          <button
            class="outline-none absolute top-5 right-5 w-10 z-10 h-10 flex items-center justify-center rounded-full transition bg-primary shadow-lg"
            onClick={handleMusic}
          >
            <i
              class="mdi dark:text-gray-900 text-white mdi-access-point text-xl"
              classList={{ "animate-spin": audioPlaying() }}
            ></i>
          </button>
        </Show>
      </div>
    </div>
  );
};

export default App;
