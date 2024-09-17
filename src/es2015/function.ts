import "@miyauci/estree/es5";

declare module "@miyauci/estree/es5" {
  /**
   * [ESTree es2015](https://github.com/estree/estree/blob/master/es2015.md#functions)
   */
  interface Function {
    generator: boolean;
  }
}
