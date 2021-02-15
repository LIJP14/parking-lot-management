import { RouteRecordRaw } from "vue-router";

// import(/* webpackChunkName: "about" */ );
const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

export default routes;
