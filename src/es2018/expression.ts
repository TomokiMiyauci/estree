import type * as es2017 from "@miyauci/estree/es2017";

declare module "@miyauci/estree/es2017" {
  interface ObjectExpression {
    properties: Array<es2017.Property | es2017.SpreadElement>;
  }
}

declare module "@miyauci/estree/es2017" {
  interface ObjectExpressionPropertiesMap {
    SpreadElement: es2017.SpreadElement;
  }
}
