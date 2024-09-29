import type { BaseNode } from "./node_object.ts";
import type { Identifier } from "./expression.ts";
import type { FunctionBody } from "./statement.ts";
import type { Pattern } from "./union.ts";

/**
 * A function declaration or expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#functions)
 */
export interface Function extends BaseNode {
  id: Identifier | null;
  params: Pattern[];
  body: FunctionBody;
}
