---
Tittle:Confirm Dialog
---

ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.

## Import

```javascript
import ConfirmDialog from 'primevue/confirmdialog';
```

## Accessibility

Screen Reader ConfirmDialog component uses alertdialog role along with aria-labelledby referring to the header element however any attribute is passed to the root element so you may use aria-labelledby to override this default behavior. In addition aria-modal is added since focus is kept within the popup. When require method of the $confirm instance is used and a trigger is passed as a parameter, ConfirmDialog adds aria-expanded state attribute and aria-controls to the trigger so that the relation between the trigger and the dialog is defined. Overlay Keyboard Support Key Function tab Moves focus to the next the focusable element within the dialog. shift + tab Moves focus to the previous the focusable element within the dialog. escape Closes the dialog. Buttons Keyboard Support Key Function enter Closes the dialog. space Closes the dialog.

## Basic

ConfirmDialog is displayed by calling the require method of the $confirm instance by passing the options to customize the Dialog. The target attribute is mandatory to align the popup to its referrer.

::SampleConfirmDialogBasic
::
::DocsCodeSample
```vue
<ConfirmDialog></ConfirmDialog>
<Button @click="confirm1()" label="Save" variant="outlined"></Button>
<Button @click="confirm2()" label="Delete" severity="danger" variant="outlined"></Button>
```
#full
```vue
<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1()" label="Save" variant="outlined"></Button>
        <Button @click="confirm2()" label="Delete" severity="danger" variant="outlined"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'ph:exclamation-triangle',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Save'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Danger Zone',
        icon: 'ph:info-circle',
        rejectLabel: 'Cancel',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>
```
::
## Position

The position property of the confirm options specifies the location of the Dialog.

::SampleConfirmDialogPosition
::

::DocsCodeSample
```vue
 <UConfirmDialog group="positioned">
        <template #icon>
            <Icon name="ph:info-bold" class="text-4xl text-primary" />
        </template>
    </UConfirmDialog>

    <div class="card">
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <UButton @click="confirmPosition('left')" label="Left" severity="secondary" style="min-width: 10rem" >
                <template #icon><Icon name="ph:arrow-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('right')" label="Right" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-left" /></template>
            </UButton>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <UButton @click="confirmPosition('topleft')" label="TopLeft" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('top')" label="Top" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down" /></template>
            </UButton>
            <UButton @click="confirmPosition('topright')" label="TopRight" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down-left" /></template>
            </UButton>
        </div>

        <div class="flex flex-wrap justify-center gap-2">
            <UButton @click="confirmPosition('bottomleft')" label="BottomLeft" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('bottom')" label="Bottom" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up" /></template>
            </UButton>
            <UButton @click="confirmPosition('bottomright')" label="BottomRight" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up-left" /></template>
            </UButton>
        </div>
```
#full
```vue
<template>
    <Toast />
     <UConfirmDialog group="positioned">
        <template #icon>
            <Icon name="ph:info-bold" class="text-4xl text-primary" />
        </template>
    </UConfirmDialog>

    <div class="card">
        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <UButton @click="confirmPosition('left')" label="Left" severity="secondary" style="min-width: 10rem" >
                <template #icon><Icon name="ph:arrow-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('right')" label="Right" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-left" /></template>
            </UButton>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-4">
            <UButton @click="confirmPosition('topleft')" label="TopLeft" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('top')" label="Top" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down" /></template>
            </UButton>
            <UButton @click="confirmPosition('topright')" label="TopRight" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-down-left" /></template>
            </UButton>
        </div>

        <div class="flex flex-wrap justify-center gap-2">
            <UButton @click="confirmPosition('bottomleft')" label="BottomLeft" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up-right" /></template>
            </UButton>
            <UButton @click="confirmPosition('bottom')" label="Bottom" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up" /></template>
            </UButton>
            <UButton @click="confirmPosition('bottomright')" label="BottomRight" severity="secondary" style="min-width: 10rem">
                <template #icon><Icon name="ph:arrow-up-left" /></template>
            </UButton>
        </div>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirmPosition = (position) => {
    confirm.require({
        group: 'positioned',
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'ph:info-circle',
        position: position,
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            text: true
        },
        acceptProps: {
            label: 'Save',
            text: true
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
        }
    });
};
</script>
```
::


## Template

Templating allows customizing the message content.

::SampleConfirmDialogTemplate
::

::DocsCodeSample
```vue
<ConfirmDialog group="templating">
    <template #message="slotProps">
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmDialog>
<Button @click="showTemplate()" label="Save"></Button>
```
#full
```vue
<template>
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="showTemplate()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        icon: 'ph:exclamation-circle',
        rejectProps: {
            label: 'Cancel',
            icon: 'ph:times',
            outlined: true,
            size: 'small'
        },
        acceptProps: {
            label: 'Save',
            icon: 'ph:check',
            size: 'small'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>
```
::

## Headles

Templating allows customizing the message content.

::SampleConfirmDialogHeadles
::

::DocsCodeSample
```vue
<ConfirmDialog group="templating">
    <template #message="slotProps">
        <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
            <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
            <p>{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmDialog>
<Button @click="showTemplate()" label="Save"></Button>
```
#full
```vue
<template>
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
                <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
                <p>{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex justify-center">
        <Button @click="showTemplate()" label="Save"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        icon: 'ph:exclamation-circle',
        rejectProps: {
            label: 'Cancel',
            icon: 'ph:times',
            outlined: true,
            size: 'small'
        },
        acceptProps: {
            label: 'Save',
            icon: 'ph:check',
            size: 'small'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>
```
::
## Confirm Dialog

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| group | string | - | Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance. |
| breakpoints | ConfirmDialogBreakpoints | - | Object literal to define widths per screen size. |
| draggable | boolean | true | Enables dragging to change the position using header. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<ConfirmDialogPassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | ConfirmDialogPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| header | ConfirmDialogPassThroughOptionType | Used to pass attributes to the header's DOM element. |
| title | ConfirmDialogPassThroughOptionType | Used to pass attributes to the header title's DOM element. |
| headerActions | ConfirmDialogPassThroughOptionType | Used to pass attributes to the header actions' DOM element. |
| pcCloseButton | ConfirmDialogPassThroughOptionType | Used to pass attributes to the close button's component. |
| content | ConfirmDialogPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| icon | ConfirmDialogPassThroughOptionType | Used to pass attributes to the icon's DOM element. |
| message | ConfirmDialogPassThroughOptionType | Used to pass attributes to the message's DOM element. |
| footer | ConfirmDialogPassThroughOptionType | Used to pass attributes to the footer's DOM element. |
| mask | ConfirmDialogPassThroughOptionType | Used to pass attributes to the mask's DOM element. |
| pcRejectButton | any | Used to pass attributes to the Button component. |
| pcAcceptButton | any | Used to pass attributes to the Button component. |
| hooks | any | Used to manage all lifecycle hooks. |
| transition | ConfirmDialogPassThroughOptionType | Used to control Vue Transition API. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-confirmdialog | Class name of the root element |
| p-confirmdialog-icon | Class name of the icon element |
| p-confirmdialog-message | Class name of the message element |
| p-confirmdialog-reject-button | Class name of the reject button element |
| p-confirmdialog-accept-button | Class name of the accept button element |

### Design Tokens

| Token | CSS Variable | Description |
|-------|--------------|-------------|
| confirmdialog.icon.size | --p-confirmdialog-icon-size | Size of icon |
| confirmdialog.icon.color | --p-confirmdialog-icon-color | Color of icon |
| confirmdialog.content.gap | --p-confirmdialog-content-gap | Gap of content |

