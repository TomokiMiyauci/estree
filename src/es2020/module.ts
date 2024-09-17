import type { Identifier } from "@miyauci/estree/es2019";

declare module "@miyauci/estree/es2019" {
  interface ExportAllDeclaration {
    exported: Identifier | null;
  }
}
