import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const testBoolean = false;

/*
This is correctly being interpreted as "esbuild".
*/
const testComparisonResult = !testBoolean && 'esbuild';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    /*
    This is correctly being interpreted as boolean | "esbuild".
    */
    minify: !process.env.TAURI_DEBUG && 'esbuild',
  },
});
