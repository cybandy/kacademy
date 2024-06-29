<script setup lang='ts'>
const icons = ['ic:baseline-facebook', 'lucide:instagram', 'devicon:twitter']
</script>

<template>
  <div class="flex items-center justify-between text-primary-900">
    <span class="text-base font-medium">All rights reserved &copy; 2024</span>
    <div class="flex items-center gap-5">
      <template
        v-for="(item, k) of icons"
        :key="k"
      >
        <UIcon
          dynamic
          :name="item"
          class="w-6 h-6"
        />
      </template>
    </div>
  </div>
</template>
