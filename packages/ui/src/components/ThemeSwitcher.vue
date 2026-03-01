<script lang="ts" setup>
import { ref, nextTick, onMounted, computed } from 'vue'
import { useColorMode } from '@vueuse/core'
// We import Icon specifically to ensure it works in a package environment
// If your app registers it globally, you can remove this import.
import { Icon } from '@iconify/vue'
import Menu from './volt/Menu.vue';

const props = withDefaults(defineProps<{
    iconClass?: string
    /**
     * The ID of the main page wrapper to clone for the animation.
     * Default: 'page-wrapper'
     */
    targetId?: string
}>(), {
    targetId: 'page-wrapper'
})

// --- 1. VueUse Color Mode Configuration ---
// This replaces the Nuxt-specific useColorMode
const mode = useColorMode({
    selector: 'html',    // Element to apply the class to
    attribute: 'class',  // Attribute to apply (class="dark")
    initialValue: 'auto',
    modes: {
        // Custom modes if needed, otherwise 'dark' and 'light' are standard
        dark: 'dark',
        light: '', // or 'light' if you use a specific light class
    },
})

// --- State ---
const menu = ref();
const isAnimating = ref(false);
const currentTrigger = ref<HTMLElement | null>(null);
const isMounted = ref(false);

// --- Data ---
// We map VueUse's 'auto' to our UI label 'system'
interface ThemeItem {
    label: string,
    icon: string,
    value: 'auto' | 'light' | 'dark',
}

const items: ThemeItem[] = [
    {label: 'System', icon: 'ph:monitor', value: 'auto'},
    {label: 'Light', icon: 'ph:sun', value: 'light'},
    {label: 'Dark', icon: 'ph:moon', value: 'dark'},
]

// --- Logic ---
onMounted(() => {
    isMounted.value = true;
})

// Helper to determine the active icon based on current mode
const activeIcon = computed(() => {
    return items.find(i => i.value === mode.value)?.icon ?? 'ph:monitor'
})

const toggle = (event: MouseEvent) => {
    currentTrigger.value = event.currentTarget as HTMLElement;
    menu.value.toggle(event);
};

const changeTheme = async (theme: 'light' | 'dark' | 'auto', event: MouseEvent): Promise<void> => {
    // 1. Basic Checks
    if (isAnimating.value) return;
    if (theme === mode.value) return;

    const triggerBtn = currentTrigger.value;
    if (!triggerBtn) return;

    const page = document.getElementById(props.targetId);
    if (!page) {
        // Fallback if ID is missing: just switch theme without animation
        mode.value = theme;
        return;
    }

    isAnimating.value = true;

    // 2. Resolve 'auto' to actual color for the clone
    const resolvedTheme = theme === 'auto'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        : theme;

    // 3. Mark the REAL trigger
    triggerBtn.setAttribute('data-theme-animating', 'true');
    page.classList.add('disable-transitions');

    // 4. Create Deep Clone
    const clone = page.cloneNode(true) as HTMLElement;

    // 5. Find the TWIN trigger
    const cloneTrigger = clone.querySelector('[data-theme-animating="true"]') as HTMLElement;
    const cloneIcon = cloneTrigger?.querySelector('svg, .iconify') as HTMLElement;

    triggerBtn.removeAttribute('data-theme-animating');

    // 6. ID Renaming Loop
    const elementsWithIds = clone.querySelectorAll('[id]');
    elementsWithIds.forEach((el) => {
        const oldId = el.id;
        const newId = `${oldId}-clone`;
        el.id = newId;

        const references = clone.querySelectorAll(`[fill*="#${oldId}"], [stroke*="#${oldId}"], [mask*="#${oldId}"], [filter*="#${oldId}"]`);
        references.forEach((ref) => {
            ['fill', 'stroke', 'mask', 'filter'].forEach((attr) => {
                const val = ref.getAttribute(attr);
                if (val && val.includes(`#${oldId}`)) {
                    ref.setAttribute(attr, val.replace(`#${oldId}`, `#${newId}`));
                }
            });
        });
    });

    // 7. Setup Clone Classes
    clone.classList.remove('disable-transitions');
    clone.classList.add('theme-clone');

    // Apply the resolved theme class to the clone immediately
    if (resolvedTheme === 'dark') {
        clone.classList.add('dark');
        // Ensure we don't have conflicting classes
        clone.classList.remove('light');
    } else {
        clone.classList.remove('dark');
        clone.classList.add('light');
    }

    if (cloneIcon) {
        cloneIcon.style.setProperty('transition', 'transform 0.2s ease-in', 'important');
        cloneIcon.style.transformOrigin = 'center';
    }

    // 8. Geometry Calculation
    const rect = triggerBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
        Math.max(centerX, window.innerWidth - centerX),
        Math.max(centerY, window.innerHeight - centerY)
    );

    // 9. Execute Animation
    clone.style.clipPath = `circle(0px at ${centerX}px ${centerY}px)`;
    document.body.appendChild(clone);

    requestAnimationFrame(() => {
        clone.style.clipPath = `circle(${endRadius}px at ${centerX}px ${centerY}px)`;
        if (cloneIcon) cloneIcon.style.transform = 'scale(0)';
    });

    // 10. Cleanup
    clone.addEventListener('transitionend', async (e) => {
        if (e.target !== clone) return;

        // SWITCH THE REAL THEME HERE
        mode.value = theme;
        await nextTick();

        page.classList.remove('disable-transitions');
        const newIcon = currentTrigger.value?.querySelector('svg, .iconify') as HTMLElement;

        if (newIcon) {
            newIcon.style.transition = 'none';
            newIcon.style.transform = 'scale(0)';
            void newIcon.offsetWidth;
        }

        clone.remove();
        isAnimating.value = false;

        if (newIcon) {
            newIcon.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            newIcon.style.transform = 'scale(1)';
            setTimeout(() => {
                newIcon.style.transition = '';
                newIcon.style.transform = '';
            }, 400);
        }
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

        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" :pt="{ root: 'mt-2' }">
            <template #item="slotProps">
                <button
                    class="cursor-pointer w-full flex items-center gap-2 px-3 py-2"
                    @click="changeTheme(slotProps.item.value, $event)"
                >
                    <Icon v-if="slotProps.item.icon" :icon="slotProps.item.icon" class="size-5 opacity-75"/>
                    <span class="text-left ml-2 grow">{{ slotProps.item.label }}</span>
                    <Icon
                        v-if="slotProps.item.value === mode"
                        class="shrink-0 text-primary size-5"
                        icon="ph:check"
                    />
                </button>
            </template>
        </Menu>
    </div>
</template>

<style>
/* Global styles required for the clone and page wrapper */
.disable-transitions,
.disable-transitions * {
    transition: none !important;
}

.theme-clone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    pointer-events: none;
    transition: clip-path 0.8s ease-in-out;
}
</style>