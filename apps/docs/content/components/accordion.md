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

::DocsCard

::UAccordion{value="0"}

::UAccordionPanel{value="0"}
::UAccordionHeader
Header I
::
::UAccordionContent

\<p class="m-0"\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\</p\>
::
::

::UAccordionPanel{value="1"}
::UAccordionHeader
Header II
::
::UAccordionContent

\<p class="m-0"\>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.\</p\>
::
::

::UAccordionPanel{value="2"}
::UAccordionHeader
Header III
::
::UAccordionContent

\<p class="m-0"\>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.\</p\>
::
::

::

::

::DocsCodeSample
\#default

```vue
<Accordion value="0">
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">Lorem ipsum dolor sit amet...</p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">Sed ut perspiciatis unde omnis...</p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
            <p class="m-0">At vero eos et accusamus...</p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

::

## Controlled

Panels can be controlled programmatically using `value` property as a model.

::DocsCard

\<div class="flex mb-4 gap-2 justify-end"\>
::UButton{rounded label="1" outlined}::
::UButton{rounded label="2"}::
::UButton{rounded label="3" outlined}::
\</div\>

::UAccordion{value="1"}

::UAccordionPanel{value="0"}
::UAccordionHeader
Header I
::
::UAccordionContent

\<p class="m-0"\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\</p\>
::
::

::UAccordionPanel{value="1"}
::UAccordionHeader
Header II
::
::UAccordionContent

\<p class="m-0"\>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\</p\>
::
::

::UAccordionPanel{value="2"}
::UAccordionHeader
Header III
::
::UAccordionContent

\<p class="m-0"\>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.\</p\>
::
::

::

::

::DocsCodeSample
\#default

```vue
<Accordion v-model:value="active">
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">Content I</p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">Content II</p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

::

## Disabled

Enabling `disabled` property of an `AccordionPanel` prevents user interaction.

::DocsCard

::UAccordion{:value="['0']" multiple}

::UAccordionPanel{value="0"}
::UAccordionHeader
Header I
::
::UAccordionContent

\<p class="m-0"\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\</p\>
::
::

::UAccordionPanel{value="1"}
::UAccordionHeader
Header II
::
::UAccordionContent

\<p class="m-0"\>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\</p\>
::
::

::UAccordionPanel{value="2"}
::UAccordionHeader
Header III
::
::UAccordionContent

\<p class="m-0"\>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.\</p\>
::
::

::UAccordionPanel{value="3" disabled}
::UAccordionHeader
Header IV (Disabled)
::
::

::

::

::DocsCodeSample
\#default

```vue
<Accordion :value="['0']" multiple>
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">Content I</p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="3" disabled>
        <AccordionHeader>Header IV</AccordionHeader>
    </AccordionPanel>
</Accordion>
```

::

## Dynamic

`AccordionPanel` can be generated dynamically using the standard `v-for` directive.

::DocsCard

::UAccordion{value="0"}

::UAccordionPanel{value="0"}
::UAccordionHeader
Title 1
::
::UAccordionContent

\<p class="m-0"\>Content 1\</p\>
::
::

::UAccordionPanel{value="1"}
::UAccordionHeader
Title 2
::
::UAccordionContent

\<p class="m-0"\>Content 2\</p\>
::
::

::UAccordionPanel{value="2"}
::UAccordionHeader
Title 3
::
::UAccordionContent

\<p class="m-0"\>Content 3\</p\>
::
::

::

::

::DocsCodeSample
\#default

```vue
<Accordion value="0">
    <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
        <AccordionHeader>{{ tab.title }}</AccordionHeader>
        <AccordionContent>
            <p class="m-0">{{ tab.content }}</p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

::

## Multiple

Only one tab at a time can be active by default, enabling `multiple` property changes this behavior to allow multiple panels.

::DocsCard

::UAccordion{:value="['0', '1']" multiple}

::UAccordionPanel{value="0"}
::UAccordionHeader
Header I
::
::UAccordionContent

\<p class="m-0"\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\</p\>
::
::

::UAccordionPanel{value="1"}
::UAccordionHeader
Header II
::
::UAccordionContent

\<p class="m-0"\>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\</p\>
::
::

::UAccordionPanel{value="2"}
::UAccordionHeader
Header III
::
::UAccordionContent

\<p class="m-0"\>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.\</p\>
::
::

::

::

## Template

Custom content for a header is defined with the default slot.

::DocsCard

::UAccordion{value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus"}

::UAccordionPanel{value="0"}
::UAccordionHeader
\<span class="flex items-center gap-2 w-full"\>
\<UAvatar image="[https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png](https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png)" shape="circle" /\>
\<span class="font-bold whitespace-nowrap"\>Amy Elsner\</span\>
\<UBadge value="3" class="ml-auto mr-2" /\>
\</span\>
::
::UAccordionContent

\<p class="m-0"\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\</p\>
::
::

::UAccordionPanel{value="1"}
::UAccordionHeader
\<span class="flex items-center gap-2 w-full"\>
\<UAvatar image="[https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png](https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png)" shape="circle" /\>
\<span class="font-bold whitespace-nowrap"\>Onyama Limba\</span\>
\<UBadge value="4" class="ml-auto mr-2" /\>
\</span\>
::
::UAccordionContent

\<p class="m-0"\>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\</p\>
::
::

::UAccordionPanel{value="2"}
::UAccordionHeader
\<span class="flex items-center gap-2 w-full"\>
\<UAvatar image="[https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png](https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png)" shape="circle" /\>
\<span class="font-bold whitespace-nowrap"\>Ioni Bowcher\</span\>
\<UBadge value="2" class="ml-auto mr-2" /\>
\</span\>
::
::UAccordionContent

\<p class="m-0"\>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.\</p\>
::
::

::

::

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `null \| string \| number \| any[]`{lang="ts"} | `null` | Value of the active panel. |
| `multiple` | `boolean`{lang="ts"} | `false` | Enable multiple active panels. |
| `lazy` | `boolean`{lang="ts"} | `false` | When enabled, hidden tabs are not rendered. |
| `expandIcon` | `string`{lang="ts"} | `null` | Icon of a collapsed tab. |
| `collapseIcon` | `string`{lang="ts"} | `null` | Icon of an expanded tab. |
| `unstyled` | `boolean`{lang="ts"} | `false` | Removes component styles. |

### Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| `root` | `AccordionPassThroughOptionType`{lang="ts"} | Attributes for the root element. |
| `hooks` | `any`{lang="ts"} | Lifecycle hooks management. |

