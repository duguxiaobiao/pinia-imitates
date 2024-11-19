<script setup>

defineOptions({
  name: "VueSchoolVideoComponent"
})

defineProps({
  href: String,
  title: String
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