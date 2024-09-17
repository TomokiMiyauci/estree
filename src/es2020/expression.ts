import "@miyauci/estree/es2019/internal";
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
}

declare module "@miyauci/estree/es2019/internal" {
  interface ExpressionMap {
    ChainExpression: ChainExpression;
    ImportExpression: ImportExpression;
  }

  interface LogicalOperatorMap {
    NullishCoalescing: "??";
  }
}
