import React, {useState, useEffect} from "react"
import Repl from "./JavaScriptRepl.view"
import prettyFormat from "pretty-format"
import {JavaScriptReplProps, Line} from "./types";

// Forked from https://github.com/seveibar/react-repl
function generateREPL() {
  function replEval(script: string) {
    const parsedScript = script
      .trim()
      .replace(/^var /, "")
      .replace(/^let /, "")
      .replace(/^const /, "")
    return new Function(`return (${parsedScript})`)()
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

  function loadScope(expressions: string[]) {
    expressions.map(replEval)
  }

  function generateLinesFromStrings(expressions: string[]): Line[] {
    const lines = [] as Line[]
    for (const execLine of expressions) {
      lines.push({type: 'input', value: execLine})
      lines.push(execAndGetLine(execLine))
    }
    return lines
  }

  return {
    execAndGetLine,
    generateLinesFromStrings,
    loadScope
  }
}

export const JavaScriptRepl: React.FunctionComponent<JavaScriptReplProps> = ({
 title = 'REPL',
 loadToScope = [],
 init = [],
 height
}) => {
  const repl = generateREPL()
  const initializeLines = () => {
    repl.loadScope(loadToScope)
    return repl.generateLinesFromStrings(init)
  }
  const [lines, setLines] = useState<Line[]>(initializeLines())
  const onClear = () => setLines(initializeLines())
  const onSubmit = async (execLine: string) => {
    if (execLine.trim()) {
      repl.generateLinesFromStrings(loadToScope)
      setLines(
        lines
          .concat([{type: "input", value: execLine}])
          .concat([repl.execAndGetLine(execLine)])
      )
    }
  }

  useEffect(() => {
    (initializeLines)()
  }, [])
  console.log(title, lines.length)
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
