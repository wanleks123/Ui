
<template>
    <DocsCard>
        <div class="flex-auto">
            <h5>Label</h5>
            <UAvatar label="P" class="mr-2 " size="xlarge" />
            <UAvatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" />
            <UAvatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <UAvatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <UAvatar label="V" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
            <UAvatar label="U" class="mr-2" style="background-color: #dee9fc; color: #1a2551" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <UOverlayBadge value="4" severity="danger" class="inline-flex">
                <UAvatar label="U" size="xlarge" />
            </UOverlayBadge>
        </div>
    </DocsCard>
</template>

<script setup>
import { DocsCard } from '#components';


</script>
