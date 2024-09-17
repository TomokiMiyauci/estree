import type * as es5 from "@miyauci/estree/es5";

export interface Super extends es5.Node {
  type: "Super";
}

declare module "@miyauci/estree/es5" {
  interface CallExpression {
    callee: es5.Expression | Super;
    arguments: (es5.Expression | SpreadElement)[];
  }

  interface CallExpressionCalleeMap {
    Super: Super;
  }

  interface CallExpressionArgumentsMap {
    SpreadElement: SpreadElement;
  }

  interface MemberExpression {
    object: es5.Expression | Super;
  }

  interface MemberExpressionObjectMap {
    Super: Super;
  }
}

export interface SpreadElement extends es5.Node {
  type: "SpreadElement";
  argument: es5.Expression;
}

declare module "@miyauci/estree/es5" {
  interface ArrayExpression {
    elements: Array<es5.Expression | SpreadElement | null>;
  }

  interface ArrayExpressionElementsMap {
    SpreadElement: SpreadElement;
  }

  interface NewExpression {
    arguments: Array<es5.Expression | SpreadElement>;
  }

  interface NewExpressionArgumentsMap {
    SpreadElement: SpreadElement;
  }

  // interface AssignmentExpression {
  // }

  interface Property {
    key: es5.Expression;
    method: boolean;
    shorthand: boolean;
    computed: boolean;
  }

  interface PropertyKeyMap {
    Expression: es5.Expression;
  }

  interface ExpressionMap {
    ArrowFunctionExpression: ArrowFunctionExpression;
    YieldExpression: YieldExpression;
  }
}

export interface ArrowFunctionExpression extends Omit<es5.Function, "body"> {
  type: "ArrowFunctionExpression";
  body: es5.FunctionBody | es5.Expression;
  expression: boolean;
  generator: false;
}

export interface YieldExpression extends es5.Node {
  type: "YieldExpression";
  argument: es5.Expression | null;
  delegate: boolean;
}
