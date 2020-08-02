<!--
 * @Author: your name
 * @Date: 2020-02-25 11:27:41
 * @LastEditTime: 2020-02-25 16:10:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \d-tigerprawn-yjxy\src\layouts\HeaderAsideLayout\Layout.vue
 -->
<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div class="main-container">
      <!-- <nav-bar /> -->

      <app-main />
    </div>
  </div>
</template>

<script>
import { NavBar, SideBar, AppMain } from './components';

export default {
  name: 'Layout',
  components: {
    NavBar,
    SideBar,
    AppMain,
  },
  created(){
    console.log(111111111111111111111111111111111111111)
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  margin-left: 256px;
  background-color: #f0f2f5;
}
</style>
