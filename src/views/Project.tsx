import Title from "@/components/title/title";
import project from "@/datas/project";
import { Link } from "@solidjs/router";
import { Component, For } from "solid-js";

const Project: Component = () => {
  return (
    <>
      <div class="w-full">
        <Title
          title="Project"
          subtitle="Collection of works of achievements that I made individually or in groups"
        />
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <For each={project}>
            {(item) => (
              // <Link
              //   href={"/project/" + item.name.toLowerCase().replace(/ /gi, "-")}
              //   class="bg-white dark:bg-gray-900 !bg-opacity-25 rounded-lg relative shadow overflow-hidden group"
              // >
              //   {item.name}
              // </Link>
              <Link
                href={"/project/" + item.name.toLowerCase().replace(/ /gi, "-")}
                class="bg-white dark:bg-gray-900 !bg-opacity-25 rounded-lg relative shadow overflow-hidden group p-3"
              >
                <div
                  class="absolute -top-1 right-2 p-1 px-3 text-xs !bg-opacity-50 uppercase shadow dark:bg-gray-900 bg-white rounded-b-lg z-[3]"
                  classList={{
                    "text-green-500": item.team,
                    "text-primary": !item.team,
                  }}
                >
                  {item.team ? "Group" : "Individual"}
                </div>
                <img
                  src={"/assets/project/" + item.photo[0]}
                  class="lg:h-[200px] h-[150px] object-cover w-full transform transition rounded group-hover:scale-105"
                  alt=""
                />
                <div class="absolute top-0 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 text-primary transition flex opacity-0 group-hover:opacity-95 items-center justify-center rounded z-2 text-2xl uppercase font-semibold transition">
                  <div class="text-center">{item.name}</div>
                </div>
              </Link>
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default Project;
