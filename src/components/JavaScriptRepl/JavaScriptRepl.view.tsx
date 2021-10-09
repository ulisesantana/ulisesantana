import React, {ChangeEventHandler, KeyboardEventHandler, useEffect, useRef, useState} from "react"
import styled from "styled-components"
import {Line, ReplProps} from "./types";
import {FaUndo} from "react-icons/fa";

// Forked from https://github.com/seveibar/react-repl
const Container = styled.div`
  body.theme-light & {
    --repl-bg-color: #eae5e1;
    --repl-caret-color: var(--secondary-color);
    --repl-output-color: #939393;
    --repl-tab-color: #f2f2f2;
    --repl-title-color: #808080;
  }

  body.theme-dark & {
    --repl-bg-color: #2d2d2d;
    --repl-caret-color: var(--primary-color);
    --repl-output-color: #808080;
    --repl-tab-color: var(--black);
    --repl-title-color: var(--text-color);
  }

  background-color: var(--repl-bg-color);
  border-radius: 4px;
  color: var(--text-color);
  font-family: monospace;
  font-weight: bold;
  overflow: hidden;
`
const InputLine = styled.div`
  display: flex;
  margin-top: 8px;
`
const ActiveInputLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`
const InputCaret = styled.div`
  color: var(--repl-caret-color);
  padding-right: 8px;
`
const Output = styled.div`
  color: var(--repl-output-color);
  margin-top: 8px;
  white-space: pre-wrap;
`
const Error = styled.div`
  color: #d33;
  margin-top: 8px;
  white-space: pre-wrap;
`
const TextInput = styled.input`
  background-color: transparent;
  border: none;
  caret-color: var(--repl-caret-color);
  caret-shape: block;
  color: var(--text-color);
  font-family: monospace;
  font-size: inherit;
  font-weight: bold;
  flex-grow: 1;
  outline: none;
`
const Header = styled.div`
  display: flex;
`
const Title = styled.div`
  color: var(--repl-title-color);
  flex-grow: 1;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
`

const Tab = styled.div`
  align-items: center;
  color: var(--repl-caret-color);
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 16px;
  
  svg {
    color: var(--repl-caret-color);
  }
`
const TerminalContent = styled.div<React.PropsWithRef<{height: number | string}>>`
  padding: 16px;
  padding-top: 2px;
  height: ${({height}) => isNaN(Number(height)) ? height : `${height}px`};
  overflow-y: auto;
`

const renderLine = (line: Line, i: number) =>
  line.type === "input" ? (
    <InputLine key={i}>
      <InputCaret>{">"}</InputCaret>
      {line.value}
    </InputLine>
  ) : line.type === "output" ? (
    <Output key={i}>{line.value}</Output>
  ) : (
    <Error key={i}>{line.value.toString()}</Error>
  )

export const Repl: React.FunctionComponent<ReplProps> = ({
  title,
  onClear,
  onSubmit,
  lines,
  height,
}) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const terminalContentRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const [activeInputValue, setActiveInputValue] = useState("")
  const [historySelectIndex, setHistorySelectIndex] = useState(-1)
  useEffect(() => {
    if (!terminalContentRef.current) {
      return
    } else {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight
    }
  }, [lines])
  useEffect(() => setHistorySelectIndex(-1), [lines])
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => setActiveInputValue(e.target.value)
  const onKeyUp: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      onSubmit(activeInputValue)
      setActiveInputValue("")
    }
    if (e.key === "ArrowUp") {
      const newHSI = historySelectIndex + 1
      const inputs = lines.filter((l) => l.type === "input")
      inputs.reverse()
      if (newHSI < inputs.length) {
        setActiveInputValue(inputs[newHSI].value)
        setHistorySelectIndex(newHSI)
      }
    }
    if (e.key === "ArrowDown") {
      const newHSI = historySelectIndex - 1
      const inputs = lines.filter((l) => l.type === "input")
      inputs.reverse()
      if (newHSI >= 0) {
        setActiveInputValue(inputs[newHSI].value)
        setHistorySelectIndex(newHSI)
      }
    }
  }
  return (
    <Container onClick={() => (inputRef.current.focus())}>
      <Header>
        <Title>{title}</Title>
        <Tab onClick={onClear}><FaUndo/></Tab>
      </Header>
      <TerminalContent height={height} ref={terminalContentRef}>
        {lines.map(renderLine)}
        <ActiveInputLine>
          <InputCaret>{">"}</InputCaret>
          <TextInput
            onKeyUp={onKeyUp}
            onChange={onInputChange}
            value={activeInputValue}
            ref={inputRef}
          />
        </ActiveInputLine>
      </TerminalContent>
    </Container>
  )
}

export default Repl
