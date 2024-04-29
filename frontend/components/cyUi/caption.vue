<script setup lang='ts'>
const props = defineProps({
    label: {
        type: String,
        default: 'Caption'
    }
})
</script>

<template>
    <div class="flex flex-col gap-2 w-fit h-fit">
        <p class="text-primary-500">
            <slot>
                {{ label }}
            </slot>
        </p>
        <span class="w-7 h-1 inline-block cy-gradient-bg"></span>
    </div>
</template>