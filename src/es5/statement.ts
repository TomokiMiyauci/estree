import type { Node } from "./node_object.ts";
import type { Expression, Identifier, Literal } from "./expression.ts";
import type { VariableDeclaration } from "./declaration.ts";
import type { Pattern } from "./pattern.ts";

/**
 * Any statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#statements)
 */
export type Statement = StatementMap[keyof StatementMap];

export interface StatementMap {
  ExpressionStatement: ExpressionStatement;
  Directive: Directive;
  BlockStatement: BlockStatement;
  FunctionBody: FunctionBody;
  EmptyStatement: EmptyStatement;
  DebuggerStatement: DebuggerStatement;
  ReturnStatement: ReturnStatement;
  LabeledStatement: LabeledStatement;
  BreakStatement: BreakStatement;
  ContinueStatement: ContinueStatement;
  IfStatement: IfStatement;
  SwitchStatement: SwitchStatement;
  TryStatement: TryStatement;
  ThrowStatement: ThrowStatement;
  WhileStatement: WhileStatement;
  WithStatement: WithStatement;
  DoWhileStatement: DoWhileStatement;
  ForInStatement: ForInStatement;
  ForStatement: ForStatement;
}

/**
 * An expression statement, i.e., a statement consisting of a single expression.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#expressionstatement)
 */
export interface ExpressionStatement extends Node {
  type: "ExpressionStatement";
  expression: Expression;
}

/**
 * A directive from the directive prologue of a script or function.
 * The {@link directive} property is the raw string source of the directive without quotes.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#directive)
 */
export interface Directive extends ExpressionStatement {
  expression: Literal;
  directive: string;
}

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#blockstatement)
 */
export interface BlockStatement extends Node {
  type: "BlockStatement";
  body: Statement[];
}

/**
 * The body of a function, which is a block statement that may begin with directives.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#functionbody)
 */
export interface FunctionBody extends BlockStatement {
  body: (Directive | Statement)[];
}

/**
 * An empty statement, i.e., a solitary semicolon.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#emptystatement)
 */
export interface EmptyStatement extends Node {
  type: "EmptyStatement";
}

/**
 * A `debugger` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#debuggerstatement)
 */
export interface DebuggerStatement extends Node {
  type: "DebuggerStatement";
}

/**
 * A `with` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#withstatement)
 */
export interface WithStatement extends Node {
  type: "WithStatement";
  object: Expression;
  body: Statement;
}

/**
 * A `return` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#returnstatement)
 */
export interface ReturnStatement extends Node {
  type: "ReturnStatement";
  argument: Expression | null;
}

/**
 * A labeled statement, i.e., a statement prefixed by a `break`/`continue` label.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#labeledstatement)
 */
export interface LabeledStatement extends Node {
  type: "LabeledStatement";
  label: Identifier;
  body: Statement;
}

/**
 * A `break` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#breakstatement)
 */
export interface BreakStatement extends Node {
  type: "BreakStatement";
  label: Identifier | null;
}

/**
 * A `continue` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#continuestatement)
 */
export interface ContinueStatement extends Node {
  type: "ContinueStatement";
  label: Identifier | null;
}

/**
 * An `if` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#ifstatement)
 */
export interface IfStatement extends Node {
  type: "IfStatement";
  test: Expression;
  consequent: Statement;
  alternate: Statement | null;
}

/**
 * A `switch` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#switchstatement)
 */
export interface SwitchStatement extends Node {
  type: "SwitchStatement";
  discriminant: Expression;
  cases: SwitchCase[];
}

/**
 * A `case` (if {@link test} is an {@link Expression}) or `default` (if `test === null`) clause in the body of a `switch` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#switchcase)
 */
export interface SwitchCase extends Node {
  type: "SwitchCase";
  test: Expression | null;
  consequent: Statement[];
}

/**
 * A `throw` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#throwstatement)
 */
export interface ThrowStatement extends Node {
  type: "ThrowStatement";
  argument: Expression;
}

/**
 * A `try` statement. If {@link handler} is `null` then {@link finalizer} must be a {@link BlockStatement}.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#trystatement)
 */
export interface TryStatement extends Node {
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
export interface CatchClause extends Node {
  type: "CatchClause";
  param: Pattern;
  body: BlockStatement;
}

/**
 * A `while` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#whilestatement)
 */
export interface WhileStatement extends Node {
  type: "WhileStatement";
  test: Expression;
  body: Statement;
}

/**
 * A `do`/`while` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#dowhilestatement)
 */
export interface DoWhileStatement extends Node {
  type: "DoWhileStatement";
  body: Statement;
  test: Expression;
}

/**
 * A `for` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#forstatement)
 */
export interface ForStatement extends Node {
  type: "ForStatement";
  init: VariableDeclaration | Expression | null;
  test: Expression | null;
  update: Expression | null;
  body: Statement;
}

/**
 * A `for`/`in` statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#forinstatement)
 */
export interface ForInStatement extends Node {
  type: "ForInStatement";
  left: VariableDeclaration | Pattern;
  right: Expression;
  body: Statement;
}
