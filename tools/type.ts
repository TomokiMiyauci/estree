export interface Program {
  type: "Program";
  body: Statement[];
}

export type Statement = Declaration;

export type Declaration = InterfaceDeclaration | EnumDeclaration;

export interface InterfaceDeclaration {
  type: "InterfaceDeclaration";
  id: Identifier;
  body: InterfaceBody | null;
  heritage: InterfaceHeritage | null;
  extend: boolean;
}

export interface EnumDeclaration {
  type: "EnumDeclaration";
  id: Identifier;
  body: EnumBody;
  extend: boolean;
}

export interface Identifier {
  type: "Identifier";
  name: string;
}

export interface InterfaceBody {
  type: "InterfaceBody";
  properties: Property[];
}

export interface InterfaceHeritage {
  type: "InterfaceHeritage";
  body: Identifier[];
}

export interface EnumBody {
  type: "EnumBody";
  members: EnumMember[];
}

export interface Property {
  type: "Property";
  key: Identifier;
  annotation: Annotation;
}

export type EnumMember = StringLiteral;

export interface StringLiteral {
  type: "StringLiteral";
  value: string;
}

export type Annotation =
  | UnionType
  | LiteralType
  | TypeReference
  | TupleType
  | TypeLiteral;

export interface UnionType {
  type: "UnionType";
  types: UnionMember[];
}

export type UnionMember = LiteralType | TypeReference;

export interface LiteralType {
  type: "LiteralType";
  literal: Literal;
}

export interface TypeReference {
  type: "TypeReference";
  name: Identifier;
}

export interface TupleType {
  type: "TupleType";
  element: UnionType | TypeReference | LiteralType;
}

export interface TypeLiteral {
  type: "TypeLiteral";
  members: Property[];
}

export type Literal = StringLiteral | Keyword;

export type Keyword =
  | StringKeyword
  | NullKeyword
  | NumberKeyword
  | BooleanKeyword;

export interface StringKeyword {
  type: "StringKeyword";
}

export interface NullKeyword {
  type: "NullKeyword";
}

export interface NumberKeyword {
  type: "NumberKeyword";
}

export interface BooleanKeyword {
  type: "BooleanKeyword";
}
