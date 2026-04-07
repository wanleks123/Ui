---
title: Badge
---

Badge is a small status indicator for another element.

## Import

```javascript
// import as component
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
````

## Accessibility

Screen Reader Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, aria-live may be utilized as well. In case badges need to be tabbable, tabindex can be added to implement custom key handlers. Keyboard Support Component does not include any interactive elements.

## Basic

Content to display is defined with the value property or the default slot.

::DocsCard
::UBadge{value="2"}
::
::UBadge
10
::
::

```vue
<Badge value="2"></Badge>
<Badge>10</Badge>
```

## Button

Buttons have built-in support for badges to display a badge inline.

::DocsCard
    ::UButton{type="button" label="Notifications" badge="2"}
    #icon
        ::Icon{name="ph:bell" style="width:1.125rem; height:1.125rem"}
        ::
    ::
    ::UButton{type="button" label="Inbox" badge="2" badgeSeverity="contrast" outlined}
    #icon
        ::Icon{name="ph:envelope" style="width:1.125rem; height:1.125rem"}
        ::
    ::
::

::DocsCodeSample
#default

```vue
<Button type="button" label="Notifications" icon="ph:bell" badge="2" />
<Button type="button" label="Inbox" icon="ph:inbox" badge="2" badgeSeverity="contrast" variant="outlined" />
```
#full
```vue
<script setup lang="ts">
</script>

<template>
    <div class="card flex justify-center flex-wrap gap-4">
        <Button type="button" label="Notifications" icon="ph:bell" badge="2" />
        <Button type="button" label="Inbox" icon="ph:inbox" badge="2" badgeSeverity="contrast" variant="outlined" />
    </div>
</template>
```

::

## Overlay

A badge can be added to any element by encapsulating the content with the OverlayBadge component.

::DocsCard
    ::UOverlayBadge{value="2"}
        ::Icon{name="ph:bell" style="width: 2rem; height: 2rem;"}
        ::
    ::
    ::UOverlayBadge{value="4" severity="danger"}
        ::Icon{name="ph:calendar" style="width: 2rem; height: 2rem;"}
        ::
    ::
    ::UOverlayBadge{severity="danger"}
        ::Icon{name="ph:envelope" style="width: 2rem; height: 2rem;"}
        ::
    ::
::

::DocsCodeSample
#default
```vue
<OverlayBadge value="2">
    <Icon name="ph:bell" style="font-size: 2rem" />
</OverlayBadge>
<OverlayBadge value="4" severity="danger">
    <Icon name="ph:calendar" style="font-size: 2rem" />
</OverlayBadge>
<OverlayBadge severity="danger">
    <Icon name="ph:envelope" style="font-size: 2rem" />
</OverlayBadge> 
```
#full
```vue
<script setup lang="ts">
</script>

<template>
    <div class="card flex flex-wrap justify-center gap-6">
        <OverlayBadge value="2">
            <Icon name="ph:bell" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge value="4" severity="danger">
            <Icon name="ph:calendar" style="font-size: 2rem" />
        </OverlayBadge>
        <OverlayBadge severity="danger">
            <Icon name="ph:envelope" style="font-size: 2rem" />
        </OverlayBadge>
    </div>
</template>
```

::

## Severity

Severity defines the variant of a badge.

::DocsCard
::UBadge{value="2"}
::
::UBadge{value="6" severity="secondary"}
::
::UBadge{value="8" severity="success"}
::
::UBadge{value="4" severity="info"}
::
::UBadge{value="9" severity="warn"}
::
::UBadge{value="3" severity="danger"}
::
::UBadge{value="5" severity="contrast"}
::
::

::DocsCodeSample
```vue
<Badge value="2"></Badge>
<Badge value="6" severity="secondary"></Badge>
<Badge value="8" severity="success"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="9" severity="warn"></Badge>
<Badge value="3" severity="danger"></Badge>
<Badge value="5" severity="contrast"></Badge>
```
#full
```vue
<script setup lang="ts">
</script>

<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="6" severity="secondary"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="9" severity="warn"></Badge>
        <Badge value="3" severity="danger"></Badge>
        <Badge value="5" severity="contrast"></Badge>
    </div>
</template>
```

::

## Size

Use the size property to customize the dimensions of a Badge.

::DocsCard
::UBadge{value="8" size="xlarge" severity="success"}
::
::UBadge{value="6" size="large" severity="warn"}
::
::UBadge{value="4" severity="info"}
::
::UBadge{value="2" size="small"}
::
::

::DocsCodeSample
```vue
<Badge value="8" size="xlarge" severity="success"></Badge>
<Badge value="6" size="large" severity="warn"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="2" size="small"></Badge>
```
#full
```vue
<script setup lang="ts">
</script>

<template>
    <div class="card flex flex-wrap justify-center items-end gap-2">
        <Badge value="8" size="xlarge" severity="success"></Badge>
        <Badge value="6" size="large" severity="warn"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="2" size="small"></Badge>
    </div>
</template>
```
::

\</details\>

## API

### Props

| Name        | Type                                                                                                      | Default | Description                                                              |
|-------------|-----------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------|
| `value`     | `string \| number`{lang="ts"}                                                                             | `null`  | Value to display inside the badge.                                       |
| `severity`  | `null \| HintedString<"secondary"> \| "info" \| "success" \| "warn" \| "danger" \| "contrast"`{lang="ts"} | `null`  | Severity type of the badge.                                              |
| `size`      | `null \| HintedString<"small"> \| "large" \| "xlarge"`{lang="ts"}                                         | `null`  | Size of the badge, valid options are 'small', 'large', and 'xlarge'.     |
| `dt`        | `any`{lang="ts"}                                                                                          | `null`  | It generates scoped CSS variables using design tokens for the component. |
| `pt`        | `PassThrough<BadgePassThroughOptions<any>>`{lang="ts"}                                                    | `null`  | Used to pass attributes to DOM elements inside the component.            |
| `ptOptions` | `any`{lang="ts"}                                                                                          | `null`  | Used to configure passthrough(pt) options of the component.              |
| `unstyled`  | `boolean`{lang="ts"}                                                                                      | `false` | When enabled, it removes component related styles in the core.           |

### Pass Through Options

| Name    | Type                                       | Description                                        |
|---------|--------------------------------------------|----------------------------------------------------|
| `root`  | `BadgePassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `hooks` | `any`{lang="ts"}                           | Used to manage all lifecycle hooks.                |