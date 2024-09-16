import type { Node } from "./node_object.ts";
import type { Directive, Statement } from "./statement.ts";

/**
 * A complete program source tree.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#programs)
 */
export interface Program extends Node {
  type: "Program";
  body: (Directive | Statement)[];
}
