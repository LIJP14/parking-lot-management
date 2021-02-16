<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        msg: String
    }
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
















<!--<template>-->
<!--    <a-table-->
<!--        :row-selection="rowSelection"-->
<!--        :columns="columns"-->
<!--        :data-source="data"-->
<!--        :custom-row="customRow"-->
<!--    >-->
<!--        <template #name="{ text }">-->
<!--            <a>{{ text }}</a>-->
<!--        </template>-->
<!--    </a-table>-->
<!--</template>-->
<!--<script>-->
<!--import { computed, defineComponent, reactive } from "vue";-->
<!--const columns = [-->
<!--  {-->
<!--    title: "Name",-->
<!--    dataIndex: "name",-->
<!--    slots: { customRender: "name" },-->
<!--  },-->
<!--  {-->
<!--    title: "Age",-->
<!--    dataIndex: "age",-->
<!--  },-->
<!--  {-->
<!--    title: "Address",-->
<!--    dataIndex: "address",-->
<!--  },-->
<!--];-->
<!--const data = [-->
<!--  {-->
<!--    key: "1",-->
<!--    name: "John Brown",-->
<!--    age: 32,-->
<!--    address: "New York No. 1 Lake Park",-->
<!--  },-->
<!--  {-->
<!--    key: "2",-->
<!--    name: "Jim Green",-->
<!--    age: 42,-->
<!--    address: "London No. 1 Lake Park",-->
<!--  },-->
<!--  {-->
<!--    key: "3",-->
<!--    name: "Joe Black",-->
<!--    age: 32,-->
<!--    address: "Sidney No. 1 Lake Park",-->
<!--  },-->
<!--  {-->
<!--    key: "4",-->
<!--    name: "Disabled User",-->
<!--    age: 99,-->
<!--    address: "Sidney No. 1 Lake Park",-->
<!--  },-->
<!--];-->
<!--export default defineComponent({-->
<!--  name: "App",-->
<!--  setup() {-->
<!--    const state = reactive({-->
<!--      selectedRowKeys: [],-->
<!--    });-->
<!--    const selectRow = (record) => {-->
<!--      const selectedRowKeys = [...state.selectedRowKeys];-->
<!--      if (selectedRowKeys.indexOf(record.key) >= 0) {-->
<!--        selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);-->
<!--      } else {-->
<!--        selectedRowKeys.push(record.key);-->
<!--      }-->
<!--      state.selectedRowKeys = selectedRowKeys;-->
<!--    };-->
<!--    const rowSelection = computed(() => {-->
<!--      return {-->
<!--        selectedRowKeys: state.selectedRowKeys,-->
<!--        onChange: (selectedRowKeys) => {-->
<!--          state.selectedRowKeys = selectedRowKeys;-->
<!--        },-->
<!--      };-->
<!--    });-->
<!--    const customRow = (record) => {-->
<!--      return {-->
<!--        onClick: () => {-->
<!--          selectRow(record);-->
<!--        },-->
<!--      };-->
<!--    };-->

<!--    return {-->
<!--      data,-->
<!--      columns,-->
<!--      customRow,-->
<!--      rowSelection,-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->

