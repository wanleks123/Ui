---
title: Auto Complete
---

AutoComplete is an input component that provides real-time suggestions when being typed.

## Import

```javascript
import AutoComplete from 'primevue/autocomplete';
```

## Accessibility

Screen Reader
Value to describe the component can either be provided via `label` tag combined with `inputId` prop or using `aria-labelledby`, `aria-label` props. The input element has `combobox` role in addition to aria-autocomplete, aria-haspopup and aria-expanded attributes. The relation between the input and the popup is created with `aria-controls` and `aria-activedescendant` attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list.

In multiple mode, chip list uses listbox role with `aria-orientation` set to horizontal whereas each chip has the `option` role with `aria-label` set to the label of the chip.

The popup list has an id that refers to the `aria-controls` attribute of the input element and uses `listbox` as the role. Each list item has `option` role and an id to match the `aria-activedescendant` of the input element.

```vue
<label for="ac1">;Username</label>
<AutoComplete inputId="ac1" />

<span id="ac2">Email</span>
<AutoComplete aria-labelledby="ac2" />

<AutoComplete aria-label="City" />
```

## Basic

AutoComplete is used with the v-model property for two-way value binding. In addition, suggestions property and a complete method are required to query the results.

::SampleAutoCompleteBasic
::

::DocsCodeSample
#default
```vue
<AutoComplete v-model="value" :suggestions="items" @complete="search" />
```

#full
```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
</script>
```
::

## DropDOwn

Enabling dropdown property displays a button next to the input field where click behavior of the button is defined using dropdownMode property that takes blank or current as possible values. blank is the default mode to send a query with an empty string whereas current setting sends a query with the current value of the input.

::SampleAutoCompleteDropDown
::

::DocsCodeSample
#default
```vue
<AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
```

#full
```vue

<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(null);
const items = ref([]);

const search = (event) => {
    let _items = [...Array(10).keys()];

    items.value = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
}
</script>
```
::


## Object

AutoComplete can work with objects using the optionLabel property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as {name: "United States", code:"USA"}.

::SampleAutoCompleteObject
::

::DocsCodeSample
#default
```vue
<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
```

#full
```vue

<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
</script>
```
::

## Forms

AutoComplete integrates seamlessly with the PrimeVue Forms library.

::SampleAutoCompleteForm
::

::DocsCodeSample
#default
```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
    <div class="flex flex-col gap-1">
        <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
        <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
```

#full
```vue

<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
            <div class="flex flex-col gap-1">
                <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
                <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const initialValues = ref({
    country: { name: '' }
});
const resolver = ref(zodResolver(
    z.object({
        country: z.union([
            z.object({
                name: z.string().min(1, 'Country is required.')
            }),
            z.any().refine((val) => false, { message: 'Country is required.' })
        ])
    })
));
const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();
const toast = useToast();

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
};

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
</script>
        
```
::


## Template

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.

::SampleAutoCompleteTemplate
::

::DocsCodeSample
#default
```vue
<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
    <template #option="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
    <template #header>
        <div class="font-medium px-3 py-2">Available Countries</div>
    </template>
    <template #footer>
        <div class="px-3 py-3">
            <Button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
        </div>
    </template>
</AutoComplete>
```

#full
```vue
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="px-3 py-3">
                    <Button label="Add New" fluid severity="secondary" text size="small" icon="pi pi-plus" />
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
</script>
```
::

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string`{lang="ts"} | `null` | Defines the text to display. |
| `icon` | `string`{lang="ts"} | `null` | Defines the icon to display. |
| `image` | `string`{lang="ts"} | `null` | Defines the image to display. |
| `size` | `HintedString<"large"\|"normal"\|"xlarge">`{lang="ts"} | `normal` | Size of the element. |
| `shape` | `HintedString<"square"\|"circle">`{lang="ts"} | `square` | Shape of the element. |
| `unstyled` | `boolean`{lang="ts"} | `false` | Removes component related styles. |

### Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| `root` | `AvatarPassThroughOptionType`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `label` | `AvatarPassThroughOptionType`{lang="ts"} | Used to pass attributes to the label's DOM element. |
| `icon` | `AvatarPassThroughOptionType`{lang="ts"} | Used to pass attributes to the icon's DOM element. |
| `image` | `AvatarPassThroughOptionType`{lang="ts"} | Used to pass attributes to the image's DOM element. |