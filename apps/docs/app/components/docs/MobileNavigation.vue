<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild
} from '@headlessui/vue'

const isOpen = ref(false)
const route = useRoute()

const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)

/**
 * Replaces 'CloseOnNavigation'.
 * We watch the fullPath (path + query + hash).
 * If it changes, we close the menu.
 */
watch(() => route.fullPath, () => {
    close()
})

/**
 * Handle clicks on links.
 * If the user clicks a link to the page they are already on,
 * the watcher won't trigger, so we close it manually.
 */
function onLinkClick(event: MouseEvent) {
    const link = event.currentTarget as HTMLAnchorElement
    const href = link.getAttribute('href')

    if (href === route.fullPath) {
        close()
    }
}
</script>

<template>
    <div>
        <button
            type="button"
            class="relative"
            aria-label="Open navigation"
            @click="open"
        >
            <Icon name="ph:list" class="h-6 w-6 stroke-surface-500" />
        </button>

        <TransitionRoot :show="isOpen" as="template">
            <Dialog
                @close="close"
                class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-surface-900/50 pr-10 backdrop-blur-sm lg:hidden"
            >
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 -translate-x-full"
                    enter-to="opacity-100 translate-x-0"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100 translate-x-0"
                    leave-to="opacity-0 -translate-x-full"
                >
                    <DialogPanel class="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 sm:px-6 dark:bg-surface-900">
                        <div class="flex items-center">
                            <button
                                type="button"
                                aria-label="Close navigation"
                                @click="close"
                            >
                                <Icon name="ph:x" class="h-6 w-6 stroke-surface-500" />
                            </button>

                            <NuxtLink to="/" class="ml-6" aria-label="Home page">
                                <Logomark class="h-9 w-9" />
                            </NuxtLink>
                        </div>

                        <DocsNavigation
                            class="mt-5 px-1"
                            @link-click="onLinkClick"
                        />
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>
    </div>
</template>