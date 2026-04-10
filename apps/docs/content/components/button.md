---
title: Button
---

Button is an extension to standard input element with icons and theming.

## Import

```javascript
import Button from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
```

## Accessibility

Screen Reader Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the aria-label prop, if not present label prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use aria-label so that screen readers would be able to read the element properly. Keyboard Support Key Function tab Moves focus to the button. enter Activates the button. space Activates the button.

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

## Button

Buttons have built-in support for badges to display a badge inline.

::DocsCard
    ::UButton{type="button" label="Notifications" badge="2"}
    #icon
        ::Icon{name="ph:bell" style="width:1.125rem; height:1.125rem"}
        ::
    ::
    ::UButton{type="button" label="Inbox" badge="2" outlined}
    #icon
        ::Icon{name="ph:envelope" style="width:1.125rem; height:1.125rem"}
        ::
    ::
::

::DocsCodeSample
#default

```vue
<Button type="button" label="Notifications" badge="2">
    <template #icon>
        <Icon name="ph:bell" />
    </template>
</Button>

<Button type="button" label="Inbox" badge="2" variant="outlined">
    <template #icon>
        <Icon name="ph:envelope" />
    </template>
</Button>
```
#full
```vue
<script setup lang="ts">
</script>

<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Notifications" badge="2">
            <template #icon>
                <Icon name="ph:bell" />
            </template>
        </Button>
        <Button type="button" label="Inbox" badge="2" badgeSeverity="contrast" variant="outlined">
            <template #icon>
                <Icon name="ph:envelope" />
            </template>
        </Button>
    </div>
</template>
```

::

## Icon Only

Buttons can have icons without labels. Always include an `aria-label` for screen readers.

::DocsCard
    ::UButton{aria-label="Filter"}
    #icon
        ::Icon{name="ph:funnel" style="width:1.125rem; height:1.125rem"}
        ::
    ::
    ::UButton{severity="secondary" rounded variant="outlined" aria-label="Bookmark"}
    #icon
        ::Icon{name="ph:bookmark-simple" style="width:1.125rem; height:1.125rem"}
        ::
    ::
    ::UButton{severity="success" variant="text" raised rounded aria-label="Search"}
    #icon
        ::Icon{name="ph:magnifying-glass" style="width:1.125rem; height:1.125rem"}
        ::
    ::
::

::DocsCodeSample
#default
```vue
<Button aria-label="Filter">
    <template #icon>
        <Icon name="ph:funnel" />
    </template>
</Button>

<Button severity="secondary" rounded variant="outlined" aria-label="Bookmark">
    <template #icon>
        <Icon name="ph:bookmark-simple" />
    </template>
</Button>

<Button severity="success" variant="text" raised rounded aria-label="Search">
    <template #icon>
        <Icon name="ph:magnifying-glass" />
    </template>
</Button>
```
::

## Severity

Severity defines the variant of a button.

::DocsCard
::UButton{label="Primary"}
::
::UButton{label="Secondary" severity="secondary"}
::
::UButton{label="Success" severity="success"}
::
::UButton{label="Info" severity="info"}
::
::UButton{label="Warn" severity="warn"}
::
::UButton{label="Help" severity="help"}
::
::UButton{label="Danger" severity="danger"}
::
::UButton{label="Contrast" severity="contrast"}
::
::

::DocsCodeSample
```vue
<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Info" severity="info" />
<Button label="Warn" severity="warn" />
<Button label="Help" severity="help" />
<Button label="Danger" severity="danger" />
<Button label="Contrast" severity="contrast" />
```
::

## Button Group

Multiple buttons are grouped when wrapped inside the ButtonGroup component.

::DocsCard
::UButtonGroup
    ::UButton{label="Save"}
    #icon
        ::Icon{name="ph:floppy-disk" style="width:1.125rem; height:1.125rem"}
        ::
    ::
    ::UButton{label="Delete"}
    #icon
        ::Icon{name="ph:trash" style="width:1.125rem; height:1.125rem"}
        ::
    ::
    ::UButton{label="Cancel"}
    #icon
        ::Icon{name="ph:x-circle" style="width:1.125rem; height:1.125rem"}
        ::
    ::
::
::

::DocsCodeSample
```vue
<ButtonGroup>
    <Button label="Save">
        <template #icon>
            <Icon name="ph:floppy-disk" />
        </template>
    </Button>
    <Button label="Delete">
        <template #icon>
            <Icon name="ph:trash" />
        </template>
    </Button>
    <Button label="Cancel">
        <template #icon>
            <Icon name="ph:x-circle" />
        </template>
    </Button>
</ButtonGroup>
```
::

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string`{lang="ts"} | `null` | Text of the button. |
| `iconPos` | `"left" \| "right" \| "top" \| "bottom"`{lang="ts"} | `left` | Position of the icon. |
| `severity` | `null \| HintedString<"secondary"> \| "info" \| "success" \| "warn" \| "danger" \| "contrast" \| "help"`{lang="ts"} | `null` | Severity type of the button. |
| `variant` | `"outlined" \| "text" \| "link"`{lang="ts"} | `undefined` | Specifies the variant of the component. |
| `loading` | `boolean`{lang="ts"} | `false` | Whether the button is in loading state. |
| `badge` | `string`{lang="ts"} | `null` | Value of the badge. |
| `raised` | `boolean`{lang="ts"} | `false` | Add a shadow to indicate elevation. |
| `rounded` | `boolean`{lang="ts"} | `false` | Add a circular border radius. |
| `disabled` | `boolean`{lang="ts"} | `false` | When present, it specifies that the component should be disabled. |
| `dt` | `any`{lang="ts"} | `null` | It generates scoped CSS variables using design tokens for the component. |
| `pt` | `PassThrough<ButtonPassThroughOptions<any>>`{lang="ts"} | `null` | Used to pass attributes to DOM elements inside the component. |
| `unstyled` | `boolean`{lang="ts"} | `false` | When enabled, it removes component related styles in the core. |

### Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| `root` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `icon` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the icon's DOM element. |
| `label` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the label's DOM element. |
| `pcBadge` | `ButtonPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the Badge component. |
| `hooks` | `any`{lang="ts"} | Used to manage all lifecycle hooks. |