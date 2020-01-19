import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.whiteColor ? "#e2e2e2" : "#1c1c1c")};
  }
`

const Naslov = styled.h1`
	color: #1b677c;
	font-family: sans-serif;
`

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Naslov>Hello</Naslov>
		</>
	)
}
export default App
