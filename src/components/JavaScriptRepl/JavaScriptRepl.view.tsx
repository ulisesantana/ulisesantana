import React, {useEffect, useRef, useState} from "react"
import styled from "styled-components"
import {ReplProps} from "./types";
import {FaTrashAlt} from "react-icons/all";

// Forked from https://github.com/seveibar/react-repl
const Container = styled.div`
  body.theme-light & {
    --repl-bg-color: #e4e4e4;
    --repl-caret-color: var(--secondary-color);
    --repl-output-color: #939393;
    --repl-tab-color: #f2f2f2;
    --repl-title-color: #808080;
  }

  body.theme-dark & {
    --repl-bg-color: #404040;
    --repl-caret-color: var(--primary-color);
    --repl-output-color: #808080;
    --repl-tab-color: var(--black);
    --repl-title-color: var(--text-color);
  }

  background-color: var(--repl-bg-color);
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  color: var(--text-color);
  font-family: monospace;
  font-weight: bold;
  overflow: hidden;
`
const InputCarat = styled.div`
  color: var(--repl-caret-color);
  padding-right: 8px;
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
  background-color: var(--repl-caret-color);
  color: var(--repl-tab-color);
  cursor: pointer;
  padding: 16px;
`
const TerminalContent = styled.div<React.PropsWithRef<{height: number}>>`
  padding: 16px;
  padding-top: 2px;
  height: ${(props) => props.height}px;
  overflow-y: auto;
`

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

  return (
    <Container onClick={() => (inputRef.current.focus())}>
        <Header>
          <Title>{title}</Title>
          <Tab onClick={onClear}><FaTrashAlt/></Tab>
        </Header>
      <TerminalContent height={height} ref={terminalContentRef}>
        {lines.map((line, i) =>
          line.type === "input" ? (
            <InputLine key={i}>
              <InputCarat>{">"}</InputCarat>
              {line.value}
            </InputLine>
          ) : line.type === "output" ? (
            <Output key={i}>{line.value}</Output>
          ) : (
            <Error key={i}>{line.value.toString()}</Error>
          )
        )}
        <ActiveInputLine>
          <InputCarat>{">"}</InputCarat>
          <TextInput
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                onSubmit(activeInputValue)
                setActiveInputValue("")
              } else if (e.key === "ArrowUp") {
                const newHSI = historySelectIndex + 1
                const inputs = lines.filter((l) => l.type === "input")
                inputs.reverse()
                if (newHSI < inputs.length) {
                  setActiveInputValue(inputs[newHSI].value)
                  setHistorySelectIndex(newHSI)
                }
              } else if (e.key === "ArrowDown") {
                const newHSI = historySelectIndex - 1
                const inputs = lines.filter((l) => l.type === "input")
                inputs.reverse()
                if (newHSI >= 0) {
                  setActiveInputValue(inputs[newHSI].value)
                  setHistorySelectIndex(newHSI)
                }
              }
            }}
            onChange={(e) => setActiveInputValue(e.target.value)}
            value={activeInputValue}
            ref={inputRef}
          />
        </ActiveInputLine>
      </TerminalContent>
    </Container>
  )
}

export default Repl