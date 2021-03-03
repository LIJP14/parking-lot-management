// import { ComponentCustomProperties } from 'vue';
// import { Store, Module } from 'vuex';
import store from '@/store';

declare module '@vue/runtime-core' {

    interface ComponentCustomProperties {
        $store: store
    }
}
