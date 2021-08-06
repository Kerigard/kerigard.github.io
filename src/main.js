import { createApp } from 'vue'

import App from './App.vue'
import directives from './directives'

createApp(App).use(directives).mount('body')
