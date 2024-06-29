<script setup lang='ts'>
defineProps({
  img: {
    type: String,
    default: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
  },
  name: {
    type: String,
    default: 'Juan Brown',
  },
  message: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  rating: {
    type: Number,
    default: 5,
  },
})
</script>

<template>
  <div class="space-y-4 shadow hover:shadow-lg">
    <UAvatar
      :src="img"
      size="sm"
      crossorigin="anonymous"
    />
    <div class="space-y-1">
      <span class="text-base font-medium text-primary-950">{{ name }}</span>
      <div class="flex items-center gap-1">
        <UIcon
          v-for="(i, k) of _Range(0, rating)"
          :key="k"
          name="material-symbols:star"
          class="w-4 h-4 text-yellow-500"
        />
      </div>
    </div>
    <p class="text-sm">
      {{ message }}
    </p>
  </div>
</template>
