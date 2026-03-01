import { FloatLabelProps } from 'primevue/floatlabel';
interface Props extends /* @vue-ignore */ FloatLabelProps {
    bgClass?: string;
    variant?: 'over' | 'in' | 'on';
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<number, (_: any) => any>>;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
