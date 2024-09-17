import "@miyauci/estree/es2020";

declare module "@miyauci/estree/es2020" {
  interface AssignmentOperatorMap {
    OrEq: "||=";
    AndEq: "&&=";
    OptEq: "??=";
  }
}
