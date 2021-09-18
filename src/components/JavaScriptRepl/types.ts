export interface JavaScriptReplProps {
  /**
   * Title showed at the terminal top right corner
   * @default REPL
   */
  title?: string
  /**
   * Initial commands
   * @default []
   */
  init?: string[]
  /**
   * Loads functions or variables to the scope without showing it on the REPL
   * @default []
   */
  loadToScope?: string[]
  /**
   * Terminal height in pixels
   * @default 300
   */
  height?: number
}

export type LineType = 'input' | 'output' | 'error' | 'scope'

export interface Line {
  type: LineType
  value: string
}

export interface ReplProps {
  title: string
  height: number | string
  lines: Line[]
  onSubmit: (input: string) => void
  onClear: () => void
}
