---
title: DataTable
---

DataTable displays data in tabular format with a customized paginator and unstyled Tailwind integration.

## Import

This component is a custom wrapper around the standard PrimeVue DataTable, utilizing Tailwind CSS for styling.

```javascript
import DataTable from '@/components/DataTable.vue';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
```

## Accessibility

Screen Reader DataTable uses a native table element. Default role of the table is `table`. Header, body and footer elements use `rowgroup`, rows use `row` role, header cells have `columnheader` and body cells use `cell` roles. The custom wrapper maintains all native accessibility features while providing enhanced focus states via Tailwind CSS.

## Basic

DataTable requires a `value` as data to display and `Column` components as children. The unstyled theme is automatically applied via the internal `theme` configuration.

::DocsCard
    ::UDataTable{:value="products" tableStyle="min-width: 50rem"}
        ::UColumn{field="code" header="Code"}
        ::
        ::UColumn{field="name" header="Name"}
        ::
        ::UColumn{field="category" header="Category"}
        ::
        ::UColumn{field="quantity" header="Quantity"}
        ::
    ::
::

::DocsCodeSample
```vue
<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
```
::

## Paginator

The custom wrapper features a specialized `#paginatorcontainer` using `SecondaryButton` components and localized icons. Enable it by adding the `paginator` prop.

::DocsCard
    ::UDataTable{:value="products" paginator :rows="5" tableStyle="min-width: 50rem"}
        ::UColumn{field="code" header="Code"}
        ::
        ::UColumn{field="name" header="Name"}
        ::
        ::UColumn{field="category" header="Category"}
        ::
    ::
::

::DocsCodeSample
#default
```vue
<DataTable :value="products" paginator :rows="5">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
</DataTable>
```
::

## Column Group

Columns can be grouped within a `Row` component. The custom theme ensures proper border and background rendering for complex header structures.

::DocsCard
    ::UDataTable{:value="sales" tableStyle="min-width: 50rem"}
        ::UColumnGroup{type="header"}
            ::URow
                ::UColumn{header="Product" :rowspan="3"}
                ::
                ::UColumn{header="Sale Rate" :colspan="4"}
                ::
            ::
            ::URow
                ::UColumn{header="Sales" :colspan="2"}
                ::
                ::UColumn{header="Profits" :colspan="2"}
                ::
            ::
        ::
        ::UColumn{field="product"}
        ::
        ::UColumn{field="lastYearSale"}
        ::
        ::UColumn{field="thisYearSale"}
        ::
    ::
::

::DocsCodeSample
```vue
<DataTable :value="sales">
    <ColumnGroup type="header">
        <Row>
            <Column header="Product" :rowspan="3" />
            <Column header="Sale Rate" :colspan="4" />
        </Row>
        <Row>
            <Column header="Sales" :colspan="2" />
            <Column header="Profits" :colspan="2" />
        </Row>
    </ColumnGroup>
    <Column field="product" />
    <Column field="lastYearSale" />
    <Column field="thisYearSale" />
</DataTable>
```
::

## Striped Rows

The `stripedRows` property adds alternating background colors to rows, styled via the internal `tbody` pass-through configuration.

::DocsCard
    ::UDataTable{:value="products" stripedRows tableStyle="min-width: 50rem"}
        ::UColumn{field="code" header="Code"}
        ::
        ::UColumn{field="name" header="Name"}
        ::
    ::
::

::DocsCodeSample
```vue
<DataTable :value="products" stripedRows />
```
::

## Loading State

The wrapper includes a custom `SpinnerIcon` that animates automatically when the `loading` prop is active, providing a consistent feedback loop.

::DocsCodeSample
#full
```vue
<script setup lang="ts">
import { ref } from 'vue';

const products = ref([...]);
const loading = ref(true);
</script>

<template>
    <DataTable :value="products" :loading="loading">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
    </DataTable>
</template>
```
::

## API

### Props

Inherits all properties from **PrimeVue DataTable**.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `any[]` | `null` | Array of objects to display. |
| `paginator` | `boolean` | `false` | Enables the custom paginator container. |
| `rows` | `number` | `0` | Number of rows to display per page. |
| `loading` | `boolean` | `false` | Displays the custom spinner overlay. |
| `selectionMode` | `"single" \| "multiple"` | `null` | Specifies the row selection mode. |
| `stripedRows` | `boolean` | `false` | Whether to display alternating row colors. |
| `showGridlines` | `boolean` | `false` | Whether to show grid lines between cells. |

### Methods

The following methods are exposed via `defineExpose`:

| Name | Parameters | Description |
|------|------------|-------------|
| `exportCSV` | `-` | Exports the table data to CSV format. |

### Pass Through Options

The custom theme is pre-applied. You can extend it using the `pt` prop which merges with internal styles.

| Name | Type | Description |
|------|------|-------------|
| `root` | `any` | Attributes for the root container. |
| `header` | `any` | Attributes for the table header. |
| `table` | `any` | Attributes for the table element. |
| `column` | `any` | Attributes for the Column components. |
| `pcPaginator` | `any` | Attributes for the Paginator component. |
```