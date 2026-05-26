export interface Career {
  company: string
  logo: string
  role: string
  period: string
  current?: boolean
}

export const careers: Career[] = [
  {
    company: "ERA Indonesia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Era_real.jpg",
    role: "Full Stack & Mobile Flutter Developer",
    period: "Nov 2024 - Now",
    current: true,
  },
  {
    company: "CV. Sinergi Teknokarya",
    logo: "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/4b91f6fa261db430a0a31fa040d76f20.jpeg",
    role: "Mobile Developer",
    period: "Sep 2024 - Dec 2024",
  },
  {
    company: "CV. Bima Technologies",
    logo: "https://img.mbizmarket.co.id/company/thumbs/343x343/2022/10/25/d2e17cc3d997e596ce8c0c035029920b.jpg",
    role: "Junior IoT Engineer Internship",
    period: "Sep 2023 - Feb 2024",
  },
  {
    company: "CV. Fopegram",
    logo: "https://png.pngtree.com/png-clipart/20221110/original/pngtree-f-logo-business-symbols-vector-template-letter-picture-image_3626283.png",
    role: "Full Stack Developer",
    period: "Oct 2020 - Aug 2021",
  },
  {
    company: "PT. Mascitra Teknologi Informasi",
    logo: "https://media.licdn.com/dms/image/C560BAQEm7dlvSIrp6Q/company-logo_200_200/0/1622715903607?e=2147483647&v=beta&t=5Y064WlK7ncmZNqF3O6Uno2rAklIz1QnVHVRw6maZPU",
    role: "Leader Junior Full Stack Web Developer",
    period: "Dec 2019 - May 2020",
  },
]
