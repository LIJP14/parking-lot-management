// interface State {
//     cachedRoutes: Array<string>;
// }
//
// export interface Payload {
//     route: string;
// }
//
// const state: State = {
//     cachedRoutes: []
// };
//
// export default {
//     namespaced: true,
//     state,
//     mutations: {
//         // 添加新路由
//         addCachedRoute (state: State, payload: Payload): void {
//             const index = state.cachedRoutes.indexOf(payload.route);
//
//             if (index === -1) {
//                 state.cachedRoutes.push(payload.route);
//                 // return;
//             }
//         },
//
//         // 删除已缓存的单个路由
//         delCachedRoute (state: State, payload: Payload): void {
//             const index = state.cachedRoutes.indexOf(payload.route);
//             if (index !== -1) {
//                 state.cachedRoutes.splice(index, 1);
//             }
//         }
//     }
//
// };

import { Module } from 'vuex';
import { RootState } from "@/store";
import { RouteCacheState, routeCacheState } from "@/store/route-cache/state";
import { routeCacheMutations } from '@/store/route-cache/mutations';



export const routeCache: Module<RouteCacheState, RootState> = {
    namespaced: true,
    state: routeCacheState,
    mutations: routeCacheMutations
};



// import { Module, Mutation, ModuleTree } from "vuex";
//
// import { State } from './state';
// import { Modules } from './modules';
//
// import { testA } from "@/store/test";
// import { State as TtState } from '../test/state';
// import { Modules as TtModules } from '../test/modules';
//
//
//
//
//
// const state: State = {
//     cachedRoutes: []
// };
// const deleteRoute: Mutation<State> = (state: State, routeName: string) => {
//     const index: number = state.cachedRoutes.indexOf(routeName);
//     state.cachedRoutes.splice(index, 1);
//     console.log('delete');
// };
//
//
// // const modules: ModuleTree<TtModules> = {
// //     Ts: testA
// // };
//
// export const routeCache: Module<State, TtModules> = {
//     namespaced: true,
//     state,
//
//     mutations: {
//         deleteRoute,
//
//         addCachedRoute (state: State, routeName: string): void {
//             state.cachedRoutes.push(routeName);
//             console.log('add');
//         }
//     },
//
//     modules: {
//         "testA": testA
//     }
//
// };
//
// // export default {
// //     // namespaced: true,
// //
// //     state: {
// //         routes: '8989'
// //     },
// //
// //     mutations: {
// //         setRoutes (state: any, payload: any): void {
// //             state.routes = payload.data;
// //         }
// //     },
// //
// //     actions: {
// //     }
// // };
//
// // export default createStore({
// //     // namespaced: true,
// //
// //     state: {
// //         routes: '8989'
// //     },
// //
// //     mutations: {
// //         setRoutes (state, payload) {
// //             state.routes = payload.data;
// //         }
// //     },
// //
// //     actions: {
// //     }
// // });
