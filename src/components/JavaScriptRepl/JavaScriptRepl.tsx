import React, { useState, useEffect } from "react"
import Repl from "./JavaScriptRepl.view"
import prettyFormat from "pretty-format"
import {JavaScriptReplProps, Line} from "./types";

// Forked from https://github.com/seveibar/react-repl
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor
function scopeEval(scope: unknown, script: string) {
  script = script
    .trim()
    .replace(/^var /, "")
    .replace(/^let /, "")
    .replace(/^const /, "")
  return AsyncFunction("return (" + script + ")").bind(scope)()
}

async function execAndGetLine(execLine: string): Promise<Line> {
  if (!execLine.trim()) {
    return {type: "output", value: 'Nothing to process. Empty command received.'}
  }
  try {
    const evalOutput = await scopeEval(window, execLine)
    return { type: "output", value: prettyFormat(evalOutput) }
  } catch (e) {
    return { type: "error", value: e instanceof Error ? e.toString() : `Unknown error: ${e}` }
  }
}

export const JavaScriptRepl: React.FunctionComponent<JavaScriptReplProps> = ({
                              title= 'REPL',
                              init = [],
                              height
                            }) => {
  const [lines, setLines] = useState<Line[]>([])

  const onClear = () => setLines([])
  const onSubmit = async (execLine: string) => {
    const newLines = lines.concat([{ type: "input", value: execLine }])
    setLines(newLines)
    if (!execLine.trim()) return
    setLines(newLines.concat([await execAndGetLine(execLine)]))
  }

  useEffect(() => {
    (async () => {
      if (init.length === 0) return
      const lines = [] as Line[]
      for (const execLine of init) {
        lines.push({ type: "input", value: execLine })
        if (!execLine.trim()) continue
        lines.push(await execAndGetLine(execLine))
      }
      setLines(lines)
    })()
  }, [])

  return (
    <Repl
      title={title}
      onSubmit={onSubmit}
      height={init?.length > 0 ? init?.length * 100 : height ?? 300}
      lines={lines}
      onClear={onClear}
    />
  )
}

export default JavaScriptRepl
