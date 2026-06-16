import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import Fonts from 'unplugin-fonts/vite'
import ViteFonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    // Fonts({
    //   fontsource: {
    //     families: [
    //       {
    //         name: 'Roboto Mono',
    //         weights: [400, 700],
    //       },
    //       {
    //         name: 'Roboto',
    //         weights: [100, 300, 400, 500, 700, 900],
    //         styles: ['normal', 'italic'],
    //       },
    //     ],
    //   },
    // }),
    ViteFonts({
      google: {
        families: [{
          name: 'Plus Jakarta Sans',
          weights: [100, 200, 300, 400, 500, 600, 700, 800, 900], 
        }],
      },
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
  css: {
  preprocessorOptions: {
    scss: {
      silenceDeprecations: ['import'],
    },
    sass: {
      silenceDeprecations: ['import'],
    },
  },
},
})
