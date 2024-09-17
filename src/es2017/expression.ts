import type { Expression, Node } from "@miyauci/estree/es2016";

export interface AwaitExpression extends Node {
  type: "AwaitExpression";
  argument: Expression;
}

declare module "@miyauci/estree/es5/internal" {
  interface ExpressionMap {
    AwaitExpression: AwaitExpression;
  }
}
