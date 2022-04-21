<template>
  <div>
    <!--    <h1>setup</h1>-->
    <h2>number:{{ count }}</h2>
    <hr/>
    <button @click="updateCount">+1</button>
  </div>
</template>

<!--<script>-->
<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'App',

  setup() {
    console.log('第一次执行')
    // const count: number = 0
    const count = ref(0)

    function updateCount() {
      console.log(count)
      count.value++
    }

    // return需要放在属性和方法下面
    return {
      count,
      updateCount
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
