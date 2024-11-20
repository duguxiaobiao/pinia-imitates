<script setup>

defineOptions({
  name: "VideoComponent"
})

defineProps({
  href: String,
  title: {
    type: String,
    default: "通过 Pinia 作者的官方视频课程掌握更多内容"
  }
})

</script>

<template>

  <div class="mp" data-v-0c1324e4="">
    <a :href="href"
       target="_blank" rel="noopener" title="Learn all about state in Pinia"
       class="no-icon cta" data-v-0c1324e4="">
      <div class="text" data-v-0c1324e4=""><!--[-->{{title}}<!--]--></div>
    </a>
  </div>

</template>

<style scoped>

</style>