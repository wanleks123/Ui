<template>
    <Password
        unstyled
        :pt="theme"
        :ptOptions="{
            mergeProps: ptViewMerge
        }"
    >
        <template #maskicon="{ toggleCallback }">
            <EyeSlashIcon 
                @click="toggleCallback" 
                class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 hover:text-primary-500 dark:text-surface-500 dark:hover:text-primary-400 cursor-pointer z-10 transition-colors" 
            />
        </template>
        
        <template #unmaskicon="{ toggleCallback }">
            <EyeIcon 
                @click="toggleCallback" 
                class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 hover:text-primary-500 dark:text-surface-500 dark:hover:text-primary-400 cursor-pointer z-10 transition-colors" 
            />
        </template>
        
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </Password>
</template>

<script setup lang="ts">
import EyeIcon from '@primevue/icons/eye';
import EyeSlashIcon from '@primevue/icons/eyeslash';
import Password, { type PasswordPassThroughOptions, type PasswordProps } from 'primevue/password';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ PasswordProps {}
defineProps<Props>();

const theme = ref<PasswordPassThroughOptions>({
    root: ({ props }: any) => ({
        class: [
            'relative flex',
            { 'w-full': props.fluid }
        ]
    }),
    pcInputText: {
    root: ({ props, parent }: any) => ({
        class: [
            'appearance-none rounded-md outline-hidden w-full transition-all duration-200',
            'shadow-sm',
            
            // --- WARNA DISAMAKAN ---
            'bg-surface-0 dark:bg-surface-950',
            'text-surface-700 dark:text-surface-0',
            'placeholder:text-surface-400 dark:placeholder:text-surface-500',
            'border border-surface-300 dark:border-surface-700',
            'enabled:hover:border-primary-500 dark:enabled:hover:border-primary-400',
            'enabled:focus:border-primary-500 dark:enabled:focus:border-primary-400',
            'enabled:focus:ring-1 enabled:focus:ring-primary-500/50',

            // --- STATE KHUSUS ---
            'disabled:bg-surface-100 dark:disabled:bg-surface-800 disabled:text-surface-400 disabled:cursor-not-allowed',
            'p-invalid:border-red-400 dark:p-invalid:border-red-300',

            // --- DINAMIS SIZES (PERBAIKAN DI SINI) ---
            // Default (Normal)
            { 'text-base px-3 py-3': !props.size || props.size === null },
            
            // Small
            { 'text-sm px-2 py-2': props.size === 'small' },
            
            // Large
            { 'text-lg px-4 py-4': props.size === 'large' },

            // Padding khusus jika ada ikon mata
            { 'pe-10': parent.props.toggleMask }
        ]
    })
},
    overlay: {
        class: [
            'p-4 rounded-lg shadow-xl',
            'bg-surface-0 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',
            'text-surface-700 dark:text-surface-0'
        ]
    },
    content: {
        class: 'flex flex-col gap-3'
    },
    meter: {
        class: 'h-2 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden'
    },
    meterLabel: {
        class: [
            'h-full transition-[width] duration-500 ease-in-out rounded-full',
            'p-weak:bg-red-500 dark:p-weak:bg-red-400',
            'p-medium:bg-amber-500 dark:p-medium:bg-amber-400',
            'p-strong:bg-primary-500 dark:p-strong:bg-primary-400'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-95',
        enterActiveClass: 'transition duration-150 ease-out',
        leaveActiveClass: 'transition duration-100 ease-in',
        leaveToClass: 'opacity-0'
    }
});
</script>