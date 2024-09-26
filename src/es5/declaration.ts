import type { BaseNode } from "./node_object.ts";
import type { Statement } from "./statement.ts";
import type { Expression, Identifier } from "./expression.ts";
import type { Pattern } from "./pattern.ts";
import type { Function } from "./function.ts";
import type { VariableKindMap } from "./internal.ts";

/**
 * Any declaration node.
 *
 * > [!NOTE]
 * > Declarations are considered statements; this is because declarations can appear in any statement context.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#declarations)
 */
export interface Declaration extends Statement {}

export namespace Declaration {
  export type Kind = FunctionDeclaration | VariableDeclaration;
}

/**
 * A function declaration.
 *
 * > [!NOTE]
 * > Unlike in the parent interface {@link Function}, the {@link id} cannot be `null`.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#functiondeclaration)
 */
export interface FunctionDeclaration extends Function, Declaration {
  type: "FunctionDeclaration";
  id: Identifier;
}

/**
 * A variable declaration.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#variabledeclaration)
 */
export interface VariableDeclaration extends Declaration {
  type: "VariableDeclaration";
  declarations: VariableDeclarator[];
  kind: VariableKindMap[keyof VariableKindMap];
}

/**
 * A variable declarator.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#variabledeclarator)
 */
export interface VariableDeclarator extends BaseNode {
  type: "VariableDeclarator";
  id: Pattern.Kind;
  init: Expression.Kind | null;
}
