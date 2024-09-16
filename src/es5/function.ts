import type { Node } from "./node_object.ts";
import type { Identifier } from "./identifier.ts";
import type { FunctionBody } from "./statement.ts";
import type { Pattern } from "./pattern.ts";

export interface Function extends Node {
  id: Identifier | null;
  params: Pattern[];
  body: FunctionBody;
}
