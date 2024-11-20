<script setup>

defineOptions({
  name: "VueSchoolVideoComponent"
})

defineProps({
  href: {
    type: String,
    default: "https://vueschool.io/lessons/access-pinia-getters-in-the-options-api?friend=vuerouter"
  },
  title: {
    type: String,
    default: "在 Vue School 上观看免费视频课程"
  }
})

</script>

<template>
  <div data-v-21984c99="" class="vueschool">
    <a data-v-21984c99=""
       :href="href"
       target="_blank" rel="sponsored noopener"
       class="no-icon">{{title}}</a>
  </div>
</template>

<style scoped>

</style>