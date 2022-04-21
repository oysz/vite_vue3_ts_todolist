<template>
  <div class="todosList">
    <Header :addPlan="addPlan"></Header>
    <List :todosList="todosList"></List>
    <Footer :todosList="todosList" :isCompletedAll="isCompletedAll" :clearCompleted="clearCompleted
    "></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch, toRefs, provide } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { saveTodos, readTodos } from "./utils/localStorageUtils";

export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer
  },
  setup() {

    // 用一个state={todosList: Array<String>} 解构,后面具体内容按照解构的类型
    const state = reactive<{ todosList: Array<String> }>({
        todosList: []
      }
    );

    // 挂载后读取本地数据，存入todosList
    onMounted(() => {
      setTimeout(() => {
        state.todosList = readTodos();
        // console.log(state.todosList);
      }, 500);
    });
    // 监视操作: 如果todos数组的数据变化了，直接存储到浏览器的缓存中
    watch(() => state.todosList, saveTodos, { deep: true });
    
    function addPlan(todo: String) {
      // 执行存入新的todo到数组队首
      state.todosList.unshift(todo);
    }

    const delPlan = (id: number) => {
      // console.log("删除");
      state.todosList.splice(id, 1);
    };

    const updateState = (todo: String, val: boolean) => {
      todo.isCompleted = val;
      // console.log(todo);
    };

    const isCompletedAll = (val: boolean) => {
      state.todosList.forEach(item => {
        item.isCompleted = val;
      });
      // console.log(state.todosList);
    };

    const clearCompleted = () => {
      state.todosList = state.todosList.filter(item => !item.isCompleted);
    };

    // 祖孙传递 provide / inject
    provide("delPlan", delPlan);
    provide("updateState", updateState);

    return {
      // 将state中的所有属性转换为ref对象 ，用的时候直接使用属性名称即可
      ...toRefs(state),
      // todosList,
      addPlan,
      isCompletedAll,
      clearCompleted
    };
  }
});
</script>

<style>


.todosList {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
}
</style>
