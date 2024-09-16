import type { Expression } from "./expression.ts";
import type { Pattern } from "./pattern.ts";

/**
 * An identifier.
 */
export interface Identifier extends Expression, Pattern {
  type: "Identifier";
  name: string;
}
