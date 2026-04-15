---
title: Accordion
---

Accordion groups a collection of contents in panels.

## Import

```javascript
// import as component
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
```

## Accessibility

Screen Reader Accordion header elements is a button element and use aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read a header element defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby via the pt property.

## Basic

Accordion is defined using `AccordionPanel`, `AccordionHeader` and `AccordionContent` components. Each `AccordionPanel` must contain a unique `value` property to specify the active item.


::SampleAccordionBasic
::

::DocsCodeSample
```vue
<template>
    <Accordion value="0">
        <AccordionPanel value="0">
            <AccordionHeader>Header I</AccordionHeader>
            <AccordionContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
            <AccordionHeader>Header II</AccordionHeader>
            <AccordionContent>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
            <AccordionHeader>Header III</AccordionHeader>
            <AccordionContent>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
</template>
```
::

## Dynamic
AccordionPanel can be generated dynamically using the standard `v-for directive.`

::SampleAccordionDynamic
::

::DocsCodeSample
```vue
<template>
    
        <Accordion :value="['0']" multiple>
            <AccordionPanel v-for="tab in tabs" :key="tab.value" :value="tab.value">
                <AccordionHeader>{{ tab.title }}</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">{{ tab.content }}</p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    
</template>

<script setup>

const tabs = ref([
    { 
        title: 'Header Dinamis I', 
        content: 'Konten ini di-render menggunakan v-for dari data array.', 
        value: '0' 
    },
    { 
        title: 'Header Dinamis II', 
        content: 'Setiap panel mendapatkan value unik untuk mengontrol status aktifnya.', 
        value: '1' 
    },
    { 
        title: 'Header Dinamis III', 
        content: 'Sangat memudahkan jika Anda menarik data dari database atau API.', 
        value: '2' 
    }
]);
</script>
```
::

## Multiple
Only one tab at a time can be active by default, enabling `multiple` property changes this behavior to allow multiple panels. In this case `value` needs to be an array.

::SampleAccordionMultiple
::

::DocsCodeSample
```vue
<template>
    
        <Accordion :value="['0']" multiple>
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Secara default, panel pertama terbuka. Anda bisa membuka panel lain tanpa menutup panel ini karena mode 'multiple' aktif.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    
</template>
```
::

## Disable
Enabling `disabled` property of an AccordionPanel prevents user interaction.
::SampleAccordionDisable
::

::DocsCodeSample
```vue
<template>
    
        <Accordion :value="['0']" multiple>
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Secara default, panel pertama terbuka. Anda bisa membuka panel lain tanpa menutup panel ini karena mode 'multiple' aktif.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    
</template>
```
::

## Controlled

Panels can be controlled programmatically using `value` property as a model.

::SampleAccordionControlled
::

::DocsCodeSample
```vue

<template>
    
        <div class="flex mb-4 gap-2 justify-end">
            <UButton @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
            <UButton @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
            <UButton @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
        </div>

        <Accordion v-model:value="active">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    
</template>


```
#full
```vue

<template>
    
        <div class="flex mb-4 gap-2 justify-end">
            <UButton @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
            <UButton @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
            <UButton @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
        </div>

        <Accordion v-model:value="active">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    
</template>

<script setup>
import { ref } from 'vue';

const active = ref('0');
</script>
```
::

## Template

Custom content for a header is defined with the default slot. The optional `as` property controls the default container element of a header, for example setting it to a `div` renders a div for the header instead of a button. The `asChild` option enables the headless mode for further customization by passing callbacks and properties to implement your own header.

::SampleAccordionTemplate
::

::DocsCodeSample
```vue

<template>
    
        <Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionPanel value="0">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <UAvatar image="https://primefaces.org/cdn/primevue/images/UAvatar/amyelsner.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                        <UBadge value="3" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <UAvatar image="https://primefaces.org/cdn/primevue/images/UAvatar/onyamalimba.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                        <UBadge value="4" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <UAvatar image="https://primefaces.org/cdn/primevue/images/UAvatar/ionibowcher.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                        <UBadge value="2" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    
</template>

<script setup>
</script>

```
::


