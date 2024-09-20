import "@miyauci/estree/es5/internal";
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
    callee: Expression.Kind | Super;
    arguments: Array<Expression.Kind | SpreadElement>;
  }

  interface MemberExpression {
    object: Expression.Kind | Super;
  }

  interface ArrayExpression {
    elements: Array<Expression.Kind | SpreadElement | null>;
  }

  interface NewExpression {
    arguments: Array<Expression.Kind | SpreadElement>;
  }

  // FIXME: This describes the Esprima and Acorn behaviors, which is not currently aligned with the SpiderMonkey behavior.
  // interface AssignmentExpression {
  //   left: Pattern.Kind;
  // }

  interface Property {
    key: Expression.Kind;
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
  argument: Expression.Kind;
}

declare module "@miyauci/estree/es5/internal" {
  interface ArrayExpressionElementsMap {
    SpreadElement: SpreadElement;
  }

  interface NewExpressionArgumentsMap {
    SpreadElement: SpreadElement;
  }

  interface PropertyKeyMap {
    Expression: Expression.Kind;
  }

  interface ExpressionMap {
    ArrowFunctionExpression: ArrowFunctionExpression;
    YieldExpression: YieldExpression;
  }
}

export interface ArrowFunctionExpression
  extends Omit<Function, "body">, Expression {
  type: "ArrowFunctionExpression";
  body: FunctionBody | Expression.Kind;
  expression: boolean;
  generator: false;
}

export interface YieldExpression extends Expression {
  type: "YieldExpression";
  argument: Expression.Kind | null;
  delegate: boolean;
}
