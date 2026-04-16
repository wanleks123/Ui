<template>
    <DocsCard>
            <div class="flex-auto">
                <h5 class="mb-4">Icon</h5>
                <div class="flex items-end gap-2">
                    <UAvatar size="xlarge" class="bg-primary">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </UAvatar>
                    
                    <UAvatar size="large" class="bg-surface-100 dark:bg-surface-800 ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </UAvatar>
                    
                    <UAvatar class="bg-surface-200 dark:bg-surface-700">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </UAvatar>
                </div>
            </div>

            <div class="flex-auto">
                <h5 class="mb-4">Circle</h5>
                <div class="flex items-end gap-2">
                    <UAvatar size="xlarge" shape="circle" class="bg-primary ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </UAvatar>
                    
                    <UAvatar size="large" shape="circle" class="bg-surface-100 dark:bg-surface-800 ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </UAvatar>
                    
                    <UAvatar shape="circle" class="bg-surface-200 dark:bg-surface-700 ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </UAvatar>
                </div>
            </div>

            <div class="flex-auto">
                <h5 class="mb-4">Badge</h5>
                <UOverlayBadge value="4" severity="danger" class="inline-flex">
                    <UAvatar size="xlarge" class="bg-primary ">
                        <Icon name="ph:user-bold" class="size-1/2" />
                    </UAvatar>
                </UOverlayBadge>
            </div>
    </DocsCard>
</template>