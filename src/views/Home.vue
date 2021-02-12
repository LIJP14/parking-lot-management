<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    a () {
        let ab = 90;
        let b = 78;



        for (let i = 0; i < 100; i++) {
            if (i === b) {
                b = i;
                if (ab === b + i) {
                    ab = i * 10;
                }
            }
        }
    }
}
</script>
