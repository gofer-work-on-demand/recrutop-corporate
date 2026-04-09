import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        dark: "var(--color-dark)",
        accent: "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "bg-light": "var(--color-bg-light)",
        bg: "var(--color-bg)",
        surface: "var(--color-white)",
        border: "var(--color-border)",
        white: "var(--color-white)",
        gofer: "var(--color-gofer)",
        resto: "var(--color-resto)",
        event: "var(--color-event)",
        passerelle: "var(--color-passerelle)",
        "passerelle-navy": "var(--color-passerelle-navy)",
        garden: "var(--color-garden)",
        carriere: "var(--color-carriere)",
        jpsi: "var(--color-jpsi)",
        "art-interim": "var(--color-art-interim)",
        mecatech: "var(--color-mecatech)",
        "mecatech-alt": "var(--color-mecatech-alt)",
        "filiere-tp": "var(--color-filiere-tp)",
        "filiere-patrimoine": "var(--color-filiere-patrimoine)",
        "filiere-event": "var(--color-filiere-event)",
        "filiere-hotel": "var(--color-filiere-hotel)",
        "filiere-paysage": "var(--color-filiere-paysage)",
        "filiere-maintenance": "var(--color-filiere-maintenance)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(0, 44, 85, 0.12)",
        "card-hover": "0 20px 60px rgba(0, 44, 85, 0.15)",
        hero: "0 20px 60px rgba(0, 44, 85, 0.15)",
      },
      borderRadius: {
        card: "16px",
        "card-sm": "12px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
