import Email from "@/components/icon/Email.astro"
import Facebook from "@/components/icon/Facebook.astro"
import Github from "@/components/icon/Github.astro"
import Instagram from "@/components/icon/Instagram.astro"
import Linkedin from "@/components/icon/Linkedin.astro"
import type { AIconProps } from "@/components/icon/type"
import Whatsapp from "@/components/icon/Whatsapp.astro"
import {
  EMAIL_URL,
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "./constant"

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
    url: GITHUB_URL,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: LINKEDIN_URL,
    color: "#0077B5",
  },
  {
    name: "Whatsapp",
    icon: Whatsapp,
    url: WHATSAPP_URL,
    color: "#25D366",
  },
  {
    name: "Email",
    icon: Email,
    url: EMAIL_URL,
    color: "#EA4335",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: INSTAGRAM_URL,
    color: "#E1306C",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: FACEBOOK_URL,
    color: "#1877F2",
  },
]
