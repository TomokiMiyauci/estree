import type { Node } from "./node_object.ts";
import type { Pattern } from "./pattern.ts";
import type { Function } from "./function.ts";
import type {
  ArrayExpressionElementsMap,
  AssignmentOperatorMap,
  BinaryExpressionLeft,
  BinaryOperatorMap,
  CallExpressionArgumentsMap,
  CallExpressionCalleeMap,
  ExpressionMap,
  LiteralValueMap,
  LogicalOperatorMap,
  MemberExpressionObjectMap,
  MemberExpressionPropertyMap,
  NewExpressionArgumentsMap,
  ObjectExpressionPropertiesMap,
  PropertyKeyMap,
} from "./internal.ts";

/**
 * Any expression node. Since the left-hand side of an assignment may be any expression in general, an expression can also be a pattern.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#expressions)
 */
export type Expression = ExpressionMap[keyof ExpressionMap];

/**
 * A `this` expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#thisexpression)
 */
export interface ThisExpression extends Node {
  type: "ThisExpression";
}

/**
 * An `array` expression. An element might be `null` if it represents a hole in a sparse array. E.g. `[1,,2]`.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#arrayexpression)
 */
export interface ArrayExpression extends Node {
  type: "ArrayExpression";
  elements: Array<ArrayExpressionElementsMap[keyof ArrayExpressionElementsMap]>;
}

/**
 * An object expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#objectexpression)
 */
export interface ObjectExpression extends Node {
  type: "ObjectExpression";
  properties: Array<
    ObjectExpressionPropertiesMap[keyof ObjectExpressionPropertiesMap]
  >;
}

/**
 * A literal property in an object expression can have either a string or number as its {@link key}.
 * Ordinary property initializers have a {@link kind} value "init"; getters and setters have the kind values "get" and "set", respectively.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#property)
 */
export interface Property extends Node {
  type: "Property";
  key: PropertyKeyMap[keyof PropertyKeyMap];
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
export interface UnaryExpression extends Node {
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
export interface UpdateExpression extends Node {
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
export interface BinaryExpression extends Node {
  type: "BinaryExpression";
  operator: BinaryOperator;
  left: BinaryExpressionLeft[keyof BinaryExpressionLeft];
  right: Expression;
}

/**
 * A binary operator token.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#binaryoperator)
 */
export type BinaryOperator = BinaryOperatorMap[keyof BinaryOperatorMap];

/**
 * An assignment operator expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#assignmentexpression)
 */
export interface AssignmentExpression extends Node {
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
  AssignmentOperatorMap[keyof AssignmentOperatorMap];

/**
 * A logical operator expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#logicalexpression)
 */
export interface LogicalExpression extends Node {
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
export type LogicalOperator = LogicalOperatorMap[keyof LogicalOperatorMap];

/**
 * A member expression. If {@link computed} is `true`, the node corresponds to a computed (`a[b]`) member expression and {@link property} is an {@link Expression}.
 * If {@link computed} is `false`, the node corresponds to a static (`a.b`) member expression and {@link property} is an {@link Identifier}.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#memberexpression)
 */
export interface MemberExpression extends Node {
  type: "MemberExpression";
  object: MemberExpressionObjectMap[keyof MemberExpressionObjectMap];
  property: MemberExpressionPropertyMap[keyof MemberExpressionPropertyMap];
  computed: boolean;
}

/**
 * A conditional expression, i.e., a ternary `?`/`:` expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#conditionalexpression)
 */
export interface ConditionalExpression extends Node {
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
export interface CallExpression extends Node {
  type: "CallExpression";
  callee: CallExpressionCalleeMap[keyof CallExpressionCalleeMap];
  arguments: Array<
    CallExpressionArgumentsMap[keyof CallExpressionArgumentsMap]
  >;
}

/**
 * A `new` expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#newexpression)
 */
export interface NewExpression extends Node {
  type: "NewExpression";
  callee: Expression;
  arguments: Array<NewExpressionArgumentsMap[keyof NewExpressionArgumentsMap]>;
}

/**
 * A sequence expression, i.e., a comma-separated sequence of expressions.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#sequenceexpression)
 */
export interface SequenceExpression extends Node {
  type: "SequenceExpression";
  expressions: Expression[];
}

/**
 * A literal token.
 *
 * > [!NOTE]
 * > A literal can be an expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#literal)
 */
export interface Literal extends Node {
  type: "Literal";
  value: LiteralValueMap[keyof LiteralValueMap];
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
export interface Identifier extends Node {
  type: "Identifier";
  name: string;
}
