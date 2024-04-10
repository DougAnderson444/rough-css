/** @typedef {typeof __propDef.props}  RoughCircleProps */
/** @typedef {typeof __propDef.events}  RoughCircleEvents */
/** @typedef {typeof __propDef.slots}  RoughCircleSlots */
export default class RoughCircle extends SvelteComponent<{
    contenteditable?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RoughCircleProps = typeof __propDef.props;
export type RoughCircleEvents = typeof __propDef.events;
export type RoughCircleSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
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
