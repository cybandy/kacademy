<script setup lang='ts'>
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
    serviceList: {
        type: Array<string>,
        default: ['career planning and counselling', 'private tutoring', 'exams preparation', '24/7 support']
    },
    to: {
        type: String,
        default: '#'
    },
    buttonLabel: {
        type: String,
        default: 'Get Started'
    },
    img: {
        type: String,
        default: 'https://images.pexels.com/photos/10646434/pexels-photo-10646434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
})
</script>

<template>
    <div class="grid md:grid-cols-2 items-center gap-5 md:gap-8 section">

        <div class="space-y-6">
            <CyUiCaption v-if="caption" :label="caption" />
            <h2 v-if="title" class="text-4xl md:text-5xl font-semibold text-primary-950 capitalize">{{ title }}</h2>
            <p v-if="description" class="text-base">{{ description }}</p>
            <div v-if="serviceList.length" class="space-y-5">
                <CyUiLineItem v-for="item of serviceList" :label="item" />
            </div>
            <UButton v-if="buttonLabel" :to="to">{{ buttonLabel }}</UButton>
        </div>

        <div class="grid place-content-center">
            <NuxtImg :src="img" format="webp" fit="inside" provider="weserv" crossorigin="anonymous"
                class="md:h-[675px]" />
        </div>
    </div>
</template>