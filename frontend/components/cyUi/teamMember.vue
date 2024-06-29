<script setup lang='ts'>
import type { PropType } from 'vue'
import type { socialMedia as SocialMedia } from '~/types'

const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  socialMedia: Object as PropType<SocialMedia>,
  name: {
    type: String,
    required: true,
  },
})

const icons = ['ic:baseline-facebook', 'lucide:instagram', 'carbon:logo-x', 'carbon:logo-linkedin']
const socials = ['face']
</script>

<template>
  <div class="w-fit p-4 h-fit flex flex-col gap-4 items-center shadow-md">
    <NuxtImg
      :src="img"
      crossorigin="anonymous"
      format="webp"
      class="w-[150px] aspect-square rounded-full shadow-sm"
      provider="weserv"
    />
    <span class="text-base font-medium">{{ name }}</span>
    <div class="flex items-center gap-5 px-3">
      <template
        v-for="(item, i) of icons"
        :key="i"
      >
        <UIcon
          dynamic
          :name="item"
          class="w-5 h-5 text-primary-500"
        />
      </template>
    </div>
  </div>
</template>
