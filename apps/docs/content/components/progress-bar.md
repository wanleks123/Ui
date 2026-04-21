---
Tittle: Progress Bar
---

ProgressBar is a process status indicator.

## Import

```javascript
import ProgressBar from 'primevue/progressbar';
```

## Accessibility

Screen Reader ProgressBar components uses progressbar role along with aria-valuemin , aria-valuemax and aria-valuenow attributes. Value to describe the component can be defined using aria-labelledby and aria-label props. Keyboard Support Not applicable.

```vue
<span id="label_status" />
<ProgressBar aria-labelledby="label_status" />

<ProgressBar aria-label="Status" />
```

## Basic

ProgressBar is used with the value property.

::SampleProgressBarBasic
::

::DocsCodeSample
```vue
<ProgressBar :value="50"></ProgressBar>
```
::
## Dynamic

Value is reactive so updating it dynamically changes the bar as well.

::SampleProgressBarDynamic
::

::DocsCodeSample
```vue
<ProgressBar :value="value"></ProgressBar>
```

#full

```vue
<template>
    <div class="card">
        <Toast></Toast>
        <ProgressBar :value="value1" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "primevue/usetoast";

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const toast = useToast();
const value1 = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
            toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};
</script>
```
::

## Indeterminate

For progresses with no value to track, set the mode property to indeterminate .

::SampleProgressBarIndeterminate
::

::DocsCodeSample
```vue
<ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
```

#full

```vue
<template>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
</template>

<script setup>

</script>
```
::

## Template

Custom content inside the ProgressBar is defined with the default slot.

::SampleProgressBarTemplate
::

::DocsCodeSample
```vue
<ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(40);
</script>
```
::

