<script lang="ts" setup>
import { ref, nextTick, onMounted, computed } from 'vue'
import { useColorMode, useStorage } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Menu } from './volt'   // Use this if using PrimeVue directly

const props = withDefaults(defineProps<{
    iconClass?: string
    targetId?: string
}>(), {
    targetId: 'page-wrapper'
})

// --- 1. VueUse Configuration ---
const colorMode = useColorMode({
    selector: 'html',
    attribute: 'class',
    storageKey: 'theme',
    modes: {
        dark: 'dark',
        light: '',
    },
})

// --- 2. Safe Preference Reading ---
// Instead of hacking colorMode.store, we read the storage key directly.
// This tells us if the user selected 'auto', 'light', or 'dark'.
const currentPreference = useStorage('theme', 'auto')

// --- State ---
const menu = ref();
const currentTrigger = ref<HTMLElement | null>(null);
const isMounted = ref(false);

// --- Data ---
interface ThemeItem {
    label: string,
    icon: string,
    value: 'auto' | 'light' | 'dark',
}

const items: ThemeItem[] = [
    { label: 'System', icon: 'ph:monitor', value: 'auto' },
    { label: 'Light', icon: 'ph:sun', value: 'light' },
    { label: 'Dark', icon: 'ph:moon', value: 'dark' },
]

// --- Logic ---
onMounted(() => {
    isMounted.value = true;
})

// Active Icon Logic:
// If preference is 'auto', we show the System icon.
// Otherwise, we show the icon matching the current mode.
const activeIcon = computed(() => {
    // If we are in auto mode, show the system icon
    if (currentPreference.value === 'auto') {
        return 'ph:monitor'
    }
    // Otherwise show sun or moon based on the resolved value
    return colorMode.value === 'dark' ? 'ph:moon' : 'ph:sun'
})

const toggle = (event: MouseEvent) => {
    currentTrigger.value = event.currentTarget as HTMLElement;
    menu.value.toggle(event);
};

const changeTheme = (theme: 'light' | 'dark' | 'auto', event: MouseEvent) => {
    // 1. Prevent unnecessary animations
    if (theme === currentPreference.value) return;

    // 2. Browser Support Check
    if (!document.startViewTransition) {
        colorMode.value = theme;
        // Manually update storage if colorMode doesn't catch 'auto' immediately
        currentPreference.value = theme;
        return;
    }

    // 3. Animation Logic
    const triggerBtn = currentTrigger.value || event.currentTarget as HTMLElement;
    const rect = triggerBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(async () => {
        colorMode.value = theme;
        currentPreference.value = theme; // Ensure storage syncs
        await nextTick();
    });

    transition.ready.then(() => {
        // Determine if we are visually going to dark mode
        const isGoingDark = colorMode.value === 'dark';

        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
            {
                clipPath: isGoingDark ? clipPath : [...clipPath].reverse(),
            },
            {
                duration: 500,
                easing: 'ease-in',
                pseudoElement: isGoingDark
                    ? '::view-transition-new(root)'
                    : '::view-transition-old(root)',
            }
        );
    });
}
</script>

<template>
    <div>
        <template v-if="isMounted">
            <span class="sr-only">Select theme</span>
            <button
                aria-controls="overlay_menu"
                aria-haspopup="true"
                class="cursor-pointer relative group flex items-center shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary p-1.5 text-primary-200 hover:text-white transition-colors"
                type="button"
                @click="toggle"
            >
                <span class="absolute -inset-1.5"/>
                <span class="sr-only">Set app theme</span>
                <Icon :icon="activeIcon" class="h-6 w-6 transition-colors" :class="iconClass" />
            </button>
        </template>
        <template v-else>
            <div class="h-9 w-9 bg-gray-200/20 rounded-full animate-pulse mx-1" />
        </template>

        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true">
            <template #item="slotProps">
                <button
                    class="cursor-pointer w-full flex items-center gap-2 px-3 py-2"
                    @click="changeTheme(slotProps.item.value, $event)"
                >
                    <Icon v-if="slotProps.item.icon" :icon="slotProps.item.icon" class="size-5 opacity-75"/>
                    <span class="text-left ml-2 grow">{{ slotProps.item.label }}</span>

                    <Icon
                        v-if="slotProps.item.value === currentPreference"
                        class="shrink-0 text-primary size-5"
                        icon="ph:check"
                    />
                </button>
            </template>
        </Menu>
    </div>
</template>

<style>
/* 1. Disable default cross-fade so we can handle the clip-path manually */
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

/* 2. Default Stacking: New view on top of Old view */
::view-transition-new(root) {
    z-index: 99998;
}
::view-transition-old(root) {
    z-index: 1;
}

/* 3. THE FIX: When switching to Light Mode */
/* The html tag has NO 'dark' class, so the OLD view (which was dark) needs to be on top */
html:not(.dark)::view-transition-old(root) {
    z-index: 99999; /* Higher than new(root) */
}
</style>