import type * as es5 from "@miyauci/estree/es5";

export interface ForOfStatement extends Omit<es5.ForInStatement, "type"> {
  type: "ForOfStatement";
}
