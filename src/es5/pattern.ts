import type { PatternMap } from "./internal.ts";

/**
 * Destructuring binding and assignment are not part of ES5, but all binding positions accept {@link Pattern} to allow for destructuring in ES6.
 * Nevertheless, for ES5, the only {@link Pattern} subtype is {@link PatternMap.Identifier Identifier}.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#patterns)
 */
export type Pattern = PatternMap[keyof PatternMap];
