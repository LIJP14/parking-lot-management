import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {
    Layout,
    Menu,
    Input,
    Button
} from "ant-design-vue";


const app = createApp(App);
app.use(store);
app.use(router);

app.use(Layout)
    .use(Menu)
    .use(Input)
    .use(Button);

app.mount('#app');
