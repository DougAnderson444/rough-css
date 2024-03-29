/** @typedef {typeof __propDef.props}  RoughTitleBoxProps */
/** @typedef {typeof __propDef.events}  RoughTitleBoxEvents */
/** @typedef {typeof __propDef.slots}  RoughTitleBoxSlots */
export default class RoughTitleBox extends SvelteComponentTyped<{
    min?: number | undefined;
    max?: number | undefined;
    background?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RoughTitleBoxProps = typeof __propDef.props;
export type RoughTitleBoxEvents = typeof __propDef.events;
export type RoughTitleBoxSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        min?: number | undefined;
        max?: number | undefined;
        background?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
