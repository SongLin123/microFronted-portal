<!--
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2020-08-01 17:05:21
 * @LastEditors: songlin
 * @Description: In User Settings Edit
 * @FilePath: \ddad\src\layouts\HeaderAsideLayout\Layout.vue
 -->
<template>
  <div class="app-wrapper">
    <nav-bar />
    <div class="child-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { NavBar, AppMain } from "./components";

export default {
  name: "Layout",
  components: {
    NavBar,
    AppMain
  },
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

.child-container {
  height: calc(100vh - 65px);
  overflow: hidden;
  transition: margin-left 0.28s;
  background-color: #f0f2f5;
  position: relative;
}
</style>
