interface Contact {
  title: string;
  link: string;
  class: string;
  image: string;
}

export const contacts: Contact[] = [
  {
    title: "Github",
    link: "https://github.com/izzaalfiansyah",
    class: "github text-gray-800 dark:text-white",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-izza-alfiansyah-76a473220",
    class: "linkedin text-blue-500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png",
  },
  {
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=6281231921351",
    class: "whatsapp text-green-500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png",
  },
  {
    title: "Email",
    link: "mailto:iansyah724@gmail.com",
    class: "email text-red-500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/izzaalfiansyah_/",
    class: "instagram text-purple-500",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png",
  },
  {
    title: "Facebook",
    link: "https://facebook.com/profile.php?id=100027236859562",
    class: "facebook text-blue-500",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png",
  },
];
