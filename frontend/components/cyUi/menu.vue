<script setup lang='ts'>
const props = defineProps({
  horizontal: {
    type: Boolean,
    default: true,
  },
})
const links = [
  {
    label: 'Home',
    // to: '/'

  },
  {
    label: 'About Us',
    // to: '/about-us'

  },
  {
    label: 'Services',
    // to: '/Services'

  },
  {
    label: 'Contact Us',
    // to: '/Contact-Us'

  },
]
</script>

<template>
  <UHorizontalNavigation
    v-if="horizontal"
    :links="links"
  />
  <UVerticalNavigation
    v-else
    :links="links"
  />
</template>
