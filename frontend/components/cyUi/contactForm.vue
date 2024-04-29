<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

let state = reactive({
    email: undefined,
    message: undefined,
    name: undefined
})

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.name) errors.push({ path: 'name', message: 'Required' })
    if (!state.message) errors.push({ path: 'message', message: 'Required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data);

    useToast().add({ title: 'Message Sent', description: 'Expect a reply within 24 hours', timeout: 10000 })
    state = {
        email: undefined, message: undefined, name: undefined
    }
    formKey.value = Date.now()
}
const formKey = ref(Date.now())
</script>

<template>
    <UForm :key="formKey" :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" placeholder="Full name here" icon="i-heroicons-user-circle-20-solid" />
        </UFormGroup>
        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" placeholder="Your email address" icon="i-ph:at" />
        </UFormGroup>
        <UFormGroup label="Message" name="message">
            <UTextarea v-model="state.message" placeholder="Type your message here" />
        </UFormGroup>


        <UButton type="submit">
            Send Message
        </UButton>
    </UForm>
</template>
