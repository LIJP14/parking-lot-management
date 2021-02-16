import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.scss';
import {
    Button,
    Dropdown,
    Form,
    Input,
    Layout,
    Menu,
    Pagination,
    Select,
    Space,
    Table,
    Tabs
} from "ant-design-vue";


const app = createApp(App);
app.use(store);
app.use(router);


app.use(Button)
    .use(Dropdown)
    .use(Form)
    .use(Input)
    .use(Layout)
    .use(Menu)
    .use(Pagination)
    .use(Select)
    .use(Space)
    .use(Table)
    .use(Tabs);


app.mount('#app');
