<template>
    <DocsCard>
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-1">
                <UMultiSelect name="city" :options="cities" optionLabel="name" filter placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-80" />
                
                <UMessage v-if="$form.city?.error" severity="error" size="small" variant="simple">
                    {{ $form.city.error.message }}
                </UMessage>
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
    city: []
});
const resolver = ref(zodResolver(
    z.object({
        city: z
            .array(
                z.object({
                    name: z.string().min(1, 'City is required.')
                })
            )
            .min(1, 'City is required.')
    })
));
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
</script>
        