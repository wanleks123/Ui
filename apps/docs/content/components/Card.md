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
<Avatar label="P" class="mr-2" size="xlarge" />
<Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
<Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" />

<Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
<Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
<Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" shape="circle" />

<OverlayBadge value="4" severity="danger" class="inline-flex">
    <Avatar label="U" size="xlarge" />
</OverlayBadge>
```

#full
```vue

<template>
    <div class="flex flex-wrap gap-8">
        <div class="flex-auto">
            <h5>Label</h5>
            <Avatar label="P" class="mr-2" size="xlarge" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
            <Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
            <Avatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <OverlayBadge value="4" severity="danger" class="inline-flex">
                <Avatar label="U" size="xlarge" />
            </OverlayBadge>
        </div>
    </div>
</template>

<script setup>

</script>

```
::

## Advanced

Use the image property to display an image as an Avatar.

::SampleCardAdvanced
::

::DocsCodeSample
#default
```vue
<Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<Avatar image="/images/avatar/onyamalimba.png" shape="circle" />

<OverlayBadge value="4" severity="danger" class="inline-flex">
    <Avatar class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
</OverlayBadge>

<Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex items-center justify-center mr-2" size="xlarge" />
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


## Icon

A font icon is displayed as an Avatar with the icon property.

::SampleAvatarIcon
::

::DocsCodeSample
#default
```vue
<Avatar size="xlarge" class="bg-primary">
    <Icon name="ph:user-bold" class="size-1/2" />
</Avatar> 
<Avatar size="large" class="bg-surface-100 dark:bg-surface-800 ">
   <Icon name="ph:user-bold" class="size-1/2" />
</Avatar>              
<Avatar class="bg-surface-200 dark:bg-surface-700">
    <Icon name="ph:user-bold" class="size-1/2" />
</Avatar>

<Avatar size="xlarge" shape="circle" class="bg-primary ">
    <Icon name="ph:user-bold" class="size-1/2" />
</Avatar>
<Avatar size="large" shape="circle" class="bg-surface-100 dark:bg-surface-800 ">
     <Icon name="ph:user-bold" class="size-1/2" />
</Avatar>
                    
<Avatar shape="circle" class="bg-surface-200 dark:bg-surface-700 ">
      <Icon name="ph:user-bold" class="size-1/2" />
</Avatar>

<OverlayBadge value="4" severity="danger" class="inline-flex">
    <Avatar size="xlarge" class="bg-primary ">
    <Icon name="ph:user-bold" class="size-1/2" />
    </Avatar>
</OverlayBadge>
```

#full
```vue
<template>
    <DocsCard>
            <div class="flex-auto">
                <h5 class="mb-4">Icon</h5>
                <div class="flex items-end gap-2">
                    <Avatar size="xlarge" class="bg-primary">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </Avatar>
                    
                    <Avatar size="large" class="bg-surface-100 dark:bg-surface-800 ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </Avatar>
                    
                    <Avatar class="bg-surface-200 dark:bg-surface-700">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </Avatar>
                </div>
            </div>

            <div class="flex-auto">
                <h5 class="mb-4">Circle</h5>
                <div class="flex items-end gap-2">
                    <Avatar size="xlarge" shape="circle" class="bg-primary ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </Avatar>
                    
                    <Avatar size="large" shape="circle" class="bg-surface-100 dark:bg-surface-800 ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </Avatar>
                    
                    <Avatar shape="circle" class="bg-surface-200 dark:bg-surface-700 ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </Avatar>
                </div>
            </div>

            <div class="flex-auto">
                <h5 class="mb-4">Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <Avatar size="xlarge" class="bg-primary ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </Avatar>
                </OverlayBadge>
            </div>
    </DocsCard>
</template>
```
::

## AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.

::SampleAvatarGroup
::

::DocsCodeSample
#default
```vue
<AvatarGroup>
    <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
    <Avatar image="/images/avatar/asiyajavayant.png" shape="circle" />
    <Avatar image="/images/avatar/onyamalimba.png" shape="circle" />
    <Avatar image="/images/avatar/ionibowcher.png" shape="circle" />
    <Avatar image="/images/avatar/xuxuefeng.png" shape="circle" />
    <Avatar label="+2" shape="circle" />
</AvatarGroup>
```

#full
```vue

<template>
    <div class="card flex justify-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle" />
            <Avatar label="+2" shape="circle" />
        </AvatarGroup>
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