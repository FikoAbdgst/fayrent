/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all components in 'src'
  ],
  theme: {
    extend: {
      fontSize: {
        "xxs": "8px",
        "xxxs": "6px",
        "2xs": "4px",
      },
      width: {
        "68": "272px",
        "100": "400px",
        "104": "416px",
        "108": "432px",
        "112": "448px",
        "116": "464px",
        "120": "480px",
        "124": "496px",
        "128": "512px",
        "132": "528px",
        "136": "544px",
        "140": "560px",
        "144": "576px",
        "148": "592px",
        "152": "608px",
        "156": "624px",
        "160": "640px",
        "200": "800px",
      },
      height: {
        "68": "272px",
        "100": "400px",
        "104": "416px",
        "108": "432px",
        "112": "448px",
        "116": "464px",
        "120": "480px",
        "124": "496px",
        "128": "512px",
        "132": "528px",
        "136": "544px",
        "140": "560px",
        "144": "576px",
        "148": "592px",
        "152": "608px",
        "156": "624px",
        "160": "640px",
        "200": "800px",

        "85%": "85%",
        "90%": "90%",
        "95%": "95%",

        "1/2screen": "50vh",
        "60screen": "60vh",
        "3/4screen": "75vh",
        "10screen": "10vh",
        "90screen": "90vh",
        "80screen": "80vh",
      },

    },
  },
  plugins: [],
}