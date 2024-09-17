import "@miyauci/estree/es2016/internal";
import type { Expression, Node } from "@miyauci/estree/es2016";

export interface AwaitExpression extends Node {
  type: "AwaitExpression";
  argument: Expression;
}

declare module "@miyauci/estree/es2016/internal" {
  interface ExpressionMap {
    AwaitExpression: AwaitExpression;
  }
}
