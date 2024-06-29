<script setup lang='ts'>
import type { VerticalNavigationLink } from '#ui/types'

const props = defineProps({
  title: String,
  links: Array<VerticalNavigationLink>,
})
</script>

<template>
  <div class="flex flex-col gap-5">
    <span class="text-primary-950 px-3 pt-1.5">{{ title }}</span>
    <UVerticalNavigation :links="links" />
  </div>
</template>
