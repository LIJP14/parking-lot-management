<template>
    <div class="pane-title">快捷方式</div>
    <div class="pane-body">
        <div class="link-card">
            <router-link to="/parking-lot/management" class="link-card-icon">
                <VideoCameraFilled />
            </router-link>
            <h6>车场管理</h6>
        </div>

        <div class="link-card">
            <router-link to="/lane/management" class="link-card-icon">
                <VideoCameraFilled />
            </router-link>
            <h6>车道管理</h6>
        </div>

        <div class="link-card">
            <router-link to="/usage-record" class="link-card-icon">
                <StockOutlined />
            </router-link>
            <h6>出入场记录</h6>
        </div>

        <div class="link-card">
            <router-link to="/open-gate-record" class="link-card-icon">
                <StockOutlined />
            </router-link>
            <h6>远程开闸记录</h6>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { VideoCameraFilled, StockOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    data () {
        return {

        };
    },
    components: { VideoCameraFilled, StockOutlined }
});
</script>

<style scoped lang="scss">
    .pane-body {
        display: flex;
        /*flex-direction: row;*/
        flex-wrap: wrap;

        .link-card {
            text-align: center;
            width: 120px;
            margin: 0 20px 10px;


            .link-card-icon {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 70px;
                font-size: 30px;
                background-color: #ececec;
                color: inherit;
            }

            h6 {
                margin: 7px 0;
            }
        }
    }

</style>
