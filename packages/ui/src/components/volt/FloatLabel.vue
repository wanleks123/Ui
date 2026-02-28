<script setup lang="ts">
import { computed, useSlots, type VNode } from "vue";
import type { FloatLabelPassThroughOptions, FloatLabelProps } from "primevue/floatlabel";
import FloatLabel from "primevue/floatlabel";
import { ptViewMerge } from "./utils";

interface Props extends /* @vue-ignore */ FloatLabelProps {
    bgClass?: string;
    variant?: 'over' | 'in' | 'on'; // Explicitly typed variants
}

const props = defineProps<Props>();
const slots = useSlots();

/**
 * Safely determines the size of the child input.
 * Extracts size from DynamicFormControl or standard PrimeVue inputs.
 */
const childSize = computed(() => {
    const defaultSlot = slots.default?.();
    if (!defaultSlot || defaultSlot.length === 0) return null;

    const firstChild = defaultSlot[0] as VNode;

    // Handle DynamicFormControl wrapper
    if (
        firstChild.type &&
        typeof firstChild.type === 'object' &&
        '__name' in firstChild.type &&
        firstChild.type.__name === 'DynamicFormControl'
    ) {
        // @ts-ignore - Dynamic access to nested props
        return firstChild.children?.[0]?.props?.['field-props']?.size;
    }

    // Handle Standard Component
    return firstChild.props?.size;
});

const theme = computed<FloatLabelPassThroughOptions>(() => ({
    root: ({ parent }) => {
        const isInputGroup = parent.instance.$name === 'InputGroup';
        const size = childSize.value;

        return {
            class: [
                'block relative group', // Added 'group' for easier state targeting

                // --- 1. Integration with InputGroup ---
                {
                    '-mr-px': isInputGroup,
                    '[&>*:not(label)]:rounded-md': !isInputGroup,
                    '[&:first-child>*:not(label)]:rounded-l-md': isInputGroup,
                    '[&:last-child>*:not(label)]:rounded-r-md': isInputGroup
                },

                // --- 2. Base Label Styles ---
                '[&>label]:absolute [&>label]:pointer-events-none',
                '[&>label]:text-surface-500 dark:[&>label]:text-surface-400',
                '[&>label]:leading-none',
                '[&>label]:transition-all [&>label]:duration-200 [&>label]:ease-out',

                // --- 3. Initial Label Position (Resting State) ---
                // Vertical
                '[&>:not(textarea)~label]:top-1/2 [&>:not(textarea)~label]:-translate-y-1/2',
                '[&>textarea~label]:top-3 [&>textarea~label]:translate-y-0',

                // Horizontal (Start) based on size
                {
                    '[&>label]:start-5': size === 'large',
                    '[&>label]:start-3': !size, // Default
                    '[&>label]:start-2': size === 'small',
                },

                // Leading Icon Compensation
                '[&>[data-pc-name=inputicon]:first-child~label]:start-10',

                // --- 4. Placeholder Management ---
                // Hide placeholder initially, reveal on focus/filled
                '[&_input::placeholder]:opacity-0 [&_textarea::placeholder]:opacity-0',
                '[&_input::placeholder]:transition-opacity [&_input::placeholder]:duration-200',
                '[&:has(:focus)_::placeholder]:opacity-100',
                '[&:has(.filled)_::placeholder]:opacity-100',

                // --- 5. Floating State (Focus or Filled) ---
                // Shared floating styles
                `
                [&:has(:focus)>label]:-top-3
                [&:has(.filled)>label]:-top-3
                [&:has(:focus)>label]:text-xs
                [&:has(.filled)>label]:text-xs
                [&:has(:focus)>label]:z-10
                [&:has(.filled)>label]:z-10
                `,
                // Color highlight on focus only
                '[&:has(:focus)>label]:text-primary-500 dark:[&:has(:focus)>label]:text-primary-400',

                // --- 6. Variant: "in" (Inside Input) ---
                props.variant === 'in' && [
                    '[&_input]:pt-6 [&_input]:pb-2',
                    // Override float position
                    '[&:has(:focus)>label]:top-2 [&:has(.filled)>label]:top-2',
                    '[&:has(:focus)>label]:-translate-y-0 [&:has(.filled)>label]:-translate-y-0',
                ],

                // --- 7. Variant: "on" (On Border) ---
                props.variant === 'on' && [
                    // Position exactly on the top border
                    '[&:has(:focus)>label]:-top-2 [&:has(.filled)>label]:-top-2', // Adjust based on font-size
                    '[&:has(:focus)>label]:-translate-y-1/2 [&:has(.filled)>label]:-translate-y-1/2',
                    // Background & Padding
                    '[&:has(:focus)>label]:px-1 [&:has(.filled)>label]:px-1',
                    '[&:has(:focus)>label]:rounded',

                    // Dynamic Background
                    props.bgClass
                        ? props.bgClass
                        : '[&:has(:focus)>label]:bg-surface-0 dark:[&:has(:focus)>label]:bg-surface-950 [&:has(.filled)>label]:bg-surface-0 dark:[&:has(.filled)>label]:bg-surface-950'
                ]
            ]
        };
    }
}));
</script>

<template>
    <FloatLabel
        unstyled
        :pt="theme"
        :ptOptions="{ mergeProps: ptViewMerge }"
    >
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps ?? {}" />
        </template>
    </FloatLabel>
</template>