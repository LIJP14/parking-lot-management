<template>
    <a-layout class="app-layout">
        <a-layout-sider
            v-model:collapsed="collapsed"
            :trigger="null"
            collapsible
            class="app-layout-sider"
        >
            <div class="app-title">
                <CloudOutlined class="logo"/>
                <span class="title" v-show="!collapsed">物微联</span>
            </div>

            <a-menu
                v-model:selectedKeys="selectedKeys"
                v-model:openKeys="openKeys"
                theme="dark"
                mode="inline"
                :inline-collapsed="true"
            >
                <a-sub-menu key="sub0">
                    <template #title>
                            <span>
                                <span class="anticon">
                                    <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;font-size: 20px;margin: -6px 5px 0 0;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1587">
                                        <path d="M579.072 345.088c-12.288-2.56-36.864-3.584-73.216-3.584h-49.152v146.432H512c39.936 0 67.072-2.56 80.384-8.192 13.312-5.12 24.064-13.824 31.744-25.088s11.776-25.088 11.776-39.936c0-18.944-5.632-34.304-16.384-46.592-10.24-12.8-24.064-19.968-40.448-23.04z" fill="" p-id="1588"></path>
                                        <path d="M512 9.216c-277.504 0-502.784 225.28-502.784 502.784s225.28 502.784 502.784 502.784 502.784-225.28 502.784-502.784-225.28-502.784-502.784-502.784z m212.48 483.328c-11.264 21.504-25.6 38.4-43.008 50.688-17.408 12.288-34.816 20.48-52.736 24.576-24.576 5.12-59.392 7.168-105.984 7.168h-66.56v194.56H354.304V253.952h163.84c61.952 0 102.4 2.56 121.344 7.68 28.672 7.68 53.248 24.576 72.704 50.688 19.456 26.112 29.184 59.392 29.184 100.352 0 31.744-5.632 58.368-16.896 79.872z" fill="" p-id="1589"></path>
                                    </svg>
                                </span>
                                <span>车场管理</span>
                            </span>
                    </template>


                    <a-sub-menu
                        v-for="item of subMenu"
                        :key="item.key"
                        :title="item.title"
                    >
                        <a-menu-item
                            v-for="menuItem of item.menuItem"
                            :key="menuItem.key"
                        >
                            <router-link v-if="$RoutesConfig[menuItem.key]" :to="{ name: menuItem.key }">{{ menuItem.title }}</router-link>
                            <span v-else>{{ menuItem.title }}</span>
                        </a-menu-item>
                    </a-sub-menu>

                </a-sub-menu>
            </a-menu>
        </a-layout-sider>

        <!--:style="{'margin-left': collapsed ? '80px' : '200px'}"-->
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-button
                    type="primary"
                    @click="toggleCollapsed"
                    style="margin-left: 10px;padding: 0 10px;"
                >
                    <MenuUnfoldOutlined v-if="collapsed" />
                    <MenuFoldOutlined v-else />
                </a-button>
                {{ selectedKeys }}  --  {{ openKeys }}

                <app-tools style="float: right;"></app-tools>
            </a-layout-header>

            <a-layout-content>
                <app-content />
            </a-layout-content>
        </a-layout>

    </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CloudOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';

import AppTools from './AppTools.vue';
import AppContent from './AppContent.vue';

export default defineComponent({
    name: "AppLayout",
    components: { CloudOutlined, MenuUnfoldOutlined, MenuFoldOutlined, AppTools, AppContent },

    setup () {
        return {
            selectedKeys: ref<string[]>([]),
            collapsed: ref<boolean>(false)
        };
    },

    data () {
        return {
            openKeys: ['sub0'],
            preOpenKeys: ['sub0'],
            subMenu: [
                {
                    key: 'sub0-0',
                    title: '车场管理',
                    menuItem: [
                        { key: 'ParkingLotManagement', title: '车场信息' },
                        { key: 'LaneManagement', title: this.$RoutesConfig.LaneManagement.alias }
                    ]
                },
                {
                    key: 'sub0-1',
                    title: '记录查询',
                    menuItem: [
                        { key: 'UsageRecord', title: this.$RoutesConfig.UsageRecord.alias },
                        { key: 'OpenGateRecord', title: this.$RoutesConfig.OpenGateRecord.alias }
                    ]
                },
                {
                    key: 'sub0-2',
                    title: '用户管理',
                    menuItem: [
                        { key: 'userManagement', title: '用户管理' }
                    ]
                },
                {
                    key: 'sub0-3',
                    title: '统计信息',
                    menuItem: [
                        { key: 'carNumber', title: '车牌号统计' }
                    ]
                }
            ]
        };
    },

    created () {
        for (let i = 0; i < this.subMenu.length; i++) {
            this.openKeys.push(this.subMenu[i].key);
        }
    },

    watch: {
        $route () {
            if (this.$route.name) {
                this.selectedKeys[0] = this.$route.name as string;
            }
        }
    },

    methods: {
        toggleCollapsed () {
            this.collapsed = !this.collapsed;

            if (this.collapsed) {
                this.preOpenKeys = this.openKeys;
                this.openKeys = [];
            } else {
                this.openKeys = this.preOpenKeys;
            }
        }
    }
});
</script>

<style scoped lang="scss">
    .app-layout {
        min-height: 100vh;
        .trigger {
            font-size: 18px;
            line-height: 64px;
            padding: 0 24px;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
                color: #3db389;
            }
        }

        .app-title {

            height: 40px;
            overflow: hidden;
            margin: 16px;
            color: #ffffff;
            .logo {
                font-size: 40px;
                margin-right: 5px;
            }
            .title {
                font-size: 25px;
                vertical-align: 5px;
            }
        }

        /*.app-layout-sider {*/
        /*    position: fixed;*/
        /*    left: 0;*/
        /*    height: 100vh;*/
        /*    overflow: auto;*/
        /*}*/
    }
</style>
