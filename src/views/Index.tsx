import { Component } from "solid-js";
import CV from "@/assets/cv.pdf";
import { Link } from "@solidjs/router";

const Index: Component = () => {
  const names = ["Muhammad Izza", "Alfiansyah"];

  return (
    <div class="flex lg:items-center items-stretch justify-center w-full">
      <div class="flex lg:flex-row flex-col justify-center items-center bg-white dark:bg-gray-900 lg:!bg-transparent !bg-opacity-25 rounded-xl lg:py-0 py-10 w-full gap-x-10 lg:p-0 p-5">
        <div class="lg:flex-1 text-center lg:text-left">
          <div class="text-xl text-light mb-2">
            Hello, <span class="text-2xl">👋</span>
          </div>
          <div
            class="lg:text-[60px] text-[35px] font-bold"
            style={{ "line-height": "1.2" }}
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
          <div class="mt-5 font-light lg:text-base">
            People ussually call me Alfian, full stack developer based on
            Jember, Indonesia. I have a lot of experience and would love to talk
            with you.
          </div>
          <div class="flex gap-x-4 mt-10 justify-center lg:justify-start">
            <a
              href={CV}
              target="_blank"
              class="bg-white dark:bg-gray-900 shadow uppercase rounded-full lg:px-8 px-5 p-3 text-sm inline-block transform transition hover:scale-110"
            >
              DOWNLOAD CV
            </a>
            <Link
              href="/about"
              class="bg-primary shadow text-white dark:text-gray-900 uppercase rounded-full lg:px-8 px-5 p-3 text-sm inline-block transform transition hover:scale-110"
            >
              ABOUT ME
            </Link>
          </div>
        </div>
        <div class="order-first lg:order-last">
          <img
            src="/assets/me.png"
            class="rounded-full lg:w-[330px] w-[200px] lg:h-[330px] h-[200px] object-cover shadow lg:mb-0 mb-10 cursor-pointer transition transform hover:-translate-y-5 border-8 border-white dark:border-gray-900 !border-opacity-25"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
