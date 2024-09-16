import type { Node } from "./node_object.ts";
import type { Identifier } from "./identifier.ts";
import type { Literal } from "./literal.ts";
import type { Pattern } from "./pattern.ts";

export interface Expression extends Node {}

export interface ThisExpression extends Expression {
  type: "ThisExpression";
}

export interface ArrayExpression extends Expression {
  type: "ArrayExpression";
  elements: (Expression | null)[];
}

export interface ObjectExpression extends Expression {
  type: "ObjectExpression";
  properties: Property[];
}

export interface Property extends Node {
  type: "Property";
  key: Literal | Identifier;
  value: Expression;
  kind: "init" | "get" | "set";
}

export interface FunctionExpression extends Function, Expression {
  type: "FunctionExpression";
}

export interface UnaryExpression extends Expression {
  type: "UnaryExpression";
  operator: UnaryOperator;
  prefix: boolean;
  argument: Expression;
}

export type UnaryOperator =
  | "-"
  | "+"
  | "!"
  | "~"
  | "typeof"
  | "void"
  | "delete";

export interface UpdateExpression extends Expression {
  type: "UpdateExpression";
  operator: UpdateOperator;
  argument: Expression;
  prefix: boolean;
}

export type UpdateOperator = "++" | "--";

export interface BinaryExpression extends Expression {
  type: "BinaryExpression";
  operator: BinaryOperator;
  left: Expression;
  right: Expression;
}

export type BinaryOperator =
  | "=="
  | "!="
  | "==="
  | "!=="
  | "<"
  | "<="
  | ">"
  | ">="
  | "<<"
  | ">>"
  | ">>>"
  | "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "|"
  | "^"
  | "&"
  | "in"
  | "instanceof";

export interface AssignmentExpression extends Expression {
  type: "AssignmentExpression";
  operator: AssignmentOperator;
  left: Pattern | Expression;
  right: Expression;
}

export type AssignmentOperator =
  | "="
  | "+="
  | "-="
  | "*="
  | "/="
  | "%="
  | "<<="
  | ">>="
  | ">>>="
  | "|="
  | "^="
  | "&=";

export interface LogicalExpression extends Expression {
  type: "LogicalExpression";
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
}

export type LogicalOperator = "||" | "&&";

export interface MemberExpression extends Expression, Pattern {
  type: "MemberExpression";
  object: Expression;
  property: Expression;
  computed: boolean;
}

export interface ConditionalExpression extends Expression {
  type: "ConditionalExpression";
  test: Expression;
  alternate: Expression;
  consequent: Expression;
}

export interface CallExpression extends Expression {
  type: "CallExpression";
  callee: Expression;
  arguments: Expression[];
}

export interface NewExpression extends Expression {
  type: "NewExpression";
  callee: Expression;
  arguments: Expression[];
}

export interface SequenceExpression extends Expression {
  type: "SequenceExpression";
  expressions: Expression[];
}
