import type { Pattern } from "@miyauci/estree/es2018";

declare module "@miyauci/estree/es2018" {
  interface CatchClause {
    param: Pattern | null;
  }
}

declare module "@miyauci/estree/es2018" {
  interface CatchClauseParamMap {
    null: null;
  }
}
