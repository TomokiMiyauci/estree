import type {
  Expression,
  Function,
  FunctionBody,
  Node,
} from "@miyauci/estree/es5";

export interface Super extends Node {
  type: "Super";
}

declare module "@miyauci/estree/es5" {
  interface CallExpression {
    callee: Expression | Super;
    arguments: Array<Expression | SpreadElement>;
  }

  interface MemberExpression {
    object: Expression | Super;
  }

  interface ArrayExpression {
    elements: Array<Expression | SpreadElement | null>;
  }

  interface NewExpression {
    arguments: Array<Expression | SpreadElement>;
  }

  interface Property {
    key: Expression;
    method: boolean;
    shorthand: boolean;
    computed: boolean;
  }
}

declare module "@miyauci/estree/es5/internal" {
  interface CallExpressionCalleeMap {
    Super: Super;
  }

  interface CallExpressionArgumentsMap {
    SpreadElement: SpreadElement;
  }

  interface MemberExpressionObjectMap {
    Super: Super;
  }
}

export interface SpreadElement extends Node {
  type: "SpreadElement";
  argument: Expression;
}

declare module "@miyauci/estree/es5/internal" {
  interface ArrayExpressionElementsMap {
    SpreadElement: SpreadElement;
  }

  interface NewExpressionArgumentsMap {
    SpreadElement: SpreadElement;
  }

  // interface AssignmentExpression {
  // }

  interface PropertyKeyMap {
    Expression: Expression;
  }

  interface ExpressionMap {
    ArrowFunctionExpression: ArrowFunctionExpression;
    YieldExpression: YieldExpression;
  }
}

export interface ArrowFunctionExpression extends Omit<Function, "body"> {
  type: "ArrowFunctionExpression";
  body: FunctionBody | Expression;
  expression: boolean;
  generator: false;
}

export interface YieldExpression extends Node {
  type: "YieldExpression";
  argument: Expression | null;
  delegate: boolean;
}
