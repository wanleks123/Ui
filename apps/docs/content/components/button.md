---
title: Button
---

Button is an extension to standard input element with icons and theming.

## Import

```javascript
import Button from 'primevue/button';
```

## Accessibility

Screen Reader Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the aria-label prop, if not present label prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use aria-label so that screen readers would be able to read the element properly. Keyboard Support Key Function tab Moves focus to the button. enter Activates the button. space Activates the button.

::DocsCard
::UButton{icon="pi pi-check" aria-label="Submit"}
::
::UButton{icon="pi pi-check" label="Submit"}
::
::UButton{class="youtube p-0" aria-label="Youtube"}
::Icon{name="pi pi-youtube" class="px-2"}
::
\<span\>Youtube\</span\>
::
::

::DocsCodeSample
\#default

```vue
<Button icon="pi pi-check" aria-label="Submit" />

<Button icon="pi pi-check" label="Submit" />

<Button class="youtube p-0" aria-label="Youtube">
    <i class="pi pi-youtube px-2"></i>
    <span class="px-4">Youtube</span>
</Button>
```

::

## Badge

Buttons have built-in badge support with badge and badgeSeverity properties.

::DocsCard
::UButton{type="button" label="Emails" badge="2"}
::
::UButton{type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined"}
::
::

::DocsCodeSample
\#default

```vue
<Button type="button" label="Emails" badge="2" />
<Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined" />
```

\#full

```vue
<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Emails" badge="2" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="2" badgeSeverity="contrast" variant="outlined" />
    </div>
</template>
```

::

## Basic

Text to display on a button is defined with the label property.

::DocsCard
::UButton{label="Submit"}
::
::

::DocsCodeSample

```vue
<Button label="Submit" />
```

::

## Button Group

Multiple buttons are grouped when wrapped inside an element with ButtonGroup component.

::DocsCard
::UButtonGroup
::UButton{label="Save" icon="pi pi-check"}
::
::UButton{label="Delete" icon="pi pi-trash"}
::
::UButton{label="Cancel" icon="pi pi-times"}
::
::
::

::DocsCodeSample
\#default

```vue
<ButtonGroup>
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</ButtonGroup>
```

\#full

```vue
<template>
    <div class="card flex justify-center">
        <ButtonGroup>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </ButtonGroup>
    </div>
</template>
```

::

## Disabled

When disabled is present, the element cannot be used.

::DocsCard
::UButton{label="Submit" disabled}
::
::

::DocsCodeSample
\#default

```vue
<Button label="Submit" disabled />
```

\#full

```vue
<template>
    <div class="card flex justify-center">
        <Button label="Submit" disabled />
    </div>
</template>
```

::

## Headless

Headless mode is enabled by adding the asChild property and defining your own UI element with the available bindings.

::DocsCodeSample
\#default

```vue
<Button v-slot="slotProps" asChild>
    <button
        v-bind="slotProps.a11yAttrs"
        class="rounded-lg bg-gradient-to-br from-primary-400 to-primary-700 active:from-primary-700 active:to-primary-900 text-white border-none px-6 py-3 font-bold hover:ring-2 cursor-pointer ring-offset-2 ring-offset-surface-0 dark:ring-offset-surface-900 ring-primary transition-all"
    >
        SIGN UP
    </button>
</Button>
```

::

## Icon Only

Buttons can have icons without labels.

::DocsCard
::UButton{icon="pi pi-check" aria-label="Filter"}
::
::UButton{icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark"}
::
::UButton{icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search"}
::
::

::DocsCodeSample
\#default

```vue
<Button icon="pi pi-check" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded variant="outlined" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" variant="text" raised rounded aria-label="Search" />
```

::

## Icons

Icon of a button is specified with icon property and position is configured using iconPos attribute.

::DocsCard
::UButton{label="Save" icon="pi pi-check" iconPos="right"}
::
::UButton{label="Search" icon="pi pi-search" iconPos="top"}
::
::

::DocsCodeSample

```vue
<Button label="Save" icon="pi pi-check" iconPos="right" />
<Button label="Search" icon="pi pi-search" iconPos="top" />
```

::

## Loading

Busy state is controlled with the loading property.

::DocsCodeSample
\#full

```vue
<script setup>
import { ref } from 'vue';
const loading = ref(false);
const load = () => {
    loading.value = true;
    setTimeout(() => { loading.value = false; }, 2000);
};
</script>

<template>
    <div class="card flex justify-center">
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
</template>
```

::

## Severity

The severity property defines the variant of a button.

::DocsCard
::UButton{label="Primary"}
::
::UButton{label="Secondary" severity="secondary"}
::
::UButton{label="Success" severity="success"}
::
::UButton{label="Danger" severity="danger"}
::
::

::DocsCodeSample

```vue
<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Danger" severity="danger" />
```

::

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string`{lang="ts"} | `null` | Text of the button. |
| `icon` | `string`{lang="ts"} | `null` | Name of the icon. |
| `iconPos` | `"left" \| "right" \| "top" \| "bottom"`{lang="ts"} | `left` | Position of the icon. |
| `severity` | `"secondary" \| "info" \| "success" \| "warn" \| "danger" \| "contrast" \| "help"`{lang="ts"} | `null` | Defines the style of the button. |
| `variant` | `"outlined" \| "text" \| "link"`{lang="ts"} | `undefined` | Specifies the variant of the component. |
| `loading` | `boolean`{lang="ts"} | `false` | Whether the button is in loading state. |
| `badge` | `string`{lang="ts"} | `null` | Value of the badge. |
| `raised` | `boolean`{lang="ts"} | `false` | Add a shadow to indicate elevation. |
| `rounded` | `boolean`{lang="ts"} | `false` | Add a circular border radius. |
| `disabled` | `boolean`{lang="ts"} | `false` | When present, it specifies that the component should be disabled. |
| `asChild` | `boolean`{lang="ts"} | `false` | When enabled, it changes the default rendered element for the one passed as a child. |

### Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| `root` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `icon` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the icon's DOM element. |
| `label` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the label's DOM element. |
| `pcBadge` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the Badge component. |