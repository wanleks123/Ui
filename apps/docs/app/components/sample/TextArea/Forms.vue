
<template>
    <DocsCard>
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <UTextarea name="address" rows="5" cols="30" style="resize: none" />
                <UMessage v-if="$form.address?.invalid" severity="error" size="small" variant="simple">{{ $form.address.error?.message }}</UMessage>
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
    address: ''
});
const resolver = ref(zodResolver(
    z.object({
        address: z.string().min(1, { message: 'Address is required.' })
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
</script>
        