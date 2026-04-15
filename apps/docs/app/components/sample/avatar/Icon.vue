<template>
    <div class="card p-10">
        <div class="flex flex-wrap gap-8 justify-center">
            <div class="flex-auto text-center">
                <h5 class="mb-4 font-bold">Icon</h5>
                <div class="flex items-center justify-center gap-2">
                    <UAvatar size="xlarge">
                        <Icon name="ph:user-duotone" class="text-2xl flex items-center justify-center" />
                    </UAvatar>
                    
                    <UAvatar size="large" style="background-color: #ece9fc; color: #2a1261">
                        <Icon name="ph:user-bold" />
                    </UAvatar>
                    
                    <UAvatar style="background-color: #dee9fc; color: #1a2551">
                        <Icon name="ph:user" />
                    </UAvatar>
                </div>
            </div>

            <div class="flex-auto text-center">
                <h5 class="mb-4 font-bold">Circle</h5>
                <div class="flex items-center justify-center gap-2">
                    <UAvatar size="xlarge" shape="circle">
                        <Icon name="ph:user-circle-duotone" class="text-2xl" />
                    </UAvatar>
                    
                    <UAvatar size="large" shape="circle" style="background-color: #ece9fc; color: #2a1261">
                        <Icon name="ph:user-circle-bold" />
                    </UAvatar>
                    
                    <UAvatar shape="circle" style="background-color: #dee9fc; color: #1a2551">
                        <Icon name="ph:user-circle" />
                    </UAvatar>
                </div>
            </div>

            <div class="flex-auto text-center">
                <h5 class="mb-4 font-bold">Badge</h5>
                <OverlayBadge value="4" severity="danger" class="inline-flex">
                    <UAvatar size="xlarge" shape="circle">
                        <Icon name="ph:bell-duotone" class="text-2xl" />
                    </UAvatar>
                </OverlayBadge>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';

// Alias agar sesuai dengan template
const UAvatar = Avatar;

// Catatan: Pastikan modul @nuxt/icon sudah terinstal di nuxt.config.ts
// Komponen <Icon /> akan otomatis tersedia secara global di Nuxt.
</script>