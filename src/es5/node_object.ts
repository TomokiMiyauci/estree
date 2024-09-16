export interface Node {
  type: string;
  loc: SourceLocation | null;
}

export interface SourceLocation {
  source: string | null;
  start: Position;
  end: Position;
}

export interface Position {
  line: number; // >= 1
  column: number; // >= 0
}
