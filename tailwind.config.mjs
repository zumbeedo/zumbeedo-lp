/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					200: '#F9E4A0',
					300: '#FFD253',
					400: '#F3BC53',
					500: '#F3AF27',
					600: '#FFB931BF',
					650: '#FFB931',
					700: '#322A24',
				},
				primary: {
					400: '#E9BE91',
					500: '#CF9267',
					600: '#502F08BF',
					650: '#502F08',
					700: '#2D1902BF',
					750: '#2D1902',
				},
				secondary: {
					200: '#FDFDF2',
					250: '#E5D9CA',
					300: '#DDCEBB',
					400: '#C9BBA8',
					500: '#756B64',
					600: '#544F4B',
				},
			}

		},
	},
	plugins: [],
}
