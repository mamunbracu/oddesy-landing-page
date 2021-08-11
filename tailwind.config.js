module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				mirage: {
					50: "#f3f4f4",
					100: "#e7e8ea",
					200: "#c3c6ca",
					300: "#9fa3aa",
					400: "#585f6b",
					500: "#101a2b",
					600: "#0e1727",
					700: "#0c1420",
					800: "#0a101a",
					900: "#080d15",
				},
				crimson: {
					50: "#fef4f6",
					100: "#fce8ec",
					200: "#f8c7d0",
					300: "#f3a5b3",
					400: "#ea617a",
					500: "#e11d41",
					600: "#cb1a3b",
					700: "#a91631",
					800: "#871127",
					900: "#6e0e20",
				},
        charade: {
          '50': '#f4f5f5', 
          '100': '#eaeaeb', 
          '200': '#c9cbce', 
          '300': '#a9acb1', 
          '400': '#696d76', 
          '500': '#282f3b', 
          '600': '#242a35', 
          '700': '#1e232c', 
          '800': '#181c23', 
          '900': '#14171d'
      }
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
