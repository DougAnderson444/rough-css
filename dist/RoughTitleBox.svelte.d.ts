/** @typedef {typeof __propDef.props}  RoughTitleBoxProps */
/** @typedef {typeof __propDef.events}  RoughTitleBoxEvents */
/** @typedef {typeof __propDef.slots}  RoughTitleBoxSlots */
export default class RoughTitleBox extends SvelteComponent<{
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
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
