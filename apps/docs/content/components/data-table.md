---
title: DataTable
---

DataTable displays data in tabular format.

## Import

```javascript
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
```

## Accessibility

Screen Reader DataTable uses a table element whose attributes can be extended with the tableProps option. Default role of the table is `table`. Header, body and footer elements use `rowgroup`, rows use `row` role, header cells have `columnheader` and body cells use `cell` roles. Sortable headers utilize `aria-sort`. Built-in selection components use `checkbox` and `radiobutton`. When a row is selected, `aria-selected` is set to `true`.

### Keyboard Support
| Key | Function |
|-----|----------|
| **tab** | Moves through the headers or elements inside popups. |
| **enter** | Sorts the column or activates buttons. |
| **space** | Sorts the column or toggles selection. |
| **arrow keys** | Navigates through rows. |
| **home / end** | Moves focus to the first or last row. |

## Basic

DataTable requires a `value` as data to display and `Column` components as children.

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

## Column Group

Columns can be grouped within a `Row` component and groups can be displayed within a `ColumnGroup` component using the `type` property (header or footer).

::DocsCodeSample
#default
```vue
<DataTable :value="sales" tableStyle="min-width: 50rem">
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

## Dynamic Columns

Columns can be created programmatically by iterating over a collection.

::DocsCard
    ::UDataTable{:value="products" tableStyle="min-width: 50rem"}
        ::UColumn{v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"}
        ::
    ::
::

::DocsCodeSample
#default
```vue
<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
</DataTable>
```
::

## Striped Rows

Enabling `stripedRows` displays alternating colors for rows.

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

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `any[]`{lang="ts"} | `null` | An array of objects to display. |
| `dataKey` | `string`{lang="ts"} | `null` | Name of the field that uniquely identifies a record. |
| `rows` | `number`{lang="ts"} | `0` | Number of rows to display per page. |
| `paginator` | `boolean`{lang="ts"} | `false` | When specified, enables pagination. |
| `lazy` | `boolean`{lang="ts"} | `false` | Defines if data is loaded in lazy manner. |
| `loading` | `boolean`{lang="ts"} | `false` | Displays a loader to indicate data load. |
| `selectionMode` | `"single" \| "multiple"`{lang="ts"} | `null` | Specifies the selection mode. |
| `reorderableColumns` | `boolean`{lang="ts"} | `false` | Enables column reordering with drag and drop. |
| `showGridlines` | `boolean`{lang="ts"} | `false` | Whether to show grid lines between cells. |
| `stripedRows` | `boolean`{lang="ts"} | `false` | Whether to display alternating row colors. |
| `size` | `"small" \| "large"`{lang="ts"} | `null` | Defines the size of the table. |

### Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| `root` | `DataTablePassThroughOptionType`{lang="ts"} | Attributes for the root element. |
| `header` | `DataTablePassThroughOptionType`{lang="ts"} | Attributes for the header element. |
| `table` | `DataTablePassThroughOptionType`{lang="ts"} | Attributes for the table element. |
| `tbody` | `DataTablePassThroughOptionType`{lang="ts"} | Attributes for the body element. |
| `footer` | `DataTablePassThroughOptionType`{lang="ts"} | Attributes for the footer element. |