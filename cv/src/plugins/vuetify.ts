// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { en, fr } from 'vuetify/locale'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  locale: {
    locale: 'fr',
    fallback: 'fr',
    messages: { en, fr },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
