import type * as es5 from "@miyauci/estree/es5";
import type { Class, ClassDeclaration } from "./class.ts";

export interface ImportOrExportDeclarationMap {
  ImportDeclaration: ImportDeclaration;
  ExportNamedDeclaration: ExportNamedDeclaration;
  ExportDefaultDeclaration: ExportDefaultDeclaration;
  ExportAllDeclaration: ExportAllDeclaration;
}

/** */
export type ImportOrExportDeclaration =
  ImportOrExportDeclarationMap[keyof ImportOrExportDeclarationMap];

export interface ModuleSpecifier extends es5.Node {
  local: es5.Identifier;
}

export interface ImportDeclaration extends es5.Node {
  type: "ImportDeclaration";
  specifiers: Array<
    ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier
  >;
  source: es5.Literal;
}

export interface ImportSpecifier extends ModuleSpecifier {
  type: "ImportSpecifier";
  imported: es5.Identifier;
}

export interface ImportDefaultSpecifier extends ModuleSpecifier {
  type: "ImportDefaultSpecifier";
}

export interface ImportNamespaceSpecifier extends ModuleSpecifier {
  type: "ImportNamespaceSpecifier";
}

export interface ExportNamedDeclaration extends es5.Node {
  type: "ExportNamedDeclaration";
  declaration: es5.Declaration | null;
  specifiers: Array<ExportSpecifier>;
  source: es5.Literal | null;
}

export interface ExportSpecifier extends ModuleSpecifier {
  type: "ExportSpecifier";
  exported: es5.Identifier;
}

export interface AnonymousDefaultExportedFunctionDeclaration
  extends es5.Function {
  type: "FunctionDeclaration";
  id: null;
}

export interface AnonymousDefaultExportedClassDeclaration extends Class {
  type: "ClassDeclaration";
  id: null;
}

export interface ExportDefaultDeclaration extends es5.Node {
  type: "ExportDefaultDeclaration";
  declaration:
    | AnonymousDefaultExportedFunctionDeclaration
    | es5.FunctionDeclaration
    | AnonymousDefaultExportedClassDeclaration
    | ClassDeclaration
    | es5.Expression;
}

export interface ExportAllDeclaration extends es5.Node {
  type: "ExportAllDeclaration";
  source: es5.Literal;
}
