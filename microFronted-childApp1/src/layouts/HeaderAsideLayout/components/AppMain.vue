<!--
 * @Author: your name
 * @Date: 2020-02-25 11:27:41
 * @LastEditTime: 2020-02-25 16:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \d-tigerprawn-yjxy\src\layouts\HeaderAsideLayout\components\AppMain.vue
 -->
<template>
  <section class="app-main">
    <transition
      name="fade"
      mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>
