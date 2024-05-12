import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  server:{
    proxy:{
       '/api':'https://complete-server-clinickhojo.onrender.com'
    },
  },
  plugins: [react()],
})

