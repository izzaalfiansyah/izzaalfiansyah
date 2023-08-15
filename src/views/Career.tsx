import Title from "@/components/title/title";
import { Component } from "solid-js";

const Career: Component = () => {
  const data: Array<{
    company: string;
    position: string;
    date: string;
    image: string;
  }> = [
    {
      company: "Mascitra.com",
      position: "Leader Junior Full Stack Developer",
      date: "Dec 2019 - Apr 2020",
      image:
        "https://media.licdn.com/dms/image/C560BAQEm7dlvSIrp6Q/company-logo_200_200/0/1622715903607?e=2147483647&v=beta&t=5Y064WlK7ncmZNqF3O6Uno2rAklIz1QnVHVRw6maZPU",
    },
    {
      company: "Fopegram",
      position: "Back End Developer",
      date: "Oct 2020 - Agu 2022",
      image:
        "https://png.pngtree.com/png-clipart/20221110/original/pngtree-f-logo-business-symbols-vector-template-letter-picture-image_3626283.png",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      date: "Mar 2022 - Now",
      image: "https://miro.medium.com/max/1200/1*BBct14l3of-42X9TjH65QA.png",
    },
  ];

  return (
    <>
      <div class="w-full">
        <Title title="Career" subtitle="The amazing of my experience" />
        <div class="w-full">
          {data.map((item) => (
            <div class="bg-white !bg-opacity-25 dark:bg-gray-900 rounded-lg shadow backdrop-blur p-3 mb-4 transition transform hover:scale-105 mb-3">
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
