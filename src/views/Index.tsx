import { Component } from "solid-js";
import CV from "@/assets/cv.pdf";
import { Link } from "@solidjs/router";

const Index: Component = () => {
  const names = ["Muhammad Izza", "Alfiansyah"];

  return (
    <div class="flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
      <div class="lg:flex-1 text-center lg:text-left">
        <div
          class="lg:text-[60px] text-[35px] font-bold"
          style={{ "line-height": "1" }}
        >
          {names.map((name) => (
            <div>
              {[...name].map((i) => (
                <span
                  class="transition hover:rotate-45 hover:text-primary text-shadow"
                  classList={{ "hover:inline-block": i != " " }}
                >
                  {i}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div class="flex gap-x-4 mt-10">
          <a
            href={CV}
            target="_blank"
            class="bg-white dark:bg-gray-900 shadow uppercase rounded-full px-8 p-3 text-sm inline-block transform transition hover:scale-110"
          >
            DOWNLOAD CV
          </a>
          <Link
            href="/about"
            class="bg-primary shadow text-white dark:text-gray-900 uppercase rounded-full px-8 p-3 text-sm inline-block transform transition hover:scale-110"
          >
            ABOUT ME
          </Link>
        </div>
      </div>
      <div class="order-first lg:order-last">
        <img
          src="/assets/me.png"
          class="rounded-full lg:w-[330px] w-[200px] lg:h-[330px] h-[200px] border-8 object-cover border-white border-opacity-25 dark:border-gray-900 dark:border-opacity-25 shadow lg:mb-0 mb-14 cursor-pointer transition transform hover:-translate-y-5 mt-5"
        />
      </div>
    </div>
  );
};

export default Index;
