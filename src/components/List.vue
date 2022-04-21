<template>
  <Item v-for="(item,index) in todosList" :index="index" :todoItem="item" :key="item.id"></Item>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Item from "./Item.vue";

export default defineComponent({
  name: "List",
  props: {
    todosList: {
      type: Array as () => String[],
      required: true
    }
  },
  components: {
    Item
  },
  setup() {


    onMounted(() => {

    });

    return {};
  }
});
</script>

<style lang="less" scoped>

</style>