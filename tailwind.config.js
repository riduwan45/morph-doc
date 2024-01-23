const { morui } = require("@morui/theme/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../docs/**/*.mdx",
    "./node_modules/@morui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ], // my markdown stuff is in ../docs, not /src
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {},
  },
  plugins: [
    morui({
      prefix: "morui",
      addCommonColors: false,
      // defaultTheme: "dark",
      // defaultExtendTheme: "dark",
      layout: {
        spacingUnit: 4, // in px
        disabledOpacity: ".5", // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        fontSize: {
          tiny: "1rem", // 16  about-checktext-tiny
          small: "1.25rem", // 20 text-small
          medium: "1.5rem", // 24 text-medium
          large: "40px", // text-large
          huge: "56px",
          // gigantic: "112px",
        },
        lineHeight: {
          tiny: "1rem", // 24px text-tiny
          small: "1.75rem", // 28px text-small
          medium: "2rem", // 32px text-medium
          large: "65px", // text-large
          huge: "72px", // text-huge
          // gigantic: "128px",
        },
        fontWeight: {
          hairline: "100", // font-hairline
          light: "300", // font-light
          normal: "400", // font-normal
          medium: "500", // font-bold
          semibold: "600", // font-semibold
          bold: "700", // font-bold
          extrabold: "800", // font-extrabold
          black: "900", // font-black
          tiny: "400",
          small: "500",
          // medium: "600",
          // large: "700",
          // huge: "800",
        },
        radius: {
          tiny: "4px", // rounded-tiny
          small: "8px", // rounded-small
          medium: "12px", // rounded-medium
          large: "24px", // rounded-large
        },
        borderColor: {
          default: "#999",
        },
        borderWidth: {
          tiny: "1px",
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "3px", // border-large
        },
        boxShadow: {
          small: "0px 3px 6px 0px rgba(0, 0, 0, 0.20)",
        },
      },
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            "title-1": "#1A1A1A",
            title: "#FFF", // #0B0D0C
            bg: "#FFF",
            card: "#F5F5F5",
            "linear-purple":
              "linear-gradient(90deg, #4F60FF -7.22%, #8762F3 131.45%)",

            red: "#F53F5F",
            green: "#00CB9A",
            yellow: "#F7A01E",
            purple: "#846DFF", // brand

            brand: "#00CB9A",
            "brand-high": "#62FFA4",

            "red-aid": "#FDD9DF",
            "green-aid": "#D9F7F0",
            "yellow-aid": "#FDECD2",
            "purple-aid": "#E6E2FF",

            "title-2": "#595959",
            "title-3": "#1A1A1A",
            "desc-1": "#999",
            "desc-2": "#D9D9D9",
            line: "#EBEBEB",
            border: "#999",
            "border-card": "#fff",
            "border-0": "#999",
            "border-1": "#BFBFBF",
            "border-2": "#EBEBEB",
            "border-3": "#595959",

            "bg-img": "#BFBFBF",

            tag: "#D9F7F0",

            primary: {
              DEFAULT: "#00CB9A",
              foreground: "#fff",
            },

            default: {
              DEFAULT: "#333",
              500: "#1A1A1A",
              600: "#999",
            },


            "bg-gradient": "linear-gradient(0deg, #664EF1 0%, #3A2E83 38.91%, #17132B 100%)",
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            "title-1": "#F7F7F7",
            title: "#000", // #0B0D0C
            bg: "#000", // #0B0D0C
            card: "#1A1A1A",
            "linear-purple":
              "linear-gradient(90deg, #4F60FF -7.22%, #8762F3 131.45%)",

            red: "#F4294D",
            green: "#62FFA4",
            yellow: "#F7A01E",
            purple: "#846DFF",

            brand: "#62FFA4",
            "brand-high": "#00CB9A",

            "red-aid": "#3B0F17",
            "green-aid": "#0C3C1D",
            "yellow-aid": "#3B2607",
            "purple-aid": "#1C183B",

            "title-2": "#CCC",
            "title-3": "#CCC",
            "desc-1": "#999",
            "desc-2": "#4D4D4D",
            line: "#333",
            border: "#999",
            "border-card": "#999",
            "border-0": "#333",
            "border-1": "#666",
            "border-2": "#333",
            "border-3": "#CCC",

            "bg-img": "#333",

            tag: "#0F2518",

            primary: {
              DEFAULT: "#62FFA4",
              foreground: "#000000",
            },

            default: {
              DEFAULT: "#333",
              500: "#CCC",
              600: "#CCC",
            },

            // end
            "bg-assist": "#333",

            nav: "#D0D0D0",
            "nav-hover": "#FFF",
            "sub-nav": "#F7FAF9",
            "sub-nav-hover": "#000",
            "sub-nav-bg": "#151E1C",
            "sub-nav-item-bg": "#40F0C1",

            "desc-4": "#999",
            "desc-3": "#CCC",

            content: "#D0D0D0",

            "icon-bg-for-green": "#353535",
            "text-color-for-green": "#000",
            "base-color": "#3CFFC8",

            divider: "#666",

            "blue-gradient":
              "linear-gradient(90deg, #4F60FF -7.22%, #8762F3 131.45%)",
            "btn-bg-green":
              "linear-gradient(85deg, #40F0C1 22.5%, #BFFD3E 236.7%)",
            "bg-gradient": "linear-gradient(0deg, #664EF1 0%, #3A2E83 38.91%, #17132B 100%)",
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
