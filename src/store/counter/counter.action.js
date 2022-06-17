import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./counter.types";


// counter app
export const counterInc = () => ({ type: COUNTER_INCREMENT });
export const counterDec = () => ({ type: COUNTER_DECREMENT });