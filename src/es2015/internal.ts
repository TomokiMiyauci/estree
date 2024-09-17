import type { Expression, Identifier } from "@miyauci/estree/es5";
import type {
  ExportAllDeclaration,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  ImportDeclaration,
} from "./module.ts";
import type { AssignmentProperty } from "./pattern.ts";
import type { MethodDefinition } from "./class.ts";

export interface ImportOrExportDeclarationMap {
  ImportDeclaration: ImportDeclaration;
  ExportNamedDeclaration: ExportNamedDeclaration;
  ExportDefaultDeclaration: ExportDefaultDeclaration;
  ExportAllDeclaration: ExportAllDeclaration;
}

export interface ModuleSpecifierLocalMap {
  Identifier: Identifier;
}

export interface ImportSpecifierImportedMap {
  Identifier: Identifier;
}

export interface ExportSpecifierExportedMap {
  Identifier: Identifier;
}

export interface ObjectPatternPropertiesMap {
  AssignmentProperty: AssignmentProperty;
}

export interface TemplateElementValueCookedMap {
  string: string;
}

export interface ClassBodyBodyMap {
  MethodDefinition: MethodDefinition;
}

export interface MethodDefinitionKeyMap {
  Expression: Expression;
}

export type * from "@miyauci/estree/es5/internal";
