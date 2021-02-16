import { RouteRecordRaw } from "vue-router";

// import(/* webpackChunkName: "home" */ );
const Home = () => import('../views/Home.vue');
const ParkingLotManagement = () => import('../views/parking-lot/ParkingLotManagement.vue');
const LaneManagement = () => import('../views/lane/LaneManagement.vue');

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/parking-lot/management',
        name: 'ParkingLotManagement',
        component: ParkingLotManagement
    },
    {
        path: '/lane/management',
        name: 'LaneManagement',
        component: LaneManagement
    }
];

export default routes;
