interface Career {
	company: string;
	position: string;
	start_date: Date;
	end_date?: Date;
	image: string;
	responsibilities: string[];
}

export enum Month {
	JANUARY = 0,
	FEBRUARY = 1,
	MARCH = 2,
	APRIL = 3,
	MAY = 4,
	JUNE = 5,
	JULY = 6,
	AUGUST = 7,
	SEPTEMBER = 8,
	OCTOBER = 9,
	NOVEMBER = 10,
	DECEMBER = 11,
}

export const careers: Career[] = [
	{
		company: "PT. Mascitra Teknologi Informasi",
		position: "Leader Junior Full Stack Web Developer",
		start_date: new Date(2019, Month.DECEMBER),
		end_date: new Date(2020, Month.MAY),
		image:
			"https://media.licdn.com/dms/image/C560BAQEm7dlvSIrp6Q/company-logo_200_200/0/1622715903607?e=2147483647&v=beta&t=5Y064WlK7ncmZNqF3O6Uno2rAklIz1QnVHVRw6maZPU",
		responsibilities: [
			"Coordinated the development of a web-based platform for a gaming community, ensuring alignment with user needs and project objectives.",
			"Analyzed and identified project requirements to deliver effective and user-focused solutions.",
		],
	},
	{
		company: "CV. Fopegram",
		position: "Full Stack Developer",
		start_date: new Date(2020, Month.OCTOBER),
		end_date: new Date(2021, Month.AUGUST),
		image:
			"https://png.pngtree.com/png-clipart/20221110/original/pngtree-f-logo-business-symbols-vector-template-letter-picture-image_3626283.png",
		responsibilities: [
			"Collaborated closely with development teams and management to align technical solutions with project requirements and business goals.",
			"Developed and maintained multiple web-based applications to support various business needs.",
			"Participated in the full software development lifecycle, including analysis, development, testing, and deployment of web applications.",
		],
	},
	{
		company: "CV. Bima Technologies",
		position: "Junior IoT Engineer Internship",
		start_date: new Date(2023, Month.SEPTEMBER),
		end_date: new Date(2024, Month.FEBRUARY),
		image:
			"https://img.mbizmarket.co.id/company/thumbs/343x343/2022/10/25/d2e17cc3d997e596ce8c0c035029920b.jpg",
		responsibilities: [
			"Installed and maintained the queue management system across public health centers (Puskesmas) throughout Jember Regency, ensuring system reliability and continuous operation.",
			"Conducted user training and socialization sessions on the usage of the Jember Regency healthcare information system for healthcare staff and stakeholders.",
		],
	},
	{
		company: "CV. Sinergi Teknokarya",
		position: "Mobile Developer",
		start_date: new Date(2024, Month.SEPTEMBER),
		end_date: new Date(2024, Month.DECEMBER),
		image:
			"https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/4b91f6fa261db430a0a31fa040d76f20.jpeg",
		responsibilities: ["Developing hotel reservation app using Flutter."],
	},
	{
		company: "ERA Indonesia",
		position: "Full Stack & Mobile Flutter Developer",
		start_date: new Date(2024, Month.NOVEMBER),
		image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Era_real.jpg",
		responsibilities: [
			"Implemented well-structured front-end ensuring high standards of functionality, performance, security, and maintainability.",
			"Developed a Knowledge Management System as a remote learning and online education platform for Badiklat Kemhan RI.- Implemented well-structured front-end ensuring high standards of functionality, performance, security, and maintainability. - Developed a Knowledge Management System as a remote learning and online education platform for Badiklat Kemhan RI.",
			" Implemented well-structured front-end and back-end systems, ensuring high standards of functionality, performance, security, and maintainability.",
			"Integrated intelligent features such as chatbots and face detection into e-learning platforms to enhance user experience and system reliability.",
			"Developed a mobile productivity application tools, including the implementation of a real-time collaborative editor.",
			"Led the development of a Human/Talent Resource Management System with AI-based decision support using a Retrieval-Augmented Generation (RAG) approach.",
		],
	},
];
