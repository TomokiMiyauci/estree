import type { Property, SpreadElement } from "@miyauci/estree/es2017";

declare module "@miyauci/estree/es2017" {
  interface ObjectExpression {
    properties: Array<Property | SpreadElement>;
  }
}

declare module "@miyauci/estree/es5/internal" {
  interface ObjectExpressionPropertiesMap {
    SpreadElement: SpreadElement;
  }
}
