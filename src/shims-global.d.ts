import { ComponentCustomProperties } from 'vue';
import { Store } from "vuex";

import { RoutesConfig } from "@/router/routesConfig";
import { RootState } from '@/store';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<RootState>;
        $RoutesConfig: RoutesConfig;
    }
}
