<script lang="ts" setup>
import { ref, nextTick, onMounted, computed } from 'vue'
import { useColorMode, useStorage } from '@vueuse/core'
import { Menu } from './volt' // Assuming this is your UI library

const props = withDefaults(defineProps<{
    iconClass?: string
    // Add a unique ID to prevent ViewTransition name collisions
    // if you render this component twice (e.g. Mobile + Desktop)
    uid?: string 
}>(), {
    iconClass: 'h-5 w-5 transition-colors',
    uid: 'desktop-theme-switcher' 
})

// --- 1. Configuration ---
const colorMode = useColorMode({
    selector: 'html',
    attribute: 'class',
    storageKey: 'theme',
    modes: { dark: 'dark', light: '' },
})

const currentPreference = useStorage('theme', 'auto')

// --- 2. State & Types ---
// Type the Menu component reference (adjust 'any' if you have the Volt type)
const menu = ref<InstanceType<typeof Menu> | null>(null);
const currentTrigger = ref<HTMLElement | null>(null);
const isMounted = ref(false);

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

onMounted(() => {
    isMounted.value = true;
})

const activeIcon = computed(() => {
    if (currentPreference.value === 'auto') return 'ph:monitor'
    return colorMode.value === 'dark' ? 'ph:moon' : 'ph:sun'
})

// --- 3. Logic ---
const toggle = (event: MouseEvent) => {
    currentTrigger.value = event.currentTarget as HTMLElement;
    menu.value?.toggle(event);
};

const changeTheme = (theme: 'light' | 'dark' | 'auto', event: MouseEvent) => {
    if (theme === currentPreference.value) return;

    // Fallback for browsers without View Transitions
    if (!document.startViewTransition) {
        colorMode.value = theme;
        currentPreference.value = theme;
        return;
    }

    // Geometry Logic
    const triggerBtn = currentTrigger.value || event.currentTarget as HTMLElement;
    const rect = triggerBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    );

    // Execute Transition
    const transition = document.startViewTransition(async () => {
        colorMode.value = theme;
        currentPreference.value = theme;
        await nextTick();
    });

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
            { clipPath: clipPath },
            {
                duration: 500,
                easing: 'ease-in',
                pseudoElement: '::view-transition-new(root)',
            }
        );
    });
}
</script>

<template>
    <div>
        <ClientOnly>
            <template #fallback>
                <div class="h-8 w-8 bg-surface-200 dark:bg-surface-800 rounded-full animate-pulse" />
            </template>
            
            <button
                aria-controls="overlay_menu"
                aria-haspopup="true"
                class="cursor-pointer relative group flex items-center shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary p-1.5 text-primary-200 hover:text-white"
                type="button"
                @click="toggle"
                @mousedown.prevent
            >
                <span class="sr-only">Set app theme</span>
                <span 
                    class="block" 
                    :style="{ 'view-transition-name': `theme-icon-${uid}` }"
                >
                     <Icon :name="activeIcon" :class="iconClass" />
                </span>
            </button>
        </ClientOnly>

        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true">
            <template #item="slotProps">
                <button
                    class="cursor-pointer w-full flex items-center gap-2 px-3 py-2 text-sm text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-md transition-colors"
                    @click="changeTheme(slotProps.item.value, $event)"
                >
                    <Icon v-if="slotProps.item.icon" :name="slotProps.item.icon" class="size-4 opacity-75"/>
                    <span class="text-left ml-2 grow">{{ slotProps.item.label }}</span>
                    <Icon
                        v-if="slotProps.item.value === currentPreference"
                        class="shrink-0 text-sky-500 size-4"
                        name="ph:check"
                    />
                </button>
            </template>
        </Menu>
    </div>
</template>

<style>
/* We must dynamically target the unique ID we generated in the template.
   Since we can't use v-bind in global CSS, we use a wildcard selector 
   that targets any element starting with 'theme-icon-'.
*/

/* 1. Disable Default Fade for Root (The Wave Effect) */
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

/* Ensure the new view sits on top */
::view-transition-new(root) {
    z-index: 9999;
}
::view-transition-old(root) {
    z-index: 1;
}

/* 2. Icon Animation */
/* Target any view-transition named 'theme-icon-...' */
::view-transition-old(*),
::view-transition-new(*) {
    /* Only apply animation if the name starts with theme-icon */
    animation-timing-function: ease-in-out; 
}

/* Specific animations for our icon pattern */
[style*="view-transition-name: theme-icon-"] {
    /* This serves as a marker selector if needed */
}

/* We have to use the global wildcards for the keyframes because 
   CSS doesn't allow selecting pseudo-elements based on attribute selectors easily. 
   Ideally, your project has global CSS for this. 
   
   If you cannot put this in global CSS, keeps your existing @keyframes logic
   but be aware that it applies to the specific name.
*/

::view-transition-old(theme-icon-desktop-theme-switcher) {
    animation: icon-out 0.2s ease-in forwards;
}

::view-transition-new(theme-icon-desktop-theme-switcher) {
    animation: icon-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s forwards;
    opacity: 0;
}

@keyframes icon-out {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0); }
}

@keyframes icon-in {
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1; transform: scale(1); }
}
</style>