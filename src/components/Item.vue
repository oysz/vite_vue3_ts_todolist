<template>
  <div class="todoItem">
    <input class="checkbox" type="checkbox" v-model="isCompleted" />
    <span class="title">{{ todoItem.title }}</span>
    <button class="delButton" @click="del(index)">删除</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, computed } from "vue";

export default defineComponent({
  name: "Item",
  props: {
    todoItem: {
      // 约束类型，使用as强转类型
      type: Object as () => String,
      required: true
    },
    index: {
      type: Number
    }
  },
  setup(props) {


    onMounted(() => {

    });

    // 通过 inject 拿到祖父传过来的方法
    const delTodo: Function | undefined = inject("delPlan");

    const del = (index: number) => {
      // console.log(index);
      if (window.confirm("确认删除吗？")) {
        if (typeof delTodo === "function") delTodo(index);
      }
    };

    const updateState: Function | undefined = inject("updateState");
    const isCompleted = computed({
        // 通过 computed 的 get 实现 isCompleted 数据的绑定，
        get: () => {
          return props.todoItem.isCompleted;
        },
        // 通过 set 创建可写的 ref 对象 实现对状态的更改
        set: val => {
          if (typeof updateState === "function") updateState(props.todoItem, val);
        }
      }
    );
    return {
      del,
      isCompleted
    };
  }
});
</script>

<style lang="less" scoped>
.todoItem {
  display: flex;
  margin: 3px 0;
  border-bottom: 1px solid #ccc;
  //justify-content: center;
  align-items: center;

  .checkbox {
    width: 13px;
    margin-right: 10px
  }

  .title {
    flex: 1;
  }

  .delButton {
    wdith: 45px
  }
}
</style>