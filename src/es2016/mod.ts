declare module "@miyauci/estree/2015" {
  interface BinaryOperatorMap {
    StarStar: "**";
  }

  interface AssignmentOperatorMap {
    StarStarEq: "**=";
  }
}

export type * from "@miyauci/estree/2015";
