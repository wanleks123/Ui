
<template>
    <DocsCard>
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-48">
            <div class="flex flex-col items-center gap-2">
                <UToggleSwitch name="activation" />
                <UMessage v-if="$form.activation?.invalid" severity="error" size="small" variant="simple">{{ $form.activation.error?.message }}</UMessage>
            </div>
            <UButton type="submit" severity="secondary" label="Submit" />
        </Form>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';
import { Form } from '@primevue/forms';

const toast = useToast();
const initialValues = ref({
    activation: false
});
const resolver = ref(zodResolver(
    z.object({
        activation: z.boolean().refine((val) => val === true, { message: 'Activation is required.' })
    })
));
</script>
        