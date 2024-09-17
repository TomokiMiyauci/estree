import type {
  Expression,
  FunctionExpression,
  Identifier,
  Node,
} from "@miyauci/estree/es5";
import type { ClassBodyBodyMap, MethodDefinitionKeyMap } from "./internal.ts";

export interface Class extends Node {
  id: Identifier | null;
  superClass: Expression | null;
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

export interface ClassDeclaration extends Class {
  type: "ClassDeclaration";
  id: Identifier;
}

export interface ClassExpression extends Class {
  type: "ClassExpression";
}

export interface MetaProperty extends Node {
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
