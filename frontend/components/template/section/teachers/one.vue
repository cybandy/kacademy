<script setup lang='ts'>
import type { Teacher } from '@/types'

defineProps({
  caption: {
    type: String,
    default: 'Our Services',
  },
  title: {
    type: String,
    default: 'unique journey for every child',
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  serviceList: {
    type: Array<Teacher>,
    default: [
      {
        name: 'Anne Kendra',
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2',
        social: {
          facebook: 'https://facebook.com/#',
          instagram: 'https://instagram.com/#',
          twitter: 'https://x.com/#',
        },
      },
      {
        name: 'Antoinette Richards',
        img: 'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2',
        social: {
          facebook: 'https://facebook.com/#',
          instagram: 'https://instagram.com/#',
          twitter: 'https://x.com/#',
        },
      },
      {
        name: 'Sam Raphael',
        img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2',
        social: {
          facebook: 'https://facebook.com/#',
          instagram: 'https://instagram.com/#',
          twitter: 'https://x.com/#',
        },
      },
      {
        name: 'Jewel Brown',
        img: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2',
        social: {
          facebook: 'https://facebook.com/#',
          instagram: 'https://instagram.com/#',
          twitter: 'https://x.com/#',
        },
      },
    ],
  },

})
</script>

<template>
  <div class="grid gap-8 place-content-center section">
    <div class="text-center space-y-5">
      <div class="grid place-content-center ">
        <CyUiCaption
          v-if="caption"
          :label="caption"
          class=""
        />
      </div>
      <h2
        v-if="title"
        class="text-4xl md:text-5xl font-semibold text-primary-950 capitalize"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="text-base"
      >
        {{ description }}
      </p>
    </div>

    <div
      v-if="serviceList.length"
      class="flex flex-wrap md:flex-nowrap w-full justify-center gap-x-5 gap-y-8"
    >
      <CyUiTeamMember
        v-for="(item, k) of serviceList"
        :key="k"
        :img="(item.img as any)"
        :name="(item.name as any)"
        :social-media="item.social"
      />
    </div>
  </div>
</template>
