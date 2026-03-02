<script setup lang="ts">
const route = useRoute()
const isHomePage = computed(() => route.path === '/')

// --- Scroll Logic ---
const isScrolled = ref(false)

function onScroll() {
    isScrolled.value = window.scrollY > 0
}

onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, {passive: true})
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <div class="flex w-full flex-col">
        <header
            :class="[
                'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-surface-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none',
                isScrolled
                    ? 'dark:bg-surface-900/95 dark:backdrop-blur-sm dark:[@supports(backdrop-filter:blur(0))]:bg-surface-900/75'
                    : 'dark:bg-transparent'
            ]"
        >
            <div class="mr-6 flex lg:hidden">
                <DocsMobileNavigation/>
            </div>

            <div class="relative flex grow basis-0 items-center">
                <NuxtLink to="/" aria-label="Home page">
                    <Logomark class="h-9 w-9 lg:hidden"/>
                    <Logo class="hidden h-9 w-auto fill-surface-700 lg:block dark:fill-sky-100"/>
                </NuxtLink>
            </div>

            <div class="-my-5 mr-6 sm:mr-8 md:mr-0">
                <DocsSearch/>
            </div>

            <div class="relative flex items-center basis-0 justify-end gap-6 md:grow">
                <UThemeSwitcher icon-class="text-surface-800 dark:text-primary-100 group-hover:scale-125" />
                <NuxtLink to="https://git.unimma.ac.id/unimma/ui" target="_blank" class="group shrink-0 flex items-center p-1.5" aria-label="GitHub">
                    <UGitUnimma class="size-6 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </NuxtLink>
            </div>
        </header>

        <Transition
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="opacity-0 -translate-y-10 max-h-0"
            enter-to-class="opacity-100 translate-y-0 max-h-[500px]"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0 max-h-[500px]"
            leave-to-class="opacity-0 -translate-y-10 max-h-0"
        >
            <div v-if="isHomePage">
                <DocsHero />
            </div>
        </Transition>
        <div class="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
            <div class="hidden lg:relative lg:block lg:flex-none">
                <div class="absolute inset-y-0 right-0 w-[50vw] bg-surface-50 dark:hidden"/>
                <div
                    class="absolute top-16 right-0 bottom-0 hidden h-12 w-px bg-linear-to-t from-surface-800 dark:block"/>
                <div class="absolute top-28 right-0 bottom-0 hidden w-px bg-surface-800 dark:block"/>
                <div
                    class="sticky top-19 -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-x-hidden overflow-y-auto py-16 pr-8 pl-0.5 xl:w-72 xl:pr-16">
                    <DocsNavigation/>
                </div>
            </div>

            <main class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
                <Prose>
                    <slot/>
                </Prose>
            </main>
        </div>
    </div>
</template>