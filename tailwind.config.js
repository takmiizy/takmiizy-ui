tailwind.config = {
    content: ["./src/**/*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
			fontFamily: {
				rubik: ['Rubik', 'sans-serif'],
				poppins: ["Poppins", "sans-serif"],
				dm: ["DM Sans", "sans-serif"],
			},
			fontSize: {
				'4xs': '0.5rem', // 8px
				'3xs': '0.625rem', // 10px
				'2xs': '0.75rem', // 12px
				'xs': '0.875rem', // 14px
				'sm': '0.9375rem', // 15px
				'base': '1rem', // 16px
				'lg': '1.125rem', // 18px
				'xl': '1.25rem', // 20px
				'2xl': '1.5rem', // 24px
				'3xl': '1.875rem', // 30px
				'4xl': '2.25rem', // 36px
				'5xl': '3rem', // 48px
				'6xl': '3.75rem', // 60px
				'7xl': '4.5rem', // 72px
				'8xl': '6rem', // 96px
				'9xl': '8rem', // 128px
			},
        }
    }
}