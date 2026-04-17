<template>
    <DocsCard>
        <UForm v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <UCheckboxGroup name="ingredient" class="flex flex-wrap gap-4">
                    <div class="flex items-center gap-2">
                        <UCheckbox inputId="cheese" value="Cheese" />
                        <label for="cheese"> Cheese </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <UCheckbox inputId="mushroom" value="Mushroom" />
                        <label for="mushroom"> Mushroom </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <UCheckbox inputId="pepper" value="Pepper" />
                        <label for="pepper"> Pepper </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <UCheckbox inputId="onion" value="Onion" />
                        <label for="onion"> Onion </label>
                    </div>
                </UCheckboxGroup>
                
                <UMessage v-if="$form?.ingredient?.invalid" severity="error" size="small" variant="simple">
                    {{ $form.ingredient?.error?.message }}
                </UMessage>
            </div>
            <UButton type="submit" severity="secondary" label="Submit" />
        </UForm>
    </DocsCard>
    <Toast />
</template>