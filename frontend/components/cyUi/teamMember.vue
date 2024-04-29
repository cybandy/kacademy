<script setup lang='ts'>
import type { socialMedia } from "~/types";
import type { Avatar } from "#ui/types"
import type { PropType } from "vue";
const props = defineProps({
  img: {
    type: String,
    required: true
  },
  socialMedia: Object as PropType<socialMedia>,
  name: {
    type: String,
    required: true
  }
})


const icons = ['ic:baseline-facebook', 'lucide:instagram', 'devicon:twitter', 'devicon:linkedin']
const socials = ['face']
</script>

<template>
  <div class="w-[150px] h-fit flex flex-col gap-4 items-center">
    <NuxtImg :src="img" crossorigin="anonymous" fit="cover" format="webp"
      class="w-[150px] aspect-square rounded-full" />
    <span class="text-base font-medium">{{ name }}</span>
    <div class="flex items-center gap-5 px-3">
      <template v-for="item of icons">
        <UIcon dynamic :name="item" class="w-4 h-4" />
      </template>
    </div>
  </div>
</template>