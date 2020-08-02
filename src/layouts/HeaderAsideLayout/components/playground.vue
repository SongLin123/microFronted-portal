<!--
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2020-08-02 21:33:30
 * @LastEditors: songlin
 * @Description: In User Settings Edit
 * @FilePath: \ddad\src\layouts\HeaderAsideLayout\components\playground.vue
 -->
<template>
  <div class="viewRoom">
    <div :class="['ground','qiankunView',!showView&&'active']" id="content"></div>

    <router-view class="ground" v-if="showView" />
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "playground",
    computed: {
      ...mapGetters(['showView'])
    },
  };
</script>
<style lang="scss" scoped>
  .viewRoom {
    position: relative;

    .ground {
      width: 80vw;
      height: 70vh;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;

    }

    .qiankunView {


      .active {
        z-index: 100;

      }
    }
  }
</style>