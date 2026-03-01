<script setup lang="ts">
const props = defineProps<{
    text: string
    query: string
}>()

const parts = computed(() => {
    if (!props.query.trim()) return [{ text: props.text, highlight: false }]
    const regex = new RegExp(`(${props.query})`, 'gi')
    return props.text.split(regex).map(part => ({
        text: part,
        highlight: part.toLowerCase() === props.query.toLowerCase()
    }))
})
</script>

<template>
  <span>
    <template v-for="(part, i) in parts" :key="i">
      <mark
          v-if="part.highlight"
          class="group-aria-selected:underline bg-transparent text-sky-600 dark:text-sky-400"
      >{{ part.text }}</mark>
      <template v-else>{{ part.text }}</template>
    </template>
  </span>
</template>