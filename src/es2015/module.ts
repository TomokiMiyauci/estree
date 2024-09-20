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

export interface ImportOrExportDeclaration extends Node {}

export namespace ImportOrExportDeclaration {
  export type Kind =
    ImportOrExportDeclarationMap[keyof ImportOrExportDeclarationMap];
}

export interface ModuleSpecifier extends Node {
  local: ModuleSpecifierLocalMap[keyof ModuleSpecifierLocalMap];
}

export interface ImportDeclaration extends ImportOrExportDeclaration {
  type: "ImportDeclaration";
  specifiers: Array<
    ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier
  >;
  source: Literal.Kind;
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

export interface ExportNamedDeclaration extends ImportOrExportDeclaration {
  type: "ExportNamedDeclaration";
  declaration: Declaration.Kind | null;
  specifiers: Array<ExportSpecifier>;
  source: Literal.Kind | null;
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

export interface ExportDefaultDeclaration extends ImportOrExportDeclaration {
  type: "ExportDefaultDeclaration";
  declaration:
    | AnonymousDefaultExportedFunctionDeclaration
    | FunctionDeclaration
    | AnonymousDefaultExportedClassDeclaration
    | ClassDeclaration
    | Expression.Kind;
}

export interface ExportAllDeclaration extends ImportOrExportDeclaration {
  type: "ExportAllDeclaration";
  source: Literal.Kind;
}
