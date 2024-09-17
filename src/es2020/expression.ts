import type { Expression, Node } from "@miyauci/estree/es2019";

export interface ChainExpression extends Node {
  type: "ChainExpression";
  expression: ChainElement;
}

export interface ChainElement extends Node {
  optional: boolean;
}

export interface ImportExpression extends Node {
  type: "ImportExpression";
  source: Expression;
}

declare module "@miyauci/estree/es2019" {
  interface CallExpression extends ChainElement {}

  interface MemberExpression extends ChainElement {}

  interface LogicalOperatorMap {
    NullishCoalescing: "??";
  }
}

declare module "@miyauci/estree/es2019" {
  interface ExpressionMap {
    ChainExpression: ChainExpression;
    ImportExpression: ImportExpression;
  }
}
