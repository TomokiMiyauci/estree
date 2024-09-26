import type { BaseNode } from "./node_object.ts";
import type { ProgramBodyMap } from "./internal.ts";

/**
 * A complete program source tree.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#programs)
 */
export interface Program extends BaseNode {
  type: "Program";
  body: Array<ProgramBodyMap[keyof ProgramBodyMap]>;
}
