import type { AssignmentProperty, RestElement } from "@miyauci/estree/es2017";

declare module "@miyauci/estree/es2017" {
  interface ObjectPattern {
    properties: Array<AssignmentProperty | RestElement>;
  }
}

declare module "@miyauci/estree/es2015/internal" {
  interface ObjectPatternPropertiesMap {
    RestElement: RestElement;
  }
}
