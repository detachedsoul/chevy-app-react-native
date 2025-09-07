import nativewind from "nativewind/preset";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
	],
	presets: [nativewind],
	theme: {
        extend: {
            colors: {
                "brand-purple": "#4637ca"
            }
        },
	},
	plugins: [],
};

export default config;
