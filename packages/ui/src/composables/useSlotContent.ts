import {
    useSlots,
    computed,
    Comment,
    Text,
    Fragment,
    type VNode,
    type ComputedRef
} from 'vue';

/**
 * Checks if a slot contains renderable content (ignoring comments and whitespace)
 * @param slotName The name of the slot to check
 * @returns ComputedRef<boolean>
 */
export const useSlotContent = (slotName: string = 'default'): ComputedRef<boolean> => {
    const slots = useSlots();

    const isSlotEmpty = (vnodes: VNode[] | undefined): boolean => {
        if (!vnodes || vnodes.length === 0) return true;

        return vnodes.every((vnode) => {
            // 1. Comments are considered empty
            if (vnode.type === Comment) return true;

            // 2. Text nodes are empty if they only contain whitespace
            if (vnode.type === Text) {
                return typeof vnode.children === 'string' && !vnode.children.trim();
            }

            // 3. Fragments (like v-for or <template>) check their children recursively
            if (vnode.type === Fragment) {
                return isSlotEmpty(vnode.children as VNode[]);
            }

            // 4. Anything else (elements, components) means the slot is NOT empty
            return false;
        });
    };

    return computed(() => {
        const slot = slots[slotName];
        // A slot is a function that returns an array of VNodes
        return slot ? !isSlotEmpty(slot()) : false;
    });
};