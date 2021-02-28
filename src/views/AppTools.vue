<template>
    <div style="padding: 0 10px;">
        <div style="float: left;margin-right: 50px;" v-if="false">
            <a-button type="link" class="header-btn">
                <template #icon> <ReloadOutlined /> </template>
            </a-button>

            <a-button type="link" class="header-btn">
                <template #icon> <CloseOutlined /> </template>
            </a-button>

            <a-button type="link" class="header-btn">
                <template #icon>
                    <span class="anticon">
                        <svg class="icon" style="width: 1.0087890625em; height: 1em;fill: currentColor;overflow: hidden;" viewBox="0 0 1033 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9638"><path d="M1013.338052 208.457419L790.890616 430.846045l173.007484 173.007484-420.14549 420.146471L0.097416 480.344807 420.184097 60.139525l173.007484 173.007485L815.639997 10.699574l197.698055 197.757845z m-84.941836 0L815.580206 95.64141 593.191581 318.089826 420.184097 145.081361 84.979461 480.285016 543.75359 939.058164l335.203655-335.204635-173.008465-173.007484 222.448416-222.448416zM295.6903 258.442347l478.870625 486.023932-40.098898 39.535298L255.592382 297.978626z m131.163877 323.659172a28.159405 28.159405 0 0 1 3.265938 35.9312l-3.265938 3.942258-115.846706 115.788876a28.159405 28.159405 0 0 1-43.082546-35.93022l3.266918-3.886388 115.845726-115.845726a28.159405 28.159405 0 0 1 39.816608 0zM264.658987 512.605257a28.159405 28.159405 0 0 1 3.265938 35.9312l-3.265938 3.942258-69.496262 69.439412a28.159405 28.159405 0 0 1-43.083526-35.93022l3.266918-3.886388 69.496262-69.496262a28.159405 28.159405 0 0 1 39.816608 0z m231.691452 231.691452a28.159405 28.159405 0 0 1 3.265938 35.9312l-3.265938 3.942258-69.496262 69.439412a28.159405 28.159405 0 0 1-43.083526-35.93022l3.266918-3.886388 69.496262-69.496262a28.159405 28.159405 0 0 1 39.816608 0z" p-id="9639"></path></svg>
                    </span> </template>
            </a-button>

            <a-button type="link" class="header-btn">
                <template #icon>
                    <span class="anticon">
                        <svg class="icon" style="width: 1em; height: 1em;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13267"><path d="M441.9 293.9m-50.3 0a50.3 50.3 0 1 0 100.6 0 50.3 50.3 0 1 0-100.6 0Z" fill="#333333" p-id="13268"></path><path d="M653.5 333.6m-50.3 0a50.3 50.3 0 1 0 100.6 0 50.3 50.3 0 1 0-100.6 0Z" fill="#333333" p-id="13269"></path><path d="M740.8 511.2m-50.3 0a50.3 50.3 0 1 0 100.6 0 50.3 50.3 0 1 0-100.6 0Z" fill="#333333" p-id="13270"></path><path d="M297.6 454.7m-50.3 0a50.3 50.3 0 1 0 100.6 0 50.3 50.3 0 1 0-100.6 0Z" fill="#333333" p-id="13271"></path><path d="M513 958.1c-246.4 0-446.9-200.5-446.9-446.9s200.5-447 446.9-447 446.9 200.5 446.9 446.9c0 83.2-25.4 152.9-71.6 196.1-38.6 36.2-90.9 53.3-151.4 49.3-31-2-59.9-14.6-85.5-25.6-46.5-20.2-59.1-22.1-70.9-11.1-9.8 9.1-14.2 13.3 12 53.2 4.3 6.5 8.2 12.6 11.3 18 21.9 38.8 22.9 80.7 2.9 115-18.9 32.6-54 52.1-93.7 52.1z m0-804.5c-197.2 0-357.6 160.4-357.6 357.6S315.8 868.7 513 868.7c7.7 0 13.8-2.8 16.7-7.8 3.6-6.1 2.2-15.6-3.6-26-2.2-3.8-5-8.1-8.1-12.7-18.5-28.2-67.8-102.9 1.6-167.7 57.2-53.3 123.5-24.6 167.4-5.5 19.8 8.6 40.3 17.4 55.7 18.5 36.1 2.4 63.8-5.9 84.5-25.3 27.5-25.8 43.3-73.5 43.3-130.9 0.1-197.3-160.3-357.7-357.5-357.7z" fill="#333333" p-id="13272"></path></svg>
                    </span>
                </template>
            </a-button>

            <a-button type="link" class="header-btn">
                <template #icon> <TagOutlined /> </template>
            </a-button>

            <a-button type="link" class="header-btn">
                <template #icon> <FullscreenOutlined /> </template>
            </a-button>

            <a-button type="link" class="header-btn" v-if="false">
                <template #icon> <FullscreenExitOutlined /> </template>
            </a-button>

            <!--<ReloadOutlined />-->
            <!--<CloseOutlined />-->
            <!--<TagOutlined />-->
            <!--<FullscreenOutlined />-->
            <!--<FullscreenExitOutlined v-if="false" />-->
        </div>

        <div v-show="currentUser" style="float: left;">
            <span>欢迎，</span>
            <a-dropdown>
                <span class="ant-dropdown-link" @click.prevent>
                    <span class="dropdown-name" :title="currentUser">{{ currentUser }}</span>
                    <DownOutlined />
                </span>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a href="javascript:;">退出</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>

        <span style="display: block;clear: both;"></span>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { ReloadOutlined, TagOutlined, CloseOutlined, FullscreenOutlined, FullscreenExitOutlined, DownOutlined } from '@ant-design/icons-vue';


@Options({
    components: {
        ReloadOutlined,
        CloseOutlined,
        TagOutlined,
        FullscreenOutlined,
        FullscreenExitOutlined,
        DownOutlined
    }
})
export default class LayoutHeaderMenu extends Vue {
    currentUser = '';


    created () {
        this.currentUser = this.queryUser();
    }

    queryUser (): string {
        return '漩涡鸣人🌀';
    }
};
</script>


<style scoped lang="scss">
    .header-btn {
        width: 55px;
        height: 64px;
        /*border: none;*/
        /*box-shadow: none;*/
        color: inherit;

    }
    .dropdown-name {
        display: inline-block;
        max-width: 150px;
        vertical-align: bottom;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
