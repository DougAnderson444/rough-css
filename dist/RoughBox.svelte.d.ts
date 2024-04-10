/** @typedef {typeof __propDef.props}  RoughBoxProps */
/** @typedef {typeof __propDef.events}  RoughBoxEvents */
/** @typedef {typeof __propDef.slots}  RoughBoxSlots */
export default class RoughBox extends SvelteComponent<{
    min?: number | undefined;
    max?: number | undefined;
    contenteditable?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RoughBoxProps = typeof __propDef.props;
export type RoughBoxEvents = typeof __propDef.events;
export type RoughBoxSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        min?: number | undefined;
        max?: number | undefined;
        contenteditable?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
