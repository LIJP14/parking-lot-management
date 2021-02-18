import { RouteRecordRaw } from "vue-router";

// import(/* webpackChunkName: "home" */ );
const Home = () => import('../views/Home.vue');
const ParkingLotManagement = () => import('../views/parking-lot/ParkingLotManagement.vue');
const LaneManagement = () => import('../views/lane/LaneManagement.vue');
const UsageRecord = () => import('../views/usage-record/UsageRecord.vue');
const OpenGateRecord = () => import('../views/open-gate-record/OpenGateRecord.vue');

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
    },
    {
        path: '/usage-record',
        name: 'UsageRecord',
        component: UsageRecord
    },
    {
        path: '/open-gate-record',
        name: 'OpenGateRecord',
        component: OpenGateRecord
    }
];

export default routes;
