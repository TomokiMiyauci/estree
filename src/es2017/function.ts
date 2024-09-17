import "@miyauci/estree/es2016";

declare module "@miyauci/estree/es2016" {
  interface Function {
    async: boolean;
  }
}
