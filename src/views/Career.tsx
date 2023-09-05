import Title from "@/components/title/title";
import careers from "@/datas/career";
import { Component } from "solid-js";

const Career: Component = () => {
  return (
    <>
      <div class="w-full">
        <Title title="Career" subtitle="The amazing of my experience" />
        <div class="w-full">
          {careers.map((item) => (
            <div class="bg-white !bg-opacity-30 dark:bg-gray-900 rounded-lg shadow p-3 mb-4 transition transform hover:scale-[103%] mb-3">
              <div class="flex md:flex-row flex-col justify-between items-center">
                <div class="md:w-auto w-full">
                  <img
                    class="md:w-[400px] w-full md:mb-0 mb-8 h-40 bg-gray-100 rounded-md object-cover"
                    src={item.image}
                    alt={item.company}
                  />
                </div>
                <div class="md:pl-5 w-full">
                  <div class="text-3xl font-semibold text-primary">
                    {item.company}
                  </div>
                  <div class="mt-1">{item.position}</div>
                  <div class="mt-1">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Career;
