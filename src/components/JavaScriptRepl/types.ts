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
   * Terminal height in pixels
   * @default 300
   */
  height?: number
}

export interface Line {
  type: 'input' | 'output' | 'error'
  value: string
}

export interface ReplProps {
  title: string
  height: number | string
  lines: Line[]
  onSubmit: (input: string) => void
  onClear: () => void
}
