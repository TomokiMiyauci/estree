import type { Node } from "@miyauci/estree/es2019";

declare module "@miyauci/estree/es2019" {
  interface Literal {
    type: "Literal";
    value: string | boolean | null | number | RegExp | bigint;
  }
}

declare module "@miyauci/estree/es5/internal" {
  interface LiteralValueMap {
    bigint: bigint;
  }
}

export interface BigIntLiteral extends Node {
  bigint: string;
}
