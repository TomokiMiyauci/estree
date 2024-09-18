import type {
  ArrayExpression,
  AssignmentExpression,
  BinaryExpression,
  CallExpression,
  ConditionalExpression,
  Expression,
  FunctionExpression,
  Identifier,
  Literal,
  LogicalExpression,
  MemberExpression,
  NewExpression,
  ObjectExpression,
  Property,
  SequenceExpression,
  ThisExpression,
  UnaryExpression,
  UpdateExpression,
} from "./expression.ts";
import type {
  BlockStatement,
  BreakStatement,
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
  Statement,
  SwitchStatement,
  ThrowStatement,
  TryStatement,
  WhileStatement,
  WithStatement,
} from "./statement.ts";
import type { Pattern } from "./pattern.ts";

export interface VariableKindMap {
  var: "var";
}

export interface ExpressionMap {
  ThisExpression: ThisExpression;
  ArrayExpression: ArrayExpression;
  ObjectExpression: ObjectExpression;
  FunctionExpression: FunctionExpression;
  UnaryExpression: UnaryExpression;
  UpdateExpression: UpdateExpression;
  BinaryExpression: BinaryExpression;
  AssignmentExpression: AssignmentExpression;
  LogicalExpression: LogicalExpression;
  MemberExpression: MemberExpression;
  ConditionalExpression: ConditionalExpression;
  CallExpression: CallExpression;
  NewExpression: NewExpression;
  SequenceExpression: SequenceExpression;
  Literal: Literal.Kind;
  Identifier: Identifier;
}

export interface BinaryExpressionLeft {
  Expression: Expression.Kind;
}

export interface LogicalOperatorMap {
  0: "||";
  1: "&&";
}

export interface BinaryOperatorMap {
  0: "==";
  1: "!=";
  2: "===";
  3: "!==";
  4: "<";
  5: "<=";
  6: ">";
  7: ">=";
  8: "<<";
  9: "<<";
  10: ">>>";
  11: "+";
  12: "-";
  13: "*";
  14: "/";
  15: "%";
  16: "|";
  17: "^";
  18: "&";
  19: "in";
  20: "instanceof";
}

export interface AssignmentOperatorMap {
  0: "=";
  1: "+=";
  2: "-=";
  3: "*=";
  4: "/=";
  5: "%=";
  6: "<<=";
  7: ">>=";
  8: ">>>=";
  9: "|=";
  10: "^=";
  11: "&=";
}

export interface LiteralValueMap {
  string: string;
  boolean: boolean;
  null: null;
  number: number;
  RegExp: RegExp;
}

export interface MemberExpressionObjectMap {
  Expression: Expression.Kind;
}

export interface MemberExpressionPropertyMap {
  Expression: Expression.Kind;
}

export interface CallExpressionCalleeMap {
  Expression: Expression.Kind;
}

export interface CallExpressionArgumentsMap {
  Expression: Expression.Kind;
}

export interface PatternMap {
  Identifier: Identifier;
  MemberExpression: MemberExpression;
}

export interface ProgramBodyMap {
  Directive: Directive;
  Statement: Statement.Kind;
}

export interface StatementMap {
  ExpressionStatement: ExpressionStatement;
  BlockStatement: BlockStatement;
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

export interface CatchClauseParamMap {
  Pattern: Pattern.Kind;
}

export interface ObjectExpressionPropertiesMap {
  Property: Property;
}

export interface PropertyKeyMap {
  Literal: Literal.Kind;
  Identifier: Identifier;
}

export interface NewExpressionArgumentsMap {
  Expression: Expression.Kind;
}

export interface ArrayExpressionElementsMap {
  Expression: Expression.Kind;
  null: null;
}
