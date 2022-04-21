<template>
  <div>
    <h2>姓名：{{ state.name }}</h2>
    <h2>年龄：{{ state.age }}</h2>
    <h2>爱人：{{ state.lover }}</h2>
    <button @click="del">-1</button>
    <button @click="update">+1</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: '张三',
      age: 19,
      lover: '小美'
    })

    function del() {
      console.log(state)
      state.name += '--'
      state.age += -1
      state.lover += '**'
    }

    function update() {
      console.log(state)
      state.name += '||'
      state.age += 1
      state.lover += '||'
    }

    return {
      state,
      update,
      del
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
