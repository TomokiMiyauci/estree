import type * as es5 from "@miyauci/estree/es5";

declare module "@miyauci/estree/es5" {
  interface PatternMap {
    ObjectPattern: ObjectPattern;
    ArrayPattern: ArrayPattern;
    RestElement: RestElement;
    AssignmentPattern: AssignmentPattern;
  }
}

export interface AssignmentProperty extends Omit<es5.Property, "value"> {
  value: es5.Pattern;
  kind: "init";
  method: false;
}

export interface ObjectPattern extends es5.Node {
  type: "ObjectPattern";
  properties: AssignmentProperty[];
}

export interface ArrayPattern extends es5.Node {
  type: "ArrayPattern";
  elements: (es5.Pattern | null)[];
}

export interface RestElement extends es5.Node {
  type: "RestElement";
  argument: es5.Pattern;
}

export interface AssignmentPattern extends es5.Node {
  type: "AssignmentPattern";
  left: es5.Pattern;
  right: es5.Expression;
}
