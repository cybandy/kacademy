<script setup lang='ts'>
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div class="space-y-2">
    <p class="text-base font-semibold text-primary-950">
      {{ title }}
    </p>
    <p class="text-wrap text-sm">
      {{ description }}
    </p>
  </div>
</template>
