import "@miyauci/estree/es2017";
import "@miyauci/estree/es2017/internal";

declare module "@miyauci/estree/es2017" {
  interface TemplateElement {
    value: { cooked: string | null; raw: string };
  }
}

declare module "@miyauci/estree/es2017/internal" {
  interface TemplateElementValueCookedMap {
    null: null;
  }
}
