/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      /* brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2d2421",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#5fcfdd",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#f0a94f",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#8a938e",
      darkGrey: "#3f4441",
       */
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
      pastalPink:"#FADADD",
      pastalBlue:"#2F3C7E",
      sageGreen:"#BFD8B8",
      lavenderMist:"#D6C8E2",
      roseGold: "#B76E79",
      warmCream: "#FFFDD0",   // Background color
      charcoalGray: "#36454F", // Body text color
      dustyRose: "#DCA1A1",     // Headings/Titles color
      darkBackground: "#0A0A0A",      // Deep black for elegance & focus
      glowingPink: "#FF3CAC",         // Like the Apple glow effect
      glowingPurple: "#784BA0",       // Subtle energy, modern
      glowingOrange: "#FFB75E",       // Warm contrast and highlight
      textColor: "#E0E0E0",           // Light gray for readability
      headingColor: "#FFFFFF",        // Pure white for strong contrast
      accentBlue: "#3D9FFF",           // Call-to-action, buttons, links
      // color set
      bl: "#222831",
      gr: "#393E46",
      cy: "#00ADB5",
      wt: "#EEEEEE",

      radiantViolet: "#B388FF",
      iceBlue: "#00E0FF",
      neon:"#FF4DB8",
      bloodRed: "#D72638",

    },
    extend: {
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      boxShadow: {
        'glow-pink': '0 0 15px rgba(255, 60, 172, 0.4)',
        cyanShadow: "0px 0px 20px 0px rgba(12, 125, 140, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(6, 179, 202, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(0, 225, 255, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(133, 0, 126, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(210, 0, 46, 0.5)",
        orange: "rgba(255, 0, 242, 0.5)"
      }

    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
