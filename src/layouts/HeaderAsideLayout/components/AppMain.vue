<!--
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2020-08-02 13:56:49
 * @LastEditors: songlin
 * @Description: In User Settings Edit
 * @FilePath: \ddad\src\layouts\HeaderAsideLayout\components\AppMain.vue
 -->
<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->

      <playground></playground>
      <!-- <div v-html="content"></div> -->
    </transition>
  </section>
</template>

<script>
import playground from "./playground";
export default {
  name: "AppMain",
  props: {
    content: String,
    loading: Boolean
  },
  components: { playground },
  // data(){
  //   return {
  //     isChildApp:false
  //   }
  // },

  created() {
    window.onpopstate = () => {
      console.log(this.content);
    };
  }
};
</script>
