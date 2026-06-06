import Email from "@/components/icon/Email.astro"
import Facebook from "@/components/icon/Facebook.astro"
import Github from "@/components/icon/Github.astro"
import Instagram from "@/components/icon/Instagram.astro"
import Linkedin from "@/components/icon/Linkedin.astro"
import type { AIconProps } from "@/components/icon/type"
import Whatsapp from "@/components/icon/Whatsapp.astro"

export interface ContactLink {
  name: string
  icon: (_props: AIconProps) => unknown
  url: string
  color?: string
}

export const contactLinks: ContactLink[] = [
  {
    name: "Github",
    icon: Github,
    url: "https://github.com/izzaalfiansyah",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/muhammad-izza-alfiansyah-76a473220",
    color: "#0077B5",
  },
  {
    name: "Whatsapp",
    icon: Whatsapp,
    url: "https://api.whatsapp.com/send?phone=6281231921351",
    color: "#25D366",
  },
  {
    name: "Email",
    icon: Email,
    url: "mailto:iansyah724@gmail.com",
    color: "#EA4335",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/izzaalfiansyah_/",
    color: "#E1306C",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/profile.php?id=100027236859562",
    color: "#1877F2",
  },
]
