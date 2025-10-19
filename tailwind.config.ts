import nativewind from "nativewind/preset";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
	presets: [nativewind],
	theme: {
		extend: {
			colors: {
				"brand-purple": "#4637ca",
				"brand-gray": "#e5e7eb",
			},
			fontFamily: {
				"satoshi-bold": ["Satoshi-Bold"],
				"satoshi-medium": ["Satoshi-Medium"],
				"satoshi": ["Satoshi-Regular"],
			},
		},
	},
	plugins: [],
};

export default config;
