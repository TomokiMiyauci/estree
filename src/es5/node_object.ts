/**
 * ESTree AST nodes are represented as BaseNode objects.
 *
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#node-objects)
 *
 * @internal
 */
export interface BaseNode {
  /**
   * String representing the AST variant type.
   */
  type: string;

  /**
   * Source location information of the node.
   * If the node contains no information about the source location, the field is `null`.
   */
  loc: SourceLocation | null;
}

/**
 * @internal
 */
export interface BaseFunction extends BaseNode {
}

/**
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#node-objects)
 */
export interface SourceLocation {
  source: string | null;

  /**
   * The position of the first character of the parsed source region.
   */
  start: Position;

  /**
   * The position of the first character after the parsed source region
   */
  end: Position;
}

/**
 * [ESTree](https://github.com/estree/estree/blob/master/es5.md#node-objects)
 */
export interface Position {
  /**
   * Line number between 1~
   */
  line: number;

  /**
   * Column number between 0~
   */
  column: number;
}
