import type { Identifier, Literal } from "@miyauci/estree/es2021";

declare module "@miyauci/estree/es2021" {
  interface ImportSpecifier {
    imported: Identifier | Literal;
  }

  interface ExportSpecifier {
    local: Identifier | Literal;
    exported: Identifier | Literal;
  }

  interface ExportAllDeclaration {
    exported: Identifier | Literal | null;
  }
}

declare module "@miyauci/estree/es2021" {
  interface ImportSpecifierImportedMap {
    Literal: Literal;
  }

  interface ExportSpecifierExportedMap {
    Literal: Literal;
  }

  interface ExportAllDeclarationExportedMap {
    Literal: Literal;
  }
}
