/**
 * KADOMARU Codeworks - Tailwind CSS Configuration
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "navy-main": "#0A3A78",
        "navy-sub": "#245FA0",
        "navy-dark": "#062952",
        "accent-gold": "#c9a466",
        "gray-bg": "#F8FAFC",
        "pale-blue": "#EFF6FF",
        "pale-gold": "#FFFBEB",
        "text-dark": "#1E293B",
        "text-gray": "#475569",
      },
      fontFamily: {
        maru: ['"Zen Maru Gothic"', "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(248, 250, 252, 0.95), rgba(239, 246, 255, 0.9)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
};
