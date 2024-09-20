import "@miyauci/estree/es5/internal";
import type {
  Declaration,
  Expression,
  FunctionExpression,
  Identifier,
  Node,
} from "@miyauci/estree/es5";
import type { ClassBodyBodyMap, MethodDefinitionKeyMap } from "./internal.ts";

export interface Class extends Node {
  id: Identifier | null;
  superClass: Expression.Kind | null;
  body: ClassBody;
}

export interface ClassBody extends Node {
  type: "ClassBody";
  body: Array<ClassBodyBodyMap[keyof ClassBodyBodyMap]>;
}

export interface MethodDefinition extends Node {
  type: "MethodDefinition";
  key: MethodDefinitionKeyMap[keyof MethodDefinitionKeyMap];
  value: FunctionExpression;
  kind: "constructor" | "method" | "get" | "set";
  computed: boolean;
  static: boolean;
}

export interface ClassDeclaration extends Class, Declaration {
  type: "ClassDeclaration";
  id: Identifier;
}

export interface ClassExpression extends Class, Expression {
  type: "ClassExpression";
}

export interface MetaProperty extends Expression {
  type: "MetaProperty";
  meta: Identifier;
  property: Identifier;
}

declare module "@miyauci/estree/es5/internal" {
  interface DeclarationMap {
    ClassDeclaration: ClassDeclaration;
  }

  interface ExpressionMap {
    ClassExpression: ClassExpression;
    MetaProperty: MetaProperty;
  }
}
