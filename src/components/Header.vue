<template>
  <div class="header">
    <input class="input" type="text" v-model="oneThing" @keyup.enter="addThing" placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    addPlan: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const oneThing = ref("");
    // 新增一条todo
    function addThing() {
      console.log(oneThing.value);
      const text: string = oneThing.value;
      if (!text.trim()) return;
      const todo = {
        id: Date.now(),
        title: text.trim(),
        isCompleted: false
      };
      props.addPlan(todo);
      console.log(todo);
      oneThing.value = "";

    }

    return {
      oneThing,
      addThing
    };
  }

});

</script>

<style lang="less" scoped>
.header{
  margin:20px 0;
  padding-right: 10px;
  .input {
    width: 100%;
    height: 28px;
    lineheight: 28px;
    fontsize: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-left: 10px;
  }
}

</style>