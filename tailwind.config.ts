/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            textColor: {
                'default': {
                    dark: '#111827', // gray-900
                    light: '#E5E7EB',  // gray-200
                    'hover': 'gray',    // gray-50
                }
            },
            backgroundColor: {
                'default': {
                    light: 'white',
                    dark: 'black',
                    'hover-light': '#F9FAFB',    // gray-50
                    'hover-dark': '#111827',     // gray-900
                }
            }
        },
    }
    ,
    plugins: [],
}

