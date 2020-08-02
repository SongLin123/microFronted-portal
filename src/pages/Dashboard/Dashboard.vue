<!--
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2019-12-14 12:37:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\src\pages\Dashboard\Dashboard.vue
 -->
<template>
  <div >
    {{currentPage}} / {{pageCount}}

    <pdf src="/76.pdf"
    :page="currentPage"
     @num-pages="pageCount = $event" @page-loaded="currentPage = $event"></pdf>
  <button @click="currentPage!==pageCount?currentPage++:''"> next </button>
  <button @click="currentPage!==1?currentPage--:''"> pre </button>
  </div>
</template>
<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf
  },
  data() {
    return {
      currentPage: 1,
      pageCount: 0
    };
  }
};
</script>