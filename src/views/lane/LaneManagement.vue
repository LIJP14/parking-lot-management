<template>
    <div class="pane-title">车场管理</div>
    <div class="pane-body">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="tab-1" tab="车道列表">
                <LaneList />
            </a-tab-pane>
            <a-tab-pane key="tab-2" tab="添加车道">
                <LaneCreate />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LaneList from './LaneList.vue';
import LaneCreate from './LaneCreate.vue';

export default defineComponent({
    name: "LaneManagement",

    components: { LaneList, LaneCreate },

    data () {
        return {
            activeKey: 'tab-1'
        };
    }
});
</script>

<style scoped>

</style>
