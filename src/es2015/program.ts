import type * as es5 from "@miyauci/estree/es5";
import type { ImportOrExportDeclaration } from "./module.ts";

declare module "@miyauci/estree/es5" {
  interface Program {
    sourceType: "script" | "module";
    body: Array<es5.Statement | ImportOrExportDeclaration>;
  }

  interface ProgramBodyMap {
    ImportOrExportDeclaration: ImportOrExportDeclaration;
  }
}
