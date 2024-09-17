import "@miyauci/estree/es2021/internal";
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

declare module "@miyauci/estree/es2021/internal" {
  interface ImportSpecifierImportedMap {
    Literal: Literal;
  }

  interface ExportSpecifierExportedMap {
    Literal: Literal;
  }

  interface ModuleSpecifierLocalMap {
    Literal: Literal;
  }
}

declare module "@miyauci/estree/es2021/internal" {
  interface ExportAllDeclarationExportedMap {
    Literal: Literal;
  }
}
