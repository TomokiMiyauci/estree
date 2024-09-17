import type { ForInStatement } from "@miyauci/estree/es5";

export interface ForOfStatement extends Omit<ForInStatement, "type"> {
  type: "ForOfStatement";
}
