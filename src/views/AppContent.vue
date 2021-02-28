<template>
    <a-tabs
        v-model:activeKey="activeKey"
        type="editable-card"
        hide-add
        :animated="false"
        @edit="onEdit"
        @tabClick="tabClick"
        @change="tabChange"
        class="layout-tabs"
    >
        <a-tab-pane key="home" :closable="false">
            <template #tab> <HomeOutlined /> </template>
        </a-tab-pane>

        <a-tab-pane
            v-for="pane in tabPanes"
            :key="pane.key"
            :tab="pane.title"
        />

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
    </a-tabs>

    <div class="tab-pane-content">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { HomeOutlined, DownOutlined } from '@ant-design/icons-vue';


type TabPane = {
    key: string;
    title: string;
};


@Options({
    components: {
        HomeOutlined,
        DownOutlined
    },
    props: {
        clickMenu: String
    }
})
export default class LayoutContent extends Vue {
    activeKey = 'home';
    menus: Array<string> = [];

    clickMenu!: string;


    created () {
        // for (let i = 0; i < 15; i++) {
        //     this.tabPanes.push(new TabPane(String(i), `title_${i}`));
        // }
    }

    get tabPanes (): Array<TabPane> {
        console.log(this.clickMenu);

        if (!this.clickMenu) {
            return [];
        }

        let bool = false;
        for (let i = 0; i < this.menus.length; i++) {
            if (this.menus[i] === this.clickMenu) {
                bool = true;
            }
        }

        if (!bool) {
            this.menus.push(this.clickMenu);
        }



        // const arr: Array<TabPane> = [];
        // if (!bool) {
        //     arr.push(new TabPane(this.clickMenu, `title--${this.clickMenu}`));
        // }

        this.activeKey = this.clickMenu;

        return this.menus.map(item => {
            // return new TabPane(item, `t-${item}`);
            return { key: item, title: `t-${item}` };
        });
    }

    onEdit (e: object) {
        console.log(e);
    }

    tabClick () {
        if (this.activeKey === 'home') {
            this.$router.push({ name: 'Home' });
        }
    }

    tabChange (activeKey: string) {
        console.log(activeKey);
    }
};
</script>

<style scoped lang="scss">
    .layout-tabs ::v-deep .ant-tabs-top-bar {
        background-color: #ffffff;
        border-top: 1px solid #f0f0f0;

        .ant-tabs-tab {
            border-top: unset !important;
            border-bottom: unset !important;
            margin-top: -1px !important;
        }
    }


</style>
