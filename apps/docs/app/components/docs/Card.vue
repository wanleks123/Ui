<script lang="ts">
</script>

<template>
    <div class="py-3 not-prose">
        <UCard>
            <template #content>
                <div class="flex justify-center items-center flex-wrap gap-4 w-full overflow-hidden">
                    <slot />
                </div>
            </template>
        </UCard>
    </div>
</template>