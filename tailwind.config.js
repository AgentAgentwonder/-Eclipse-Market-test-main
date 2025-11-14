module.exports = {
    darkMode: ['class'],
    content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@solana/wallet-adapter-react-ui/**/*.js'
  ],
  theme: {
  	extend: {
  		colors: {
  			'solana-purple': '#9945FF',
  			'solana-green': '#14F195',
  			'deep-space': 'var(--color-deep-space, #050810)',
  			'eclipse-orange': 'var(--color-eclipse-orange, #FF6B35)',
  			'moonlight-silver': 'var(--color-moonlight-silver, #C0CCDA)',
  			'shadow-accent': 'var(--color-shadow-accent, #1F2937)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		backgroundImage: {
  			'lunar-gradient': 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-middle), var(--color-gradient-end))',
  			'eclipse-radial': 'radial-gradient(circle at 30% 50%, var(--color-eclipse-orange), transparent 50%)'
  		},
  		boxShadow: {
  			'glow-subtle': '0 0 15px rgba(255, 107, 53, 0.2)',
  			'glow-normal': '0 0 25px rgba(255, 107, 53, 0.4)',
  			'glow-strong': '0 0 35px rgba(255, 107, 53, 0.65)',
  			glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
