import type {
  BlockStatement,
  BreakStatement,
  CatchClause,
  ContinueStatement,
  DebuggerStatement,
  Directive,
  DoWhileStatement,
  EmptyStatement,
  ExpressionStatement,
  ForInStatement,
  ForStatement,
  IfStatement,
  LabeledStatement,
  ReturnStatement,
  SwitchStatement,
  ThrowStatement,
  TryStatement,
  WhileStatement,
  WithStatement,
} from "./statement.ts";
import type {
  FunctionDeclaration,
  VariableDeclaration,
  VariableDeclarator,
} from "./declaration.ts";
import type {
  ArrayExpression,
  AssignmentExpression,
  BinaryExpression,
  CallExpression,
  ConditionalExpression,
  FunctionExpression,
  Identifier,
  Literal,
  LogicalExpression,
  MemberExpression,
  NewExpression,
  ObjectExpression,
  RegExpLiteral,
  SequenceExpression,
  ThisExpression,
  UnaryExpression,
  UpdateExpression,
} from "./expression.ts";
import type { Program } from "./program.ts";
import type { Property } from "./expression.ts";

export type Node =
  | Program
  | CatchClause
  | VariableDeclarator
  | Property
  | Statement
  | Expression
  | Pattern
  | Declaration;

/**
 * Any statement.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#statements)
 */
export type Statement =
  | BlockStatement
  | BreakStatement
  | ContinueStatement
  | DoWhileStatement
  | SwitchStatement
  | EmptyStatement
  | IfStatement
  | DebuggerStatement
  | WhileStatement
  | ForInStatement
  | ForStatement
  | WithStatement
  | ReturnStatement
  | ThrowStatement
  | TryStatement
  | LabeledStatement
  | ExpressionStatement
  | Directive;

/**
 * Any expression node. Since the left-hand side of an assignment may be any expression in general, an expression can also be a pattern.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#expressions)
 */
export type Expression =
  | ArrayExpression
  | AssignmentExpression
  | BinaryExpression
  | CallExpression
  | ConditionalExpression
  | FunctionExpression
  | LogicalExpression
  | MemberExpression
  | NewExpression
  | ObjectExpression
  | SequenceExpression
  | ThisExpression
  | UnaryExpression
  | UpdateExpression
  | RegExpLiteral
  | Identifier
  | Literal
  | Declaration;

export type Pattern = MemberExpression | Identifier;

/**
 * Any declaration node.
 *
 * > [!NOTE]
 * > Declarations are considered statements; this is because declarations can appear in any statement context.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#declarations)
 */
export type Declaration = FunctionDeclaration | VariableDeclaration;
