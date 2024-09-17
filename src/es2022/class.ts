import type { BlockStatement, Expression, Node } from "@miyauci/estree/es2021";

declare module "@miyauci/estree/es2021" {
  interface ClassBody {
    body: Array<MethodDefinition | PropertyDefinition | StaticBlock>;
  }

  interface MethodDefinition {
    key: Expression | PrivateIdentifier;
  }

  interface MemberExpression {
    property: Expression | PrivateIdentifier;
  }
}

declare module "@miyauci/estree/es2021" {
  interface ClassBodyBodyMap {
    MPropertyDefinition: PropertyDefinition;
    StaticBlock: StaticBlock;
  }

  interface MethodDefinitionKeyMap {
    PrivateIdentifier: PrivateIdentifier;
  }

  interface MemberExpressionPropertyMap {
    PrivateIdentifier: PrivateIdentifier;
  }
}

export interface PropertyDefinition extends Node {
  type: "PropertyDefinition";
  key: Expression | PrivateIdentifier;
  value: Expression | null;
  computed: boolean;
  static: boolean;
}

export interface PrivateIdentifier extends Node {
  type: "PrivateIdentifier";
  name: string;
}

export interface StaticBlock extends Omit<BlockStatement, "type"> {
  type: "StaticBlock";
}
