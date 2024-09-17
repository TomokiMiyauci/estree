import "@miyauci/estree/es2017";

declare module "@miyauci/estree/es2017" {
  interface ForOfStatement {
    await: boolean;
  }
}
