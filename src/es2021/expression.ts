import "@miyauci/estree/es5";

declare module "@miyauci/estree/es5/internal" {
  interface AssignmentOperatorMap {
    OrEq: "||=";
    AndEq: "&&=";
    OptEq: "??=";
  }
}
