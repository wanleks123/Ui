---
title: Checkbox
---

Checkbox is an extension to standard checkbox element with theming.

## Import

```javascript
import Checkbox from 'primevue/checkbox';
import CheckboxGroup from 'primevue/checkboxgroup';
```

## Accessibility

Screen Reader Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via label tag combined with `inputId` prop or using `aria-labelledby`, `aria-label` props.

### Keyboard Support

| Key | Function |
|-----|----------|
| *tab* | Moves focus to the checkbox. |
| *space* | Toggles the checked state. |

```vue
<label for="chkbox1">Remember Me</label>
<Checkbox inputId="chkbox1" />

<span id="chkbox2">Remember Me</span>
<Checkbox aria-labelledby="chkbox2" />

<Checkbox aria-label="Remember Me" />
```

## Basic

Binary checkbox is used with the `v-model` for two-way value binding and the `binary` property.

::DocsCard
  ::UCheckbox{binary}
  ::
::

::DocsCodeSample
#default
```vue
<Checkbox v-model="checked" binary />
```

#full
```vue
<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary />
    </div>
</template>
```
::

## Disabled

When `disabled` is present, the element cannot be edited and focused.

::DocsCard
  ::div{class="flex justify-center gap-2"}
    ::UCheckbox{binary disabled}
    ::
    ::UCheckbox{":modelValue"="true" binary disabled}
    ::
  ::
::

::DocsCodeSample
#default
```vue
<Checkbox v-model="checked1" binary disabled />
<Checkbox v-model="checked2" binary disabled />
```

#full
```vue
<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(true);
</script>

<template>
    <div class="card flex justify-center gap-2">
        <Checkbox v-model="checked1" binary disabled />
        <Checkbox v-model="checked2" binary disabled />
    </div>
</template>
```
::

## Dynamic

Checkboxes can be generated using a list of values.

::DocsCodeSample
#default
```vue
<div v-for="category of categories" :key="category.key" class="flex items-center gap-2">
    <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
    <label :for="category.key">{{ category.name }}</label>
</div>
```

#full
```vue
<script setup>
import { ref } from "vue";

const categories = ref([
    {name: "Accounting", key: "A"},
    {name: "Marketing", key: "M"},
    {name: "Production", key: "P"},
    {name: "Research", key: "R"}
]);
const selectedCategories = ref(['Marketing']);
</script>

<template>
    <div class="card flex justify-center">
        <div class="flex flex-col gap-4">
            <div v-for="category of categories" :key="category.key" class="flex items-center gap-2">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>
```
::

## Filled

Specify the `variant` property as `filled` to display the component with a higher visual emphasis than the default outlined style.

::DocsCard
  ::UCheckbox{binary variant="filled"}
  ::
::

::DocsCodeSample
#default
```vue
<Checkbox v-model="checked" binary variant="filled" />
```

#full
```vue
<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>

<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" binary variant="filled" />
    </div>
</template>
```
::

## Forms

Checkbox integrates seamlessly with the PrimeVue Forms library.

::DocsCodeSample
#default
```vue
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit">
    <CheckboxGroup name="ingredient" class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
            <Checkbox inputId="cheese" value="Cheese" />
            <label for="cheese"> Cheese </label>
        </div>
        </CheckboxGroup>
    <Message v-if="$form.ingredient?.invalid" severity="error" size="small" variant="simple">{{ $form.ingredient.error?.message }}</Message>
    <Button type="submit" label="Submit" />
</Form>
```
::

## Group

Multiple checkboxes can be grouped by binding each one to the same model. Alternatively, a `CheckboxGroup` wrapper can be used to group checkboxes.

::DocsCard
  ::div{class="flex flex-wrap justify-center gap-4"}
      ::div{class="flex items-center gap-2"}
          ::UCheckbox{inputId="ing1" value="Cheese"}
          ::
          ::label{for="ing1"} Cheese ::
      ::
      ::div{class="flex items-center gap-2"}
          ::UCheckbox{inputId="ing2" value="Mushroom"}
          ::
          ::label{for="ing2"} Mushroom ::
      ::
  ::
::

