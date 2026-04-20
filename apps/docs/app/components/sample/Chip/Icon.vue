<template>
    <DocsCard class="flex flex-wrap gap-2">
        <UChip label="Apple">
            <template #icon>
                <Icon name="ph:apple-logo" />
            </template>
        </UChip>

        <UChip label="Facebook">
            <template #icon>
                <Icon name="ph:facebook-logo" />
            </template>
        </UChip>

        <UChip label="Google">
            <template #icon>
                <Icon name="ph:google-logo" />
            </template>
        </UChip>

        <UChip label="Microsoft" removable>
            <template #icon>
                <Icon name="ph:microsoft-logo" />
            </template>
        </UChip>
        
        <UChip label="GitHub" removable>
            <template #icon>
                <Icon name="ph:github-logo" />
            </template>
            <template #removeicon="{ removeCallback, keydownCallback }">
                <Icon 
                    name="ph:minus-circle" 
                    class="cursor-pointer"
                    @click="removeCallback" 
                    @keydown="keydownCallback" 
                />
            </template>
        </UChip>
    </DocsCard>
</template>