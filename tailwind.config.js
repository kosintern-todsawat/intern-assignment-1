/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				redShadow: "0px 0px 20px #EC2F2F",
			},
			colors: {
				redColour: "#EC2F2F",
			},
		},
	},
	plugins: [],
};
