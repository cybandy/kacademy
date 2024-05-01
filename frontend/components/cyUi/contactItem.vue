<script setup lang='ts'>
defineProps({
    icon: {
        type: String,
        default: 'ph:at'
    },
    label: {
        type: String,
        default: 'Email'
    },
    value: {
        type: String,
        default: 'info@kacademy.local'
    },
    url: {
        type: String,
        default: 'mailto:info@kacademy.local'
    }
})
</script>

<template>
    <a :href="url" target="_blank" class="w-fit flex gap-5 items-center">
        <UIcon :name="icon" dynamic class="w-9 h-9 md:w-12 md:h-12" />
        <div class="w-full flex flex-col items-stretch">
            <span class="text-base">{{ label }}</span><span class="text-base">{{ value }}</span>
        </div>
    </a>
</template>