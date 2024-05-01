<script setup lang='ts'>
import type { ContactItem } from '~/types';

defineProps({
    caption: {
        type: String,
        default: 'contact'
    },
    title: {
        type: String,
        default: 'Get In Touch'
    },
    description: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    contactInfo: {
        type: Array<ContactItem>,
        default: [
            {
                label: 'WhatsApp',
                icon: 'ic:baseline-whatsapp',
                value: '+39 2345 678 923',
                url: 'https://wa.me/+393883835946?text=hi'
            },
            {
                label: 'Email',
                icon: 'ph:at',
                value: 'info@cybandy.com',
                url: 'mailto:info@cybandy.com'
            },
            {
                label: 'Instagram',
                icon: 'carbon:logo-instagram',
                value: '@kacademy',
                url: '#'
            },
        ]
    }


})
</script>

<template>
    <div class="grid gap-x-5 gap-y-14 md:grid-cols-2 section">
        <div class="space-y-10 text-white">
            <div class="space-y-5">
                <h2 v-if="title" class="text-4xl md:text-4xl font-semibold text-primary-50 capitalize">{{ title }}</h2>
                <p v-if="description" class="text-base w-full lg:w-5/6">{{ description }}</p>
            </div>

            <div class="space-y-3">
                <CyUiContactItem v-for="item of contactInfo" v-bind="item" />
            </div>
        </div>

        <UCard :ui="{ base: 'bg-white' }">
            <CyUiContactForm />
        </UCard>
    </div>
</template>