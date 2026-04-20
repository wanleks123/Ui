<template>
    <div class="card flex justify-center">
        <UForm v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-1">
                <UListbox name="city" :options="cities" optionLabel="name" fluid />
                <UMessage v-if="$form.city?.invalid" severity="error" size="small" variant="simple">
                    {{ $form.city.error?.message }}
                </UMessage>
            </div>
            <UButton type="submit" severity="secondary" label="Submit" />
        </UForm>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';

const toast = useToast();

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const initialValues = ref({
    city: null // Gunakan null untuk nilai awal objek
});

/**
 * SOLUSI:
 * 1. Hapus ref() dari zodResolver. Cukup buat sebagai variabel biasa.
 * 2. Sederhanakan skema Zod agar lebih stabil di SSR (Server-Side Rendering).
 */
const resolver = zodResolver(
    z.object({
        city: z.object({
            name: z.string().min(1, 'City is required.')
        }, { required_error: 'City is required.' }).nullable().refine(val => !!val, {
            message: 'City is required.'
        })
    })
);

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
</script>