<script setup>

defineOptions({
  name: "VideoComponent"
})

defineProps({
  href: String,
  title: String
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