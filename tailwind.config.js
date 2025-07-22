/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // GPRealty-inspired vibrant gradient color palette
        'primary-blue': '#3B82F6',        // Blue-500
        'primary-purple': '#8B5CF6',      // Purple-500
        'primary-pink': '#EC4899',        // Pink-500
        'primary-cyan': '#06B6D4',        // Cyan-500
        'primary-orange': '#F97316',      // Orange-500
        'primary-red': '#EF4444',         // Red-500
        'primary-green': '#10B981',       // Green-500
        'primary-teal': '#14B8A6',        // Teal-500
        
        // Lighter variants
        'light-blue': '#60A5FA',          // Blue-400
        'light-purple': '#A78BFA',        // Purple-400
        'light-pink': '#F472B6',          // Pink-400
        'light-cyan': '#22D3EE',          // Cyan-400
        'light-orange': '#FB923C',        // Orange-400
        'light-red': '#F87171',           // Red-400
        'light-green': '#34D399',         // Green-400
        'light-teal': '#2DD4BF',          // Teal-400
        
        // Darker variants
        'dark-blue': '#1D4ED8',           // Blue-700
        'dark-purple': '#7C3AED',         // Purple-700
        'dark-pink': '#BE185D',           // Pink-700
        'dark-cyan': '#0E7490',           // Cyan-700
        'dark-orange': '#C2410C',         // Orange-700
        'dark-red': '#B91C1C',            // Red-700
        'dark-green': '#047857',          // Green-700
        'dark-teal': '#0F766E',           // Teal-700

        // Legacy colors for compatibility
        'teal-primary': '#14B8A6',        // Same as primary-teal
        'green-accent': '#10B981',        // Same as primary-green
        'sage': '#84CC16',                // Lime-500 for sage
        'mint': '#6EE7B7',                // Emerald-300

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer-slide": "shimmer-slide 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 