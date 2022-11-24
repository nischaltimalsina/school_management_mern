/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					75: "#eef2f3",
					150: "#e0e4e7",
					550: "#4a5060",
					750: "#363c4e",
				},
				peach: {
					50: "#ffd6b1",
					100: "#ffcca7",
					200: "#ffc29d",
					300: "#ffb893",
					400: "#f8ae89",
					500: "#eea47f",
					600: "#e49a75",
					700: "#da906b",
					800: "#d08661",
					900: "#c67c57",
				},
			},
		},
	},
	plugins: [],
};
