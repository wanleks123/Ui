<template>
    <div class="card flex justify-center">
        <UForm 
            v-slot="$form" 
            :resolver="resolver" 
            :initialValues="initialValues" 
            @submit="onFormSubmit" 
            class="flex justify-center flex-col gap-4 w-full md:w-56"
        >
            <div class="flex flex-col gap-1">
                <UAutoComplete 
                    name="country" 
                    optionLabel="name" 
                    :suggestions="filteredCountries" 
                    @complete="search" 
                    placeholder="Select a Country"
                    fluid 
                />
                
                <UMessage v-if="$form?.country?.invalid" severity="error" size="small" variant="simple">
                    {{ $form.country.error?.message }}
                </UMessage>
            </div>
            
            <UButton type="submit" severity="secondary" label="Submit" />
        </UForm>
        
        <UToast />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';
// Gunakan relative path untuk menghindari error module resolution
import { CountryService } from "./Service/CountryService";

const toast = useToast();
const countries = ref([]);
const filteredCountries = ref([]);

// Berikan nilai awal yang jelas
const initialValues = ref({
    country: null
});

// Resolver yang lebih stabil untuk objek
const resolver = zodResolver(
    z.object({
        country: z.object({
            name: z.string().min(1, 'Name is required')
        }, { required_error: 'Country is required.' }).nullable().refine(val => val !== null, {
            message: 'Country is required.'
        })
    })
);

onMounted(() => {
    CountryService.getCountries().then((data) => {
        countries.value = data || [];
    }).catch(() => {
        countries.value = [];
    });
});

const search = (event) => {
    // Safety check jika data belum siap
    if (!countries.value) return;

    setTimeout(() => {
        const query = event.query?.trim();
        if (!query) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(query.toLowerCase());
            });
        }
    }, 250);
};

// Gunakan destructuring { valid, values } agar lebih aman dari undefined 'event'
const onFormSubmit = ({ valid, values }) => {
    if (valid) {
        toast.add({ 
            severity: 'success', 
            summary: 'Success', 
            detail: `Selected: ${values.country?.name}`, 
            life: 3000 
        });
        console.log("Form Values:", values);
    }
};
</script>