<script lang="ts" setup>
import { ref, nextTick, onMounted, computed } from 'vue'
import { useColorMode, useStorage } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Menu } from './volt'

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
const currentPreference = useStorage('theme', 'auto')

// --- State ---
const menu = ref();
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
    if (currentPreference.value === 'auto') {
        return 'ph:monitor'
    }
    return colorMode.value === 'dark' ? 'ph:moon' : 'ph:sun'
})

const toggle = (event: MouseEvent) => {
    currentTrigger.value = event.currentTarget as HTMLElement;
    menu.value.toggle(event);
};

const changeTheme = (theme: 'light' | 'dark' | 'auto', event: MouseEvent) => {
    if (theme === currentPreference.value) return;

    if (!document.startViewTransition) {
        colorMode.value = theme;
        currentPreference.value = theme;
        return;
    }

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
        currentPreference.value = theme;
        await nextTick();
    });

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
            {
                clipPath: clipPath,
            },
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
        <template v-if="isMounted">
            <span class="sr-only">Select theme</span>
            <button
                aria-controls="overlay_menu"
                aria-haspopup="true"
                class="cursor-pointer relative group flex items-center shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary p-1.5 text-primary-200 hover:text-white transition-all"
                type="button"
                @click="toggle"
            >
                <span class="sr-only">Set app theme</span>
                <span class="theme-icon-wrapper block h-6 w-6">
                     <Icon :icon="activeIcon" class="h-6 w-6 transition-colors" :class="iconClass" />
                </span>
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
/* ---------------------------------------------------------
   1. Root Wave Animation (Constant Direction, No Blink)
   --------------------------------------------------------- */
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-new(root) {
    z-index: 2147483646;
}
::view-transition-old(root) {
    z-index: 1;
}

/* ---------------------------------------------------------
   2. Icon Animation (Sequential: Out then In)
   --------------------------------------------------------- */

/* Define the view transition name */
.theme-icon-wrapper {
    view-transition-name: theme-icon;
}

/* STEP 1: OLD ICON
   Effect: Scales down and fades out immediately.
   Duration: 0.2s
*/
::view-transition-old(theme-icon) {
    animation: icon-out 0.2s ease-in forwards;
}

/* STEP 2: NEW ICON
   Effect: Scales up and fades in.
   Duration: 0.3s
   Delay: 0.2s (Waits for old icon to finish)
   Opacity: 0 (Hidden while waiting)
*/
::view-transition-new(theme-icon) {
    animation: icon-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s forwards;
    opacity: 0; /* IMPORTANT: Hides the icon during the 0.2s delay */
}

@keyframes icon-out {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0);
    }
}

@keyframes icon-in {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>