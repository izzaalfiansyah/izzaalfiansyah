import { careers } from "./career";

export const profile = {
  firstName: "Muhammad",
  lastName: "Izza Alfiansyah",
  position: "Full Stack & Mobile Flutter Developer",
  email: "iansyah724@gmail.com",
  phone: "+6281231921351",
  address: "Jember, East Java, Indonesia",
  get name(): string {
    return this.firstName + " " + this.lastName;
  },
  get siteName(): string {
    return this.name + " | " + this.position;
  },
  get description(): string {
    return `Hello! My Name is ${this.name} and you can call me Alfian. I am a ${
      this.position
    } at ${
      careers[careers.length - 1].company
    } I Live in Jember Regency, East Java Indonesia. I started programming when I was in high school at SMK PGRI 5 Jember, The most meritorious place in my ability development. I am very enthusiastic about learning new things in the world of technology.`;
  },
};
