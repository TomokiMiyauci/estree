import type { ExportAllDeclarationExportedMap } from "./internal.ts";

declare module "@miyauci/estree/es2019" {
  interface ExportAllDeclaration {
    exported:
      ExportAllDeclarationExportedMap[keyof ExportAllDeclarationExportedMap];
  }
}
