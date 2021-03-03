<template>
    <a-config-provider :locale="locale">
        <AppLayout />
    </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

import AppLayout from '@/views/AppLayout.vue';

export default defineComponent({
    name: 'App',
    components: { AppLayout },
    data () {
        return {
            locale: zhCN
        };
    }
});
</script>

<style lang="scss">
    #app {
        min-height: 100%;
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
    }

    /*#nav {*/
    /*    padding: 30px;*/

    /*    a {*/
    /*        font-weight: bold;*/
    /*        color: #2c3e50;*/

    /*        &.router-link-exact-active {*/
    /*            color: #42b983;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>
