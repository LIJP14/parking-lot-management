import Vue from 'vue';

import { RoutesConfig } from "@/router/routesConfig";
// import store from '@/store';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: any;
        $RoutesConfig: RoutesConfig;
    }
}
