import type { BaseNode } from "./node_object.ts";
import type { Expression, Identifier, Literal } from "./expression.ts";
import type { VariableDeclaration } from "./declaration.ts";
import type { Pattern } from "./pattern.ts";
import type { StatementMap } from "./internal.ts";

/**
 * Any statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#statements)
 */
export interface Statement extends BaseNode {}

export namespace Statement {
  export type Kind = StatementMap[keyof StatementMap];
}

/**
 * An expression statement, i.e., a statement consisting of a single expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#expressionstatement)
 */
export interface ExpressionStatement extends Statement {
  type: "ExpressionStatement";
  expression: Expression.Kind;
}

/**
 * A directive from the directive prologue of a script or function.
 * The {@link directive} property is the raw string source of the directive without quotes.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#directive)
 */
export interface Directive extends ExpressionStatement {
  expression: Literal.Kind;
  directive: string;
}

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#blockstatement)
 */
export interface BlockStatement extends Statement {
  type: "BlockStatement";
  body: Statement.Kind[];
}

/**
 * The body of a function, which is a block statement that may begin with directives.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#functionbody)
 */
export interface FunctionBody extends BlockStatement {
  body: (Directive | Statement.Kind)[];
}

/**
 * An empty statement, i.e., a solitary semicolon.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#emptystatement)
 */
export interface EmptyStatement extends Statement {
  type: "EmptyStatement";
}

/**
 * A `debugger` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#debuggerstatement)
 */
export interface DebuggerStatement extends Statement {
  type: "DebuggerStatement";
}

/**
 * A `with` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#withstatement)
 */
export interface WithStatement extends Statement {
  type: "WithStatement";
  object: Expression.Kind;
  body: Statement.Kind;
}

/**
 * A `return` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#returnstatement)
 */
export interface ReturnStatement extends Statement {
  type: "ReturnStatement";
  argument: Expression.Kind | null;
}

/**
 * A labeled statement, i.e., a statement prefixed by a `break`/`continue` label.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#labeledstatement)
 */
export interface LabeledStatement extends Statement {
  type: "LabeledStatement";
  label: Identifier;
  body: Statement.Kind;
}

/**
 * A `break` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#breakstatement)
 */
export interface BreakStatement extends Statement {
  type: "BreakStatement";
  label: Identifier | null;
}

/**
 * A `continue` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#continuestatement)
 */
export interface ContinueStatement extends Statement {
  type: "ContinueStatement";
  label: Identifier | null;
}

/**
 * An `if` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#ifstatement)
 */
export interface IfStatement extends Statement {
  type: "IfStatement";
  test: Expression.Kind;
  consequent: Statement.Kind;
  alternate: Statement.Kind | null;
}

/**
 * A `switch` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#switchstatement)
 */
export interface SwitchStatement extends Statement {
  type: "SwitchStatement";
  discriminant: Expression.Kind;
  cases: SwitchCase[];
}

/**
 * A `case` (if {@link test} is an {@link Expression}) or `default` (if `test === null`) clause in the body of a `switch` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#switchcase)
 */
export interface SwitchCase extends BaseNode {
  type: "SwitchCase";
  test: Expression.Kind | null;
  consequent: Statement.Kind[];
}

/**
 * A `throw` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#throwstatement)
 */
export interface ThrowStatement extends Statement {
  type: "ThrowStatement";
  argument: Expression.Kind;
}

/**
 * A `try` statement. If {@link handler} is `null` then {@link finalizer} must be a {@link BlockStatement}.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#trystatement)
 */
export interface TryStatement extends Statement {
  type: "TryStatement";
  block: BlockStatement;
  handler: CatchClause | null;
  finalizer: BlockStatement | null;
}

/**
 * A `catch` clause following a `try` block.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#catchclause)
 */
export interface CatchClause extends BaseNode {
  type: "CatchClause";
  param: Pattern.Kind;
  body: BlockStatement;
}

/**
 * A `while` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#whilestatement)
 */
export interface WhileStatement extends Statement {
  type: "WhileStatement";
  test: Expression.Kind;
  body: Statement.Kind;
}

/**
 * A `do`/`while` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#dowhilestatement)
 */
export interface DoWhileStatement extends Statement {
  type: "DoWhileStatement";
  body: Statement.Kind;
  test: Expression.Kind;
}

/**
 * A `for` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#forstatement)
 */
export interface ForStatement extends Statement {
  type: "ForStatement";
  init: VariableDeclaration | Expression.Kind | null;
  test: Expression.Kind | null;
  update: Expression.Kind | null;
  body: Statement.Kind;
}

/**
 * A `for`/`in` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#forinstatement)
 */
export interface ForInStatement extends Statement {
  type: "ForInStatement";
  left: VariableDeclaration | Pattern.Kind;
  right: Expression.Kind;
  body: Statement.Kind;
}
