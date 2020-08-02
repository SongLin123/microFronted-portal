<!--
 * @Date: 2020-08-02 13:32:00
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-02 22:29:50
 * @FilePath: \foo-app\src\App.vue
-->
<template>
  <div id="app">
    <div class="con">

      <img src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png" width="40" />

      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>

</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
</script>

<style>
  .con {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 1920px;
  }
</style>