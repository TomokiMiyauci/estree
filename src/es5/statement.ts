import type { Node } from "./node_object.ts";
import type { Expression } from "./expression.ts";
import type { Literal } from "./literal.ts";
import type { Identifier } from "./identifier.ts";
import type { VariableDeclaration } from "./declaration.ts";
import type { Pattern } from "./pattern.ts";

export interface Statement extends Node {}

export interface ExpressionStatement extends Statement {
  type: "ExpressionStatement";
  expression: Expression;
}

export interface Directive extends ExpressionStatement {
  expression: Literal;
  directive: string;
}

export interface BlockStatement extends Statement {
  type: "BlockStatement";
  body: Statement[];
}

export interface FunctionBody extends BlockStatement {
  body: (Directive | Statement)[];
}

export interface EmptyStatement extends Statement {
  type: "EmptyStatement";
}

export interface DebuggerStatement extends Statement {
  type: "DebuggerStatement";
}

export interface WithStatement extends Statement {
  type: "WithStatement";
  object: Expression;
  body: Statement;
}

export interface ReturnStatement extends Statement {
  type: "ReturnStatement";
  argument: Expression | null;
}

export interface LabeledStatement extends Statement {
  type: "LabeledStatement";
  label: Identifier;
  body: Statement;
}

export interface BreakStatement extends Statement {
  type: "BreakStatement";
  label: Identifier | null;
}

export interface ContinueStatement extends Statement {
  type: "ContinueStatement";
  label: Identifier | null;
}

export interface IfStatement extends Statement {
  type: "IfStatement";
  test: Expression;
  consequent: Statement;
  alternate: Statement | null;
}

export interface SwitchStatement extends Statement {
  type: "SwitchStatement";
  discriminant: Expression;
  cases: SwitchCase[];
}

export interface SwitchCase extends Node {
  type: "SwitchCase";
  test: Expression | null;
  consequent: Statement[];
}

export interface ThrowStatement extends Statement {
  type: "ThrowStatement";
  argument: Expression;
}

export interface TryStatement extends Statement {
  type: "TryStatement";
  block: BlockStatement;
  handler: CatchClause | null;
  finalizer: BlockStatement | null;
}

export interface CatchClause extends Node {
  type: "CatchClause";
  param: Pattern;
  body: BlockStatement;
}

export interface WhileStatement extends Statement {
  type: "WhileStatement";
  test: Expression;
  body: Statement;
}

export interface DoWhileStatement extends Statement {
  type: "DoWhileStatement";
  body: Statement;
  test: Expression;
}

export interface ForStatement extends Statement {
  type: "ForStatement";
  init: VariableDeclaration | Expression | null;
  test: Expression | null;
  update: Expression | null;
  body: Statement;
}

export interface ForInStatement extends Statement {
  type: "ForInStatement";
  left: VariableDeclaration | Pattern;
  right: Expression;
  body: Statement;
}
