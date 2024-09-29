import type { BaseNode } from "./node_object.ts";
import type { Identifier } from "./expression.ts";
import type { Function } from "./function.ts";
import type { Expression, Pattern } from "./union.ts";

/**
 * A function declaration.
 *
 * > [!NOTE]
 * > Unlike in the parent interface {@link Function}, the {@link id} cannot be `null`.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#functiondeclaration)
 */
export interface FunctionDeclaration extends Function, BaseNode {
  type: "FunctionDeclaration";
  id: Identifier;
}

/**
 * A variable declaration.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#variabledeclaration)
 */
export interface VariableDeclaration extends BaseNode {
  type: "VariableDeclaration";
  declarations: VariableDeclarator[];
  kind: "var";
}

/**
 * A variable declarator.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#variabledeclarator)
 */
export interface VariableDeclarator extends BaseNode {
  type: "VariableDeclarator";
  id: Pattern;
  init: Expression | null;
}
