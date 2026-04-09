import { ComputedRef } from 'vue';
/**
 * Checks if a slot contains renderable content (ignoring comments and whitespace)
 * @param slotName The name of the slot to check
 * @returns ComputedRef<boolean>
 */
export declare const useSlotContent: (slotName?: string) => ComputedRef<boolean>;
