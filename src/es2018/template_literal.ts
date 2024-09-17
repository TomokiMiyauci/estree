import "@miyauci/estree/es2017";

declare module "@miyauci/estree/es2017" {
  interface TemplateElement {
    value: { cooked: string | null; raw: string };
  }
}

declare module "@miyauci/estree/es2015/internal" {
  interface TemplateElementValueCookedMap {
    null: null;
  }
}
