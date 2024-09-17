import "@miyauci/estree/es2020/internal";

declare module "@miyauci/estree/es2020/internal" {
  interface AssignmentOperatorMap {
    OrEq: "||=";
    AndEq: "&&=";
    OptEq: "??=";
  }
}
