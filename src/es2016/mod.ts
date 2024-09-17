import "@miyauci/estree/es2015/internal";

declare module "@miyauci/estree/es2015/internal" {
  interface BinaryOperatorMap {
    StarStar: "**";
  }

  interface AssignmentOperatorMap {
    StarStarEq: "**=";
  }
}

export type * from "@miyauci/estree/es2015";
