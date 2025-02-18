import forms from '@tailwindcss/forms'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'border-flow': 'border-flow 4s linear infinite',
        'border-flow-delay-25': 'border-flow 2s linear infinite 0.5s',
        'border-flow-delay-50': 'border-flow 2s linear infinite 1s',
        'border-flow-delay-75': 'border-flow 2s linear infinite 1.5s',
        'spin-slow': 'spin 20s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'orbit': 'orbit 12s linear infinite',
        'gradient-slow': 'gradient 15s ease infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'pulse-slow-delay': 'pulse 6s ease-in-out 3s infinite',
        'reverse-spin': 'reverse-spin 25s linear infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'gradient-xy-fast': 'gradient-xy 8s ease infinite',
        
        
        
      },
      keyframes: {
        'border-flow': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },

        gradient: {
          '0%, 100%': {
            transform: 'rotate(-15deg) scale(1.5)',
          },
          '50%': {
            transform: 'rotate(15deg) scale(2)',
          },
        },
        'reverse-spin': {
          'from': {
            transform: 'rotate(360deg)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
      },

      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    forms,
  ],
}

export default config