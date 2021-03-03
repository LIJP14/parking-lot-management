<template>
    <div class="pane-title">记录查询</div>
    <div class="pane-body">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="tab-1" tab="出入场记录">
                <UsageList />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import UsageList from './UsageList.vue';

@Options({
    name: 'UsageRecord',
    components: { UsageList }
})
export default class UsageRecord extends Vue {
    activeKey = 'tab-1';
};
</script>

<style scoped>

</style>
