import Title from "@/components/title/title";
import { Component, For } from "solid-js";

export const social_media = [
  {
    title: "Github",
    link: "https://github.com/izzaalfiansyah",
    icon: "github text-gray-800 dark:text-white",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-izza-alfiansyah-76a473220",
    icon: "linkedin text-blue-500",
  },
  {
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=6281231921351",
    icon: "whatsapp text-green-500",
  },
  {
    title: "Email",
    link: "mailto:iansyah724@gmail.com",
    icon: "email text-red-500",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/izzaalfiansyah_/",
    icon: "instagram text-purple-500",
  },
  {
    title: "Facebook",
    link: "https://facebook.com/profile.php?id=100027236859562",
    icon: "facebook text-blue-500",
  },
];

const Contact: Component = () => {
  return (
    <>
      <div class="w-full">
        <Title title="Contact" subtitle="The places when you can find me" />
        <div class="flex w-full flex-wrap">
          <div class="lg:w-2/5 w-full lg:pr-4">
            <For each={social_media}>
              {(item) => (
                <a
                  target="_blank"
                  href={item.link}
                  class="bg-white dark:bg-gray-900 !bg-opacity-30 rounded-lg mb-3 shadow p-4 flex transition hover:scale-[103%]"
                >
                  <div class="w-40px pr-3 text-center">
                    <i class={"mdi mdi-" + item.icon}></i>
                  </div>
                  <div>{item.title}</div>
                </a>
              )}
            </For>
          </div>
          <div class="lg:w-3/5 w-full">
            <div class="bg-white dark:bg-gray-900 !bg-opacity-30 shadow p-4 rounded-lg">
              <div class="text-center">
                Dusun Karanganyar RT002/RW008, Desa Karangrejo, Kecamatan
                Gumukmas, Kabupaten Jember
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.9330243867967!2d113.41835782915234!3d-8.329396672666993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ca3012ac46e0bfa!2zOMKwMTknNDUuOCJTIDExM8KwMjUnMDguMSJF!5e0!3m2!1sen!2sid!4v1649400288617!5m2!1sen!2sid"
                class="h-[300px] w-full mt-4 shadow"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
