import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"], // Controle de tema escuro usando classe
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Para Next.js, normalmente as páginas ficam aqui
    "./components/**/*.{js,ts,jsx,tsx}", // Para seus componentes
    "./app/**/*.{js,ts,jsx,tsx}", // Caso esteja usando a estrutura do diretório `app`
    "./src/**/*.{js,ts,jsx,tsx}", // Se você estiver usando `src` como diretório
		"./src/pages/produto/**/*.{js,ts,jsx,tsx}",
		 "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		
		
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "blue-light": "#B7EAFC",
        "blue-medium": "#59D2FE",
        "blue-dark": "#1AC0FD",
        "grey-dark": "#D9D9D9",
        "grey-light": "#F9F9F9",
        "white-main": "#FCFCFC",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        container: "77.5rem", // Para o layout do conteúdo
      },
      boxShadow: {
        "custom-card": "7px 7px 11.9px rgba(183, 234, 252, 0.5)",
        "custom-card-2": "1px 3px 11.1px -3px rgba(26, 192, 253, 0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Adicionando animações
} satisfies Config;
