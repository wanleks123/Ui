---
title: Card
---

Avatar represents people using icons, labels and images.

## Import

```javascript
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup'; // Optional for grouping
```

## Accessibility

Screen Reader Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like `img` along with `aria-labelledby` or `aria-label` to describe the component. In case avatars need to be tabbable, `tabindex` can be added as well to implement custom key handlers.

## Basic

A letter Avatar is defined with the label property.

::SampleCardBasic
::

::DocsCodeSample
#default
```vue
<UCard>
        <template #title>Simple Card</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
</UCard>
```
::

## Advanced

Use the image property to display an image as an Avatar.

::SampleCardAdvanced
::

::DocsCodeSample
#default
```vue
<UCard style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" class="w-full h-auto block m-0"/>
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
    <template #footer>
        <div class="flex gap-4 mt-1">
            <UButton label="Cancel" severity="secondary" variant="outlined" class="w-full" />
            <UButton label="Save" class="w-full" />
        </div>
    </template>
</UCard>
```

#full
```vue
<template>
    <div class="card">
        <div class="flex flex-wrap gap-8">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
                </OverlayBadge>
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>

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