/** @typedef {typeof __propDef.props}  RoughBoxProps */
/** @typedef {typeof __propDef.events}  RoughBoxEvents */
/** @typedef {typeof __propDef.slots}  RoughBoxSlots */
export default class RoughBox extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RoughBoxProps = typeof __propDef.props;
export type RoughBoxEvents = typeof __propDef.events;
export type RoughBoxSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
