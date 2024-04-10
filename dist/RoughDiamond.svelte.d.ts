/** @typedef {typeof __propDef.props}  RoughDiamondProps */
/** @typedef {typeof __propDef.events}  RoughDiamondEvents */
/** @typedef {typeof __propDef.slots}  RoughDiamondSlots */
export default class RoughDiamond extends SvelteComponent<{
    contenteditable?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RoughDiamondProps = typeof __propDef.props;
export type RoughDiamondEvents = typeof __propDef.events;
export type RoughDiamondSlots = typeof __propDef.slots;
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
