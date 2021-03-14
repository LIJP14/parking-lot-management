<template>
    <a-tabs
        v-model:activeKey="activeKey"
        type="editable-card"
        hide-add
        :animated="false"
        @edit="tabEdit"
        @tabClick="tabClick"
        @change="tabChange"
        class="layout-tabs"
    >
        <a-tab-pane key="Home" :closable="false">
            <template #tab> <HomeOutlined /> </template>
        </a-tab-pane>

        <a-tab-pane
            v-for="(pane) in cachedRoutes"
            :key="pane"
            :tab="$RoutesConfig[pane].alias"
        />

        <!--todo 暂时不删-->
        <!--<template #tabBarExtraContent>-->
        <!--    <a-dropdown>-->
        <!--        <span class="ant-dropdown-link" @click.prevent style="display: inline-block;width: 26px;">-->
        <!--            <DownOutlined />-->
        <!--        </span>-->
        <!--        <template #overlay>-->
        <!--            <a-menu>-->
        <!--                <a-menu-item>-->
        <!--                    <a href="javascript:;">guanbi</a>-->
        <!--                </a-menu-item>-->
        <!--            </a-menu>-->
        <!--        </template>-->
        <!--    </a-dropdown>-->
        <!--</template>-->
        <!--todo end-->
    </a-tabs>

    <div class="tab-pane-content">
        <router-view v-slot="{ Component }">
            <keep-alive :include="cachedRoutes" :exclude="['Home']">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { HomeOutlined, DownOutlined } from '@ant-design/icons-vue';

import { Payload } from '@/store/route-cache';


@Options({
    components: {
        HomeOutlined,
        DownOutlined
    },

    watch: {
        $route () {
            this.activeKey = this.$route.name as string;
            this.addTab();
        }
    }
})
export default class AppContent extends Vue {
    activeKey = 'Home';

    get cachedRoutes () {
        return this.$store.state.routeCache.cachedRoutes;
    }


    /**
     * 添加 tab 标签页
     */
    addTab (): void {
        if (this.$route.name === 'Home') {
            return;
        }

        const payload: Payload = {
            route: this.$route.name as string
        };
        this.$store.commit('routeCache/addCachedRoute', payload);
    }

    /**
     * 删除 tab 标签页
     * @param targetKey 要删除的 tab 标签
     */
    deleteTab (targetKey: string): void {
        const index = this.cachedRoutes.indexOf(targetKey);

        const payload: Payload = {
            route: targetKey
        };
        this.$store.commit('routeCache/delCachedRoute', payload);

        if (targetKey !== this.activeKey) {
            return;
        }

        if (this.cachedRoutes.length) {
            this.activeKey = index === this.cachedRoutes.length ? this.cachedRoutes[index - 1] : this.cachedRoutes[index];
        } else {
            this.activeKey = 'Home';
        }

        // 手动触发点击事件
        this.tabClick(this.activeKey);
    }

    tabClick (tabPane: string): void {
        this.$router.push({ name: tabPane });
    }

    /**
     * 新增和删除页签的回调
     * @param targetKey
     * @param action
     */
    tabEdit (targetKey: string, action: string): void {
        if (action === 'remove') {
            this.deleteTab(targetKey);
        }
    }

    tabChange (activeKey: string) {
        console.log(activeKey);
    }
};
</script>

<style scoped lang="scss">
    .layout-tabs :deep .ant-tabs-top-bar {
        background-color: #ffffff;
        border-top: 1px solid #f0f0f0;

        .ant-tabs-tab {
            border-top: unset !important;
            border-bottom: unset !important;
            margin-top: -1px !important;
        }
    }
</style>
