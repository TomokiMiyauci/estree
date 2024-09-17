import type {
  Declaration,
  Expression,
  Function,
  FunctionDeclaration,
  Literal,
  Node,
} from "@miyauci/estree/es5";
import type { Class, ClassDeclaration } from "./class.ts";
import type {
  ExportSpecifierExportedMap,
  ImportOrExportDeclarationMap,
  ImportSpecifierImportedMap,
  ModuleSpecifierLocalMap,
} from "./internal.ts";

/** */
export type ImportOrExportDeclaration =
  ImportOrExportDeclarationMap[keyof ImportOrExportDeclarationMap];

export interface ModuleSpecifier extends Node {
  local: ModuleSpecifierLocalMap[keyof ModuleSpecifierLocalMap];
}

export interface ImportDeclaration extends Node {
  type: "ImportDeclaration";
  specifiers: Array<
    ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier
  >;
  source: Literal;
}

export interface ImportSpecifier extends ModuleSpecifier {
  type: "ImportSpecifier";
  imported: ImportSpecifierImportedMap[keyof ImportSpecifierImportedMap];
}

export interface ImportDefaultSpecifier extends ModuleSpecifier {
  type: "ImportDefaultSpecifier";
}

export interface ImportNamespaceSpecifier extends ModuleSpecifier {
  type: "ImportNamespaceSpecifier";
}

export interface ExportNamedDeclaration extends Node {
  type: "ExportNamedDeclaration";
  declaration: Declaration | null;
  specifiers: Array<ExportSpecifier>;
  source: Literal | null;
}

export interface ExportSpecifier extends ModuleSpecifier {
  type: "ExportSpecifier";
  exported: ExportSpecifierExportedMap[keyof ExportSpecifierExportedMap];
}

export interface AnonymousDefaultExportedFunctionDeclaration extends Function {
  type: "FunctionDeclaration";
  id: null;
}

export interface AnonymousDefaultExportedClassDeclaration extends Class {
  type: "ClassDeclaration";
  id: null;
}

export interface ExportDefaultDeclaration extends Node {
  type: "ExportDefaultDeclaration";
  declaration:
    | AnonymousDefaultExportedFunctionDeclaration
    | FunctionDeclaration
    | AnonymousDefaultExportedClassDeclaration
    | ClassDeclaration
    | Expression;
}

export interface ExportAllDeclaration extends Node {
  type: "ExportAllDeclaration";
  source: Literal;
}
