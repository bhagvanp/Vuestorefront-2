// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: [
   './assets/**/*.{vue,js,css,scss}',
   './components/**/*.{vue,js}',
   './layouts/**/*.vue',
   './pages/**/*.vue',
   './plugins/**/*.{js,ts}',
   './nuxt.config.{js,ts}'
 ],
 theme:{
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor:['hover', 'active'],
    },
  },
  plugins: [],
};