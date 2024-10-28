import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MainButton from './components/MainButton.vue'
import OptionComponent from './components/OptionComponent.vue'

const app = createApp(App)
app
  .component('OptionComponent', OptionComponent)
  .component('MainButton', MainButton)

app.mount('#app')
