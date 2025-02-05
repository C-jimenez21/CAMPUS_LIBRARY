import { defineConfig } from 'vite'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

const env = loadEnv('development', process.cwd(), "VITE");
 
export default defineConfig({
  plugins: [react()],
  server: {
    "host": env.VITE_HOSTNAME,
    "port": env.VITE_PORT_FRONTEND
  },
  envDir: '.',
})