::DocsCodeSample
#default
```vue
<div class="flex flex-wrap gap-4">
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1"> Cheese </label>
    </div>
    <div class="flex items-center gap-2">
        <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2"> Mushroom </label>
    </div>
</div>
```
::

## Indeterminate

When `indeterminate` is present, the checkbox masks the actual value visually.

::DocsCard
  ::UCheckbox{binary indeterminate}
  ::
::

::DocsCodeSample
#default
```vue
<Checkbox v-model="checked" indeterminate binary />
```
::

## Sizes

Checkbox provides small and large sizes as alternatives to the base.

::DocsCard
  ::div{class="flex flex-wrap justify-center gap-4 items-center"}
    ::UCheckbox{size="small" binary}::
    ::UCheckbox{binary}::
    ::UCheckbox{size="large" binary}::
  ::
::

::DocsCodeSample
#default
```vue
<Checkbox v-model="size" value="Small" size="small" />
<Checkbox v-model="size" value="Normal" />
<Checkbox v-model="size" value="Large" size="large" />
```
::

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `any`{lang="ts"} | `null` | Value of the checkbox. |
| `modelValue` | `any`{lang="ts"} | `null` | Value binding of the checkbox. |
| `defaultValue` | `any`{lang="ts"} | `null` | The default value for the input when not controlled by `modelValue`. |
| `name` | `string`{lang="ts"} | `null` | Name of the input element. |
| `binary` | `boolean`{lang="ts"} | `false` | Allows to select a boolean value instead of multiple values. |
| `indeterminate` | `boolean`{lang="ts"} | `false` | When present, it specifies input state as indeterminate. |
| `size` | `"small" \| "large"`{lang="ts"} | `null` | Defines the size of the component. |
| `invalid` | `boolean`{lang="ts"} | `false` | When present, it specifies that the component should have invalid state style. |
| `disabled` | `boolean`{lang="ts"} | `false` | When present, it specifies that the element should be disabled. |
| `variant` | `null \| HintedString<"outlined" \| "filled">`{lang="ts"} | `null` | Specifies the input variant of the component. |
| `readonly` | `boolean`{lang="ts"} | `false` | When present, it specifies that an input field is read-only. |
| `required` | `boolean`{lang="ts"} | `false` | When present, it specifies that the element is required. |
| `tabindex` | `number`{lang="ts"} | `null` | Index of the element in tabbing order. |
| `trueValue` | `any`{lang="ts"} | `true` | Value in checked state. |
| `falseValue` | `any`{lang="ts"} | `false` | Value in unchecked state. |
| `inputId` | `string`{lang="ts"} | `null` | Identifier of the underlying input element. |
| `inputClass` | `object`{lang="ts"} | `null` | Style class of the input field. |
| `inputStyle` | `string \| object`{lang="ts"} | `null` | Inline style of the input field. |
| `ariaLabelledby` | `string`{lang="ts"} | `null` | Establishes relationships between the component and label(s). |
| `ariaLabel` | `string`{lang="ts"} | `null` | Establishes a string value that labels the component. |
| `formControl` | `Record<string, any>`{lang="ts"} | `null` | Form control object for validation and form state. |
| `dt` | `any`{lang="ts"} | `null` | It generates scoped CSS variables using design tokens. |
| `pt` | `PassThrough<CheckboxPassThroughOptions>`{lang="ts"} | `null` | Used to pass attributes to DOM elements. |
| `ptOptions` | `any`{lang="ts"} | `null` | Used to configure passthrough(pt) options. |
| `unstyled` | `boolean`{lang="ts"} | `false` | When enabled, it removes component related styles. |

### Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| `root` | `CheckboxPassThroughOptionType`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `input` | `CheckboxPassThroughOptionType`{lang="ts"} | Used to pass attributes to the input's DOM element. |
| `box` | `CheckboxPassThroughOptionType`{lang="ts"} | Used to pass attributes to the box's DOM element. |
| `icon` | `CheckboxPassThroughOptionType`{lang="ts"} | Used to pass attributes to the icon's DOM element. |
| `hooks` | `any`{lang="ts"} | Used to manage all lifecycle hooks. |