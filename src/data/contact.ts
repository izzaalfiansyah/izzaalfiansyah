export interface ContactLink {
	name: string;
	icon: string;
	url: string;
	color?: string;
}

export const contactLinks: ContactLink[] = [
	{
		name: "Github",
		icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
		url: "https://github.com/izzaalfiansyah",
	},
	{
		name: "LinkedIn",
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png",
		url: "https://www.linkedin.com/in/muhammad-izza-alfiansyah-76a473220",
		color: "#0077B5",
	},
	{
		name: "Whatsapp",
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png",
		url: "https://api.whatsapp.com/send?phone=6281231921351",
		color: "#25D366",
	},
	{
		name: "Email",
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
		url: "mailto:iansyah724@gmail.com",
		color: "#EA4335",
	},
	{
		name: "Instagram",
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png",
		url: "https://www.instagram.com/izzaalfiansyah_/",
		color: "#E1306C",
	},
	{
		name: "Facebook",
		icon: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png",
		url: "https://facebook.com/profile.php?id=100027236859562",
		color: "#1877F2",
	},
];
