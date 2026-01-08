// https://nuxt.com/docs/api/configuration/nuxt-config


import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
   runtimeConfig: {
    public: {
      apiBase:''
    }
  },
  
 compatibilityDate: '2025-07-15',
 devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
 css: [
    '~/assets/css/main.css' 
  ],

 vite: {
   plugins: [
     tailwindcss(),
      
   ],
 },

 plugins: [
],

 modules: ['@nuxt/icon','@pinia/nuxt'],
})