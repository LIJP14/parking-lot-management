import { Mutation, MutationTree } from 'vuex';
import { RouteCacheState } from "@/store/route-cache/state";


export interface Payload {
    route: string;
}


/**
 * 将新的路由添加到缓存数组中
 * @param state
 * @param payload
 */
const addCachedRoute: Mutation<RouteCacheState> = (state: RouteCacheState, payload: Payload): void => {
    const index = state.cachedRoutes.indexOf(payload.route);

    if (index === -1) {
        state.cachedRoutes.push(payload.route);
    }
};

/**
 * 删除单个已缓存的路由
 * @param state
 * @param payload
 */
const delCachedRoute: Mutation<RouteCacheState> = (state: RouteCacheState, payload: Payload): void => {
    const index = state.cachedRoutes.indexOf(payload.route);
    if (index !== -1) {
        state.cachedRoutes.splice(index, 1);
    }
};

export const routeCacheMutations: MutationTree<RouteCacheState> = {
    addCachedRoute,
    delCachedRoute
};




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
