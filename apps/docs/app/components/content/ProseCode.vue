<template>
    <code
        class="rounded-md border border-surface-200 bg-surface-100 leading-none px-1.5 py-1 text-sm font-medium text-surface-800 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-200"
    >
        <slot />
    </code>
</template>

<style scoped>
/* Override Tailwind Typography's default backticks.
  We set content to none to hide the ::before and ::after pseudo-elements.
*/
code::before,
code::after {
    content: none !important;
}
</style>