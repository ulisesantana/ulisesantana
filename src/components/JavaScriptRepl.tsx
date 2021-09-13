import React from 'react'
// @ts-ignore
import {ReactReplJS} from "awesome-react-repl"

interface JavaScriptReplProps {
  title?: string
  init?: string[]
  height?: number
}

export const JavaScriptRepl: React.FunctionComponent<JavaScriptReplProps> = ({
  title = 'REPL',
  init = [],
  height = 300
}) => (
  <ReactReplJS
    title={title}
    height={init.length ? init.length * 125 : height}
    initiallyExecute={init}
  />
)
