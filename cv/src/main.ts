/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

library.add(faEnvelope, faGithub, faLinkedin, faItchIo)

const app = createApp(App)

registerPlugins(app)

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
