import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        landingText: ["broadway"],
        customHeading: ["headingFont"],
        customSubHeading: ["subHeadingFont"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "2rem",
        "2.5xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
        "6xl": "6rem",
        "7xl": "7rem",
        "8xl": "8rem",
        "9xl": "11.451em",
      },
      screens: {
        sm: "640px", // => @media (min-width: 640px) { ... }
        md: "768px", // => @media (min-width: 376px) { ... }
        lg: "1024px", // => @media (min-width: 1024px) { ... }
        xl: "1280px", // => @media (min-width: 1280px) { ... }
      },
      backgroundColor: {
        landingBg: "#70a9a1",
        waitlistBg: "#40798C",
      },
      colors: {
        primary: "#CFE0C3",
        secondary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
