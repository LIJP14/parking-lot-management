<template>
    <div class="pane-title">车场管理</div>
    <div class="pane-body">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="tab-1" tab="车场列表">
                <ParkingLotList />
            </a-tab-pane>
            <a-tab-pane key="tab-2" tab="添加车场">
                <ParkingLotCreate />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ParkingLotList from './ParkingLotList.vue';
import ParkingLotCreate from './ParkingLotCreate.vue';

export default defineComponent({
    name: 'ParkingLogManagement',
    components: { ParkingLotList, ParkingLotCreate },
    data () {
        return {
            activeKey: 'tab-1'
        };
    }

    // created () {}
});

// export default {
//     name: 'ParkingLotManagement'
// };
</script>

<style scoped>

</style>
