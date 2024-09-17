import type * as es5 from "@miyauci/estree/es5";

export interface Class extends es5.Node {
  id: es5.Identifier | null;
  superClass: es5.Expression | null;
  body: ClassBody;
}

export interface ClassBody extends es5.Node {
  type: "ClassBody";
  body: MethodDefinition[];
}

export interface MethodDefinition extends es5.Node {
  type: "MethodDefinition";
  key: es5.Expression;
  value: es5.FunctionExpression;
  kind: "constructor" | "method" | "get" | "set";
  computed: boolean;
  static: boolean;
}

export interface ClassDeclaration extends Class {
  type: "ClassDeclaration";
  id: es5.Identifier;
}

export interface ClassExpression extends Class {
  type: "ClassExpression";
}

export interface MetaProperty extends es5.Node {
  type: "MetaProperty";
  meta: es5.Identifier;
  property: es5.Identifier;
}

declare module "@miyauci/estree/es5" {
  interface DeclarationMap {
    ClassDeclaration: ClassDeclaration;
  }

  interface ExpressionMap {
    ClassExpression: ClassExpression;
    MetaProperty: MetaProperty;
  }
}
