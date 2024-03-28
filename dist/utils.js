let min = -1;
let max = 2; // 1 or 2 looks like a sketch
export const high90s = () => 100 - Math.random() * (max - min) + min;
export const singlDigs = () => 1 + Math.random() * (max - min) + min;
