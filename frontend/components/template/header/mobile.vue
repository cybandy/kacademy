<script setup lang='ts'>
const isOpen = ref(false)
</script>

<template>
    <header class="flex items-center justify-between py-5">
        <CyUiLogo />
        <UIcon @click="() => isOpen = true" name="i-heroicons-bars-4-20-solid"
            class="w-6 h-6 text-primary-950 cursor-pointer" />

        <USlideover v-model="isOpen">
            <UCard :ui="{ divide: '', base: 'pt-10' }">
                <UIcon @click="() => isOpen = false" name="i-heroicons-x-mark-20-solid"
                    class="w-6 h-6 cursor-pointer fixed top-4 right-4" />
                <CyUiMenu :horizontal="false" />
            </UCard>
        </USlideover>
    </header>
</template>