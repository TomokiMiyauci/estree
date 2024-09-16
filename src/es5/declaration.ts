import type { Node } from "./node_object.ts";
import type { Statement } from "./statement.ts";
import type { Identifier } from "./identifier.ts";
import type { Expression } from "./expression.ts";
import type { Pattern } from "./pattern.ts";

export interface Declaration extends Statement {}

export interface FunctionDeclaration extends Function, Declaration {
  type: "FunctionDeclaration";
  id: Identifier;
}

export interface VariableDeclaration extends Declaration {
  type: "VariableDeclaration";
  declarations: VariableDeclarator[];
  kind: "var";
}

export interface VariableDeclaration extends Declaration {
  type: "VariableDeclaration";
  declarations: VariableDeclarator[];
  kind: "var";
}

export interface VariableDeclarator extends Node {
  type: "VariableDeclarator";
  id: Pattern;
  init: Expression | null;
}
