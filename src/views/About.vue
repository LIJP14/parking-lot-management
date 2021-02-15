<template>
    <div class="about">
        <h1>This is an about page</h1>
        <AboutOne></AboutOne>
    </div>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import AboutOne from "@/views/about1.vue";
//
// @Options({
//     components: {
//         AboutOne
//     }
// });
import AboutOne from "./AboutOne.vue"; // @ is an alias to /src

@Options({
    components: {
        AboutOne
    }
})

export default class About extends Vue {

}

</script>
