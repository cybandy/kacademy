<script setup lang='ts'>
defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'gg:check-o'
    }
})
</script>

<template>
    <div class="flex items-center gap-2">
        <UIcon :name="icon" class="w-6 h-6 text-primary-500" />
        <span class="text-medium text-sm">{{ label }}</span>
    </div>
</template>