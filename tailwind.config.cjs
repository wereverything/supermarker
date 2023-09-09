/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pops: ["Poppins"],
				nuni: ["Nunito"]
			}
		},
	},
	plugins: [],
}
