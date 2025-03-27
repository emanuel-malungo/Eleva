/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: '#1E3A8A',
                secondary: '#8B5CF6',
                accent: '#FBBF24',
                white: '#FFFFFF',
                lightGray: '#F3F4F6',
                darkGray: '#4B5563'
            }
        },
    },
    plugins: [],
}