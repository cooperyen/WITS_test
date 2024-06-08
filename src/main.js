import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import buttonStyle from './components/global/buttonStyle.vue';
import inputHandler from './components/global/inputHandler.vue';
import checkIconSwitch from './components/global/checkIconSwitch.vue';

const app = createApp(App);

app.component('buttonStyle', buttonStyle);
app.component('inputHandler', inputHandler);
app.component('checkIconSwitch', checkIconSwitch);
app.mount('#app');
