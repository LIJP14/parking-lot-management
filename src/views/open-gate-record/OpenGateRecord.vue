<template>
    <div class="pane-title">记录管理</div>
    <div class="pane-body">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="tab-1" tab="远程开闸记录">
                <RecordList />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import RecordList from './RecordList.vue';

@Options({
    components: { RecordList }
})
export default class OpenGateRecord extends Vue {
    activeKey = 'tab-1';
};
</script>

<style scoped>

</style>
