import React, {useState, useEffect} from "react"
import Repl from "./JavaScriptRepl.view"
import prettyFormat from "pretty-format"
import {JavaScriptReplProps, Line, LineType} from "./types";

// Forked from https://github.com/seveibar/react-repl
function generateREPL() {
  const Function = Object.getPrototypeOf(function () {}).constructor

  function replEval(script: string) {
    script = script
      .trim()
      .replace(/^var /, "")
      .replace(/^let /, "")
      .replace(/^const /, "")
    return Function("{return (" + script + ")}")()
  }

  function execAndGetLine(execLine: string): Line {
    if (!execLine.trim()) {
      return {type: "output", value: 'Nothing to process. Empty command received.'}
    }
    try {
      const evalOutput = replEval(execLine)
      return {type: "output", value: prettyFormat(evalOutput)}
    } catch (e) {
      return {type: "error", value: e instanceof Error ? e.toString() : `Unknown error: ${e}`}
    }
  }

  function generateLinesFromStrings(expressions: string[], type: LineType): Line[] {
    const lines = [] as Line[]
    for (const execLine of expressions) {
      if (type === 'input') {
        lines.push({type, value: execLine})
        lines.push(execAndGetLine(execLine))
      }
      if (type === 'scope') {
        replEval(execLine)
      }
    }
    return lines
  }

  return {
    execAndGetLine,
    generateLinesFromStrings
  }
}

export const JavaScriptRepl: React.FunctionComponent<JavaScriptReplProps> = ({
                                                                               title = 'REPL',
                                                                               loadToScope = [],
                                                                               init = [],
                                                                               height
                                                                             }) => {
  const repl = generateREPL()
  const [lines, setLines] = useState<Line[]>([])
  const initializeLines = () => {
    repl.generateLinesFromStrings(loadToScope, 'scope')
    const initialCommands = repl.generateLinesFromStrings(init, 'input')
    setLines(initialCommands)
  }
  const onClear = () => (initializeLines)()
  const onSubmit = async (execLine: string) => {
    const newLines = lines.concat([{type: "input", value: execLine}])
    if (!execLine.trim()) {
      setLines(newLines)
    } else {
      setLines(newLines.concat([repl.execAndGetLine(execLine)]))
    }
  }

  useEffect(() => {
    (initializeLines)()
  }, [])

  return (
    <Repl
      title={title}
      onSubmit={onSubmit}
      height={init?.length > 0 ? 'auto' : height ?? 300}
      lines={lines}
      onClear={onClear}
    />
  )
}

export default JavaScriptRepl
