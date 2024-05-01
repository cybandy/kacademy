<script setup lang='ts'>
import type { Testimony } from '~/types';
defineProps({
    caption: {
        type: String,
        default: 'Our Services'
    },
    title: {
        type: String,
        default: 'unique journey for every child'
    },
    description: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    testimonyList: {
        type: Array<Testimony>,
        default: [
            {
                name: 'Anne Kendra',
                img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2',
                rating: 4,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                name: 'Antoinette Richards',
                img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2",
                rating: 3,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                name: 'Sam Raphael',
                img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2",
                rating: 4,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                name: 'Jewel Brown',
                img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2",
                rating: 3,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                name: 'Anne Kendra',
                img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2',
                rating: 5,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
                name: 'Antoinette Richards',
                img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2",
                rating: 2,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
        ]
    },

})

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})
</script>

<template>
    <div class="space-y-14 section">
        <div class="space-y-5">
            <CyUiCaption v-if="caption" :label="caption" />
            <div class="space-y-2">
                <h2 v-if="title" class="text-4xl md:text-5xl font-semibold text-primary-950 capitalize">{{ title }}</h2>
                <p v-if="description" class="text-base">{{ description }}</p>
            </div>
        </div>

        <UCarousel ref="carouselRef" v-slot="{ item }" :items="testimonyList"
            :ui="{ container: 'gap-5', item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 snap-start' }">
            <CyUiTestimony v-bind="item" />
        </UCarousel>
    </div>
</template>