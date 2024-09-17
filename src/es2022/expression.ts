import type { Expression } from "@miyauci/estree/es2021";
import type { PrivateIdentifier } from "./class.ts";

declare module "@miyauci/estree/es2021" {
  interface BinaryExpression {
    left: Expression | PrivateIdentifier;
  }
}

declare module "@miyauci/estree/es5/internal" {
  interface BinaryExpressionLeft {
    PrivateIdentifier: PrivateIdentifier;
  }
}
