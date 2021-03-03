import { createStore, StoreOptions } from 'vuex';

import routeCache from './route-cache';

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        routeCache
    }
});












// import { createStore, Module, ModuleTree, StoreOptions } from 'vuex';
//
//
//
// import { Modules as RouteCacheModules } from "./route-cache/modules";
// import { routeCache } from "./route-cache";
//
// import { Modules as TestModules } from "./test/modules";
//
//
// interface ModulesType extends RouteCacheModules {
// }
//
// const modules: ModuleTree<ModulesType> = {
//     routeCache: routeCache
// };
//
//
// const storeOption: StoreOptions<ModulesType> = {
//     // state: {},
//     // mutations: {},
//     // actions: {},
//     modules
// };
//
//
// export default createStore(storeOption);
