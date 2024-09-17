import type * as es5 from "@miyauci/estree/es5";

declare module "@miyauci/estree/es5" {
  interface ExpressionMap {
    TemplateLiteral: TemplateLiteral;
    TaggedTemplateExpression: TaggedTemplateExpression;
  }
}

export interface TemplateLiteral extends es5.Node {
  type: "TemplateLiteral";
  quasis: TemplateElement[];
  expressions: es5.Expression[];
}

export interface TaggedTemplateExpression extends es5.Node {
  type: "TaggedTemplateExpression";
  tag: es5.Expression;
  quasi: TemplateLiteral;
}

export interface TemplateElement extends es5.Node {
  type: "TemplateElement";
  tail: boolean;
  value: { cooked: string; raw: string };
}
