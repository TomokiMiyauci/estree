import type { BaseNode } from "./node_object.ts";
import type { Function } from "./function.ts";
import type { Expression, Pattern } from "./union.ts";

/**
 * A `this` expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#thisexpression)
 */
export interface ThisExpression extends BaseNode {
  type: "ThisExpression";
}

/**
 * An `array` expression. An element might be `null` if it represents a hole in a sparse array. E.g. `[1,,2]`.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#arrayexpression)
 */
export interface ArrayExpression extends BaseNode {
  type: "ArrayExpression";
  elements: Array<Expression | null>;
}

/**
 * An object expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#objectexpression)
 */
export interface ObjectExpression extends BaseNode {
  type: "ObjectExpression";
  properties: Array<Property>;
}

/**
 * A literal property in an object expression can have either a string or number as its {@link key}.
 * Ordinary property initializers have a {@link kind} value "init"; getters and setters have the kind values "get" and "set", respectively.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#property)
 */
export interface Property extends BaseNode {
  type: "Property";
  key: Literal | Identifier;
  value: Expression;
  kind: "init" | "get" | "set";
}

/**
 * A `function` expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#functionexpression)
 */
export interface FunctionExpression extends Function {
  type: "FunctionExpression";
}

/**
 * A unary operator expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#unaryexpression)
 */
export interface UnaryExpression extends BaseNode {
  type: "UnaryExpression";
  operator: UnaryOperator;
  prefix: boolean;
  argument: Expression;
}

/**
 * A unary operator token.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#unaryoperator)
 */
export type UnaryOperator =
  | "-"
  | "+"
  | "!"
  | "~"
  | "typeof"
  | "void"
  | "delete";

/**
 * An update (increment or decrement) operator expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#updateexpression)
 */
export interface UpdateExpression extends BaseNode {
  type: "UpdateExpression";
  operator: UpdateOperator;
  argument: Expression;
  prefix: boolean;
}

/**
 * An update (increment or decrement) operator token.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#updateoperator)
 */
export type UpdateOperator = "++" | "--";

/**
 * A binary operator expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#binaryexpression)
 */
export interface BinaryExpression extends BaseNode {
  type: "BinaryExpression";
  operator: BinaryOperator;
  left: Expression;
  right: Expression;
}

/**
 * A binary operator token.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#binaryoperator)
 */
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

/**
 * An assignment operator expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#assignmentexpression)
 */
export interface AssignmentExpression extends BaseNode {
  type: "AssignmentExpression";
  operator: AssignmentOperator;
  left: Pattern | Expression;
  right: Expression;
}

/**
 * An assignment operator token.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#assignmentoperator)
 */
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

/**
 * A logical operator expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#logicalexpression)
 */
export interface LogicalExpression extends BaseNode {
  type: "LogicalExpression";
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
}

/**
 * A logical operator token.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#logicaloperator)
 */
export type LogicalOperator = "||" | "&&";

/**
 * A member expression. If {@link computed} is `true`, the node corresponds to a computed (`a[b]`) member expression and {@link property} is an {@link Expression}.
 * If {@link computed} is `false`, the node corresponds to a static (`a.b`) member expression and {@link property} is an {@link Identifier}.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#memberexpression)
 */
export interface MemberExpression extends BaseNode {
  type: "MemberExpression";
  object: Expression;
  property: Expression;
  computed: boolean;
}

/**
 * A conditional expression, i.e., a ternary `?`/`:` expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#conditionalexpression)
 */
export interface ConditionalExpression extends BaseNode {
  type: "ConditionalExpression";
  test: Expression;
  alternate: Expression;
  consequent: Expression;
}

/**
 * A function or method call expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#callexpression)
 */
export interface CallExpression extends BaseNode {
  type: "CallExpression";
  callee: Expression;
  arguments: Array<Expression>;
}

/**
 * A `new` expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#newexpression)
 */
export interface NewExpression extends BaseNode {
  type: "NewExpression";
  callee: Expression;
  arguments: Array<Expression>;
}

/**
 * A sequence expression, i.e., a comma-separated sequence of expressions.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#sequenceexpression)
 */
export interface SequenceExpression extends BaseNode {
  type: "SequenceExpression";
  expressions: Array<Expression>;
}

/**
 * A literal token.
 *
 * > [!NOTE]
 * > A literal can be an expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#literal)
 */
export interface Literal extends BaseNode {
  type: "Literal";
  value: string | boolean | null | number | RegExp;
}

/**
 * The {@link regex} property allows regexes to be represented in environments that don’t support certain flags such as `y` or `u`.
 * In environments that don't support these flags `value` will be `null` as the regex can't be represented natively.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#regexpliteral)
 */
export interface RegExpLiteral extends Literal {
  regex: { pattern: string; flags: string };
}

/**
 * An identifier.
 *
 * > [!NOTE]
 * > An identifier may be an expression or a destructuring pattern.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#identifier)
 */
export interface Identifier extends BaseNode {
  type: "Identifier";
  name: string;
}
