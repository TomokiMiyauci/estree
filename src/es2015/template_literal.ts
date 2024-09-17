import "@miyauci/estree/es5/internal";
import type { Expression, Node } from "@miyauci/estree/es5";
import type { TemplateElementValueCookedMap } from "./internal.ts";

declare module "@miyauci/estree/es5/internal" {
  interface ExpressionMap {
    TemplateLiteral: TemplateLiteral;
    TaggedTemplateExpression: TaggedTemplateExpression;
  }
}

export interface TemplateLiteral extends Node {
  type: "TemplateLiteral";
  quasis: TemplateElement[];
  expressions: Expression[];
}

export interface TaggedTemplateExpression extends Node {
  type: "TaggedTemplateExpression";
  tag: Expression;
  quasi: TemplateLiteral;
}

export interface TemplateElement extends Node {
  type: "TemplateElement";
  tail: boolean;
  value: {
    cooked: TemplateElementValueCookedMap[keyof TemplateElementValueCookedMap];
    raw: string;
  };
}
