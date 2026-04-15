---
title: Avatar
---

Avatar represents people using icons, labels and images.

## Import

```javascript
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup'; // Optional for grouping
```

## Accessibility

Screen Reader Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like `img` along with `aria-labelledby` or `aria-label` to describe the component. In case avatars need to be tabbable, `tabindex` can be added as well to implement custom key handlers.

## AvatarGroup

Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.

::SampleAvatarGroup
::

::DocsCodeSample
#default
```vue
<template>
    <DocsCard>
    <UAvatarGroup class="flex items-center -space-x-4 pl-4">
      <UAvatar 
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" 
        shape="circle" 
        size="xlarge" 
        
      />
      <UAvatar 
        image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" 
        shape="circle" 
        size="xlarge" 
        
      />
      <UAvatar 
        image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" 
        shape="circle" 
        size="xlarge" 
        
      />
      <UAvatar 
        image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" 
        shape="circle" 
        size="xlarge" 
        
      />
      <UAvatar 
        image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" 
        shape="circle" 
        size="xlarge" 
        
      />
      <UAvatar 
        label="+2" 
        shape="circle" 
        size="xlarge" 
        
        style="background-color: #9c27b0; color: #ffffff" 
      />
    </UAvatarGroup>
  </DocsCard>
</template>

<script setup>

</script>
```

## Icon

A font icon is displayed as an Avatar with the icon property. Di sini kita menggunakan integrasi **Nuxt Icon**.

::SampleAvatarIcon
::

::DocsCodeSample
#default
```vue
<Avatar size="xlarge">
    <Icon name="ph:user" />
</Avatar>

<Avatar size="large" style="background-color: #ece9fc; color: #2a1261">
    <Icon name="ph:user" />
</Avatar>
```

#full
```vue
<template>
    <div class="card flex flex-wrap gap-8 justify-center">
        <div class="flex-auto text-center">
            <h5 class="mb-4">Icon</h5>
            <Avatar size="xlarge" class="mr-2"><Icon name="ph:user" /></Avatar>
            <Avatar size="large" class="mr-2" style="background-color: #ece9fc"><Icon name="ph:user" /></Avatar>
            <Avatar style="background-color: #dee9fc"><Icon name="ph:user" /></Avatar>
        </div>

        <div class="flex-auto text-center">
            <h5 class="mb-4">Circle</h5>
            <Avatar size="xlarge" shape="circle" class="mr-2"><Icon name="ph:user" /></Avatar>
            <Avatar size="large" shape="circle" class="mr-2" style="background-color: #ece9fc"><Icon name="ph:user" /></Avatar>
            <Avatar shape="circle" style="background-color: #dee9fc"><Icon name="ph:user" /></Avatar>
        </div>
    </div>
</template>
```
::

## Image

Use the image property to display an image as an Avatar.

::DocsCard
  ::div{.flex.items-end.gap-4}
    ::UAvatar{image="/images/avatar/amyelsner.png" size="xlarge" shape="circle"}
    ::
    ::UOverlayBadge{value="4" severity="danger"}
      ::UAvatar{image="[https://primefaces.org/cdn/primevue/images/organization/walter.jpg](https://primefaces.org/cdn/primevue/images/organization/walter.jpg)" size="xlarge"}
      ::
    ::
  ::
::

::DocsCodeSample
#default
```vue
<Avatar image="/images/avatar/amyelsner.png" size="xlarge" shape="circle" />

<OverlayBadge value="4" severity="danger">
    <Avatar image="/images/avatar/walter.jpg" size="xlarge" />
</OverlayBadge>
```
::

## Label

A letter Avatar is defined with the label property.

::DocsCard
  ::div{.flex.items-center.gap-4}
    ::UAvatar{label="P" size="xlarge"}
    ::
    ::UAvatar{label="V" size="large" shape="circle" style="background-color: #ece9fc; color: #2a1261"}
    ::
    ::UOverlayBadge{value="4" severity="danger"}
      ::UAvatar{label="U" size="xlarge"}
      ::
    ::
  ::
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