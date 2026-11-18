export default defineConfig({
  base: '/landing-keepsake-vite/', 
  plugins: [vituum(), pug({ root: './src' })],
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  build: {
    cssMinify: true,
  },
});