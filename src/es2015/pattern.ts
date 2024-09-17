import "@miyauci/estree/es5/internal";
import type { Expression, Node, Pattern, Property } from "@miyauci/estree/es5";
import type { ObjectPatternPropertiesMap } from "./internal.ts";

declare module "@miyauci/estree/es5/internal" {
  interface PatternMap {
    ObjectPattern: ObjectPattern;
    ArrayPattern: ArrayPattern;
    RestElement: RestElement;
    AssignmentPattern: AssignmentPattern;
  }
}

export interface AssignmentProperty extends Omit<Property, "value"> {
  value: Pattern;
  kind: "init";
  method: false;
}

export interface ObjectPattern extends Node {
  type: "ObjectPattern";
  properties: Array<
    ObjectPatternPropertiesMap[keyof ObjectPatternPropertiesMap]
  >;
}

export interface ArrayPattern extends Node {
  type: "ArrayPattern";
  elements: Array<Pattern | null>;
}

export interface RestElement extends Node {
  type: "RestElement";
  argument: Pattern;
}

export interface AssignmentPattern extends Node {
  type: "AssignmentPattern";
  left: Pattern;
  right: Expression;
}