## API

### Accordion Props

| Name        | Type                                                               | Default | Description                                                              |
|-------------|--------------------------------------------------------------------|---------|--------------------------------------------------------------------------|
| `value`     | `string \| number \| any[]`{lang="ts"}                             | `null`  | Value of the active panel(s). Use array if `multiple` is enabled.        |
| `multiple`  | `boolean`{lang="ts"}                                               | `false` | When enabled, multiple panels can be expanded at the same time.          |
| `dt`        | `any`{lang="ts"}                                                   | `null`  | It generates scoped CSS variables using design tokens for the component. |
| `pt`        | `PassThrough<AccordionPassThroughOptions<any>>`{lang="ts"}         | `null`  | Used to pass attributes to DOM elements inside the component.            |
| `ptOptions` | `any`{lang="ts"}                                                   | `null`  | Used to configure passthrough(pt) options of the component.              |
| `unstyled`  | `boolean`{lang="ts"}                                               | `false` | When enabled, it removes component related styles in the core.           |

### AccordionPanel Props

| Name       | Type                                                             | Default | Description                                                   |
|------------|------------------------------------------------------------------|---------|---------------------------------------------------------------|
| `value`    | `string \| number`{lang="ts"}                                    | `null`  | Unique value of the panel to specify the active item.         |
| `disabled` | `boolean`{lang="ts"}                                             | `false` | When enabled, prevents user interaction with the panel.       |
| `pt`       | `PassThrough<AccordionPanelPassThroughOptions<any>>`{lang="ts"}  | `null`  | Used to pass attributes to DOM elements inside the component. |

### AccordionHeader Props

| Name      | Type                                                              | Default  | Description                                                                     |
|-----------|-------------------------------------------------------------------|----------|---------------------------------------------------------------------------------|
| `as`      | `string`{lang="ts"}                                               | `'button'`| Controls the default container element of a header (e.g., `'div'`).             |
| `asChild` | `boolean`{lang="ts"}                                              | `false`  | Enables the headless mode for further customization of the header element.      |
| `pt`      | `PassThrough<AccordionHeaderPassThroughOptions<any>>`{lang="ts"}  | `null`   | Used to pass attributes to DOM elements inside the component.                   |

### AccordionContent Props

| Name | Type                                                              | Default | Description                                                   |
|------|-------------------------------------------------------------------|---------|---------------------------------------------------------------|
| `pt` | `PassThrough<AccordionContentPassThroughOptions<any>>`{lang="ts"} | `null`  | Used to pass attributes to DOM elements inside the component. |

---

### Pass Through Options

#### Accordion Pass Through

| Name    | Type                                           | Description                                        |
|---------|------------------------------------------------|----------------------------------------------------|
| `root`  | `AccordionPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `hooks` | `any`{lang="ts"}                               | Used to manage all lifecycle hooks.                |

#### AccordionPanel Pass Through

| Name    | Type                                                | Description                                        |
|---------|-----------------------------------------------------|----------------------------------------------------|
| `root`  | `AccordionPanelPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `hooks` | `any`{lang="ts"}                                    | Used to manage all lifecycle hooks.                |

#### AccordionHeader Pass Through

| Name    | Type                                                 | Description                                        |
|---------|------------------------------------------------------|----------------------------------------------------|
| `root`  | `AccordionHeaderPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the root's DOM element. |
| `hooks` | `any`{lang="ts"}                                     | Used to manage all lifecycle hooks.                |

#### AccordionContent Pass Through

| Name      | Type                                                  | Description                                           |
|-----------|-------------------------------------------------------|-------------------------------------------------------|
| `root`    | `AccordionContentPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the root's DOM element.    |
| `content` | `AccordionContentPassThroughOptionType<T>`{lang="ts"} | Used to pass attributes to the content's DOM element. |
| `hooks`   | `any`{lang="ts"}                                      | Used to manage all lifecycle hooks.                   |