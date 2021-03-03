import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.scss';
import {
    Button,
    ConfigProvider,
    DatePicker,
    Dropdown,
    Form,
    Input,
    Layout,
    Menu,
    Pagination,
    Select,
    Space,
    Table,
    Tabs,
    Tag
} from "ant-design-vue";


const app = createApp(App);
app.use(router);
app.use(store);


app.use(Button)
    .use(ConfigProvider)
    .use(DatePicker)
    .use(Dropdown)
    .use(Form)
    .use(Input)
    .use(Layout)
    .use(Menu)
    .use(Pagination)
    .use(Select)
    .use(Space)
    .use(Table)
    .use(Tabs)
    .use(Tag);


app.mount('#app');
