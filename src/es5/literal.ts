import type { Expression } from "./expression.ts";

/**
 * A literal token. Note that a literal can be an expression.
 */
export interface Literal extends Expression {
  type: "Literal";
  value: string | boolean | null | number | RegExp;
}

export interface RegExpLiteral extends Literal {
  regex: {
    pattern: string;
    flags: string;
  };
}
