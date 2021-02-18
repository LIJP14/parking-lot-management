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
                :inline-collapsed="false">
                <a-sub-menu key="sub1" @titleClick="titleClick" >
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

                    <a-sub-menu key="sub1-1" title="车场管理" @titleClick="titleClick" >
                        <a-menu-item key="1">
                            <router-link to="/parking-lot/management">车场信息</router-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link to="/lane/management">车道管理</router-link>
                        </a-menu-item>
                    </a-sub-menu>


                    <a-sub-menu key="sub1-2" title="记录查询" @titleClick="titleClick" >
                        <a-menu-item key="3">
                            <router-link to="/usage-record">出入场记录</router-link>
                        </a-menu-item>
                        <a-menu-item key="4">
                            <router-link to="/open-gate-record">远程开闸记录</router-link>
                        </a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub1-3" title="用户管理" @titleClick="titleClick" >
                        <a-menu-item key="5">用户管理</a-menu-item>
                    </a-sub-menu>

                    <a-sub-menu key="sub1-4" title="统计信息" @titleClick="titleClick" >
                        <a-menu-item key="6">车牌号统计</a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>

        <!--:style="{'margin-left': collapsed ? '80px' : '200px'}"-->
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />

                <layout-header-menu style="float: right;"></layout-header-menu>
            </a-layout-header>

            <a-layout-content>
                <layout-content
                    :click-menu="menu"
                />
            </a-layout-content>
        </a-layout>

    </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CloudOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';

import LayoutHeaderMenu from './LayoutHeaderMenu.vue';
import LayoutContent from './LayoutContent.vue';

export default defineComponent({
    name: "LayoutSider",
    components: { CloudOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LayoutHeaderMenu, LayoutContent },

    setup () {
        return {
            selectedKeys: ref<string[]>(['sub1']),
            openKeys: ref<string[]>(['sub1', 'sub1-1']),
            collapsed: ref<boolean>(false)
        };
    },

    data () {
        return {
            menu: ''
        };
    },

    methods: {
        titleClick (e: Event) {
            console.log('titleClick', e);
        },

        menuItemClick (key: string) {
            // if (this.menus.indexOf(key) === -1) {
            //     this.menus.push(key);
            // }
            // this.menus.indexOf(key) === -1
            //     ? this.menus.push(key)
            //     : null;

            this.menu = key;
            // console.log(this.menus);
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
         color: #1890ff;
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
