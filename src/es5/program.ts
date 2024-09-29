import type { BaseNode } from "./node_object.ts";
import type { Directive } from "./statement.ts";
import type { Statement } from "./union.ts";

/**
 * A complete program source tree.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#programs)
 */
export interface Program extends BaseNode {
  type: "Program";
  body: Array<Directive | Statement>;
}
