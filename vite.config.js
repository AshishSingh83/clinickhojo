// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// export default defineConfig({
//   server:{
//     proxy:{
//        '/api':'https://complete-server-clinickhojo.onrender.com'
//     },
//   },
//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define and export the Vite configuration
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://complete-server-clinickhojo.onrender.com' // Ensure this URL is correct and accessible
    },
  },
  plugins: [react()], // Ensure @vitejs/plugin-react is installed
})

