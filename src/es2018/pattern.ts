import type * as es2017 from "@miyauci/estree/es2017";

declare module "@miyauci/estree/es2017" {
  interface ObjectPattern {
    properties: Array<es2017.AssignmentProperty | es2017.RestElement>;
  }
}

declare module "@miyauci/estree/es2017" {
  interface ObjectPatternPropertiesMap {
    RestElement: es2017.RestElement;
  }
}
