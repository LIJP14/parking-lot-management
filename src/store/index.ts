import { ModuleTree, createStore, StoreOptions } from 'vuex';

import { RouteCacheState } from "./route-cache/state";
import { routeCache } from './route-cache';


export interface RootState {
    routeCache: RouteCacheState;
}

const modules: ModuleTree<RootState> = {
    routeCache
};
const options: StoreOptions<RootState> = {
    modules
};
export default createStore(options);












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
