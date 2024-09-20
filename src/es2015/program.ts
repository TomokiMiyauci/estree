import "@miyauci/estree/es5/internal";
import type { Statement } from "@miyauci/estree/es5";
import type { ImportOrExportDeclaration } from "./module.ts";

declare module "@miyauci/estree/es5" {
  interface Program {
    sourceType: "script" | "module";
    body: Array<Statement.Kind | ImportOrExportDeclaration.Kind>;
  }
}

declare module "@miyauci/estree/es5/internal" {
  interface ProgramBodyMap {
    ImportOrExportDeclaration: ImportOrExportDeclaration.Kind;
  }
}
