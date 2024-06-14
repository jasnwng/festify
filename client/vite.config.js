import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_FESTIFY_URL': JSON.stringify(env.REACT_APP_FESTIFY_URL),
      'process.env.REACT_APP_SERVICE_ID': JSON.stringify(env.REACT_APP_SERVICE_ID),
      'process.env.REACT_APP_TEMPLATE_ID': JSON.stringify(env.REACT_APP_TEMPLATE_ID),
      'process.env.REACT_APP_PUBLIC_KEY': JSON.stringify(env.REACT_APP_PUBLIC_KEY)
    },
    plugins: [react()],
  }
})
