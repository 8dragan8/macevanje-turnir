import React, { useState, useEffect } from "react"
// import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Match from "./Match"

const dummyData = {
	p1: {
		ime: `Prvan`,
		prezime: `Prvoprezimenović`
	},
	p2: {
		ime: `Drugak`,
		prezime: `Drugoprezimenović`
	}
}

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
	body {
	position: relative;
	background-color: ${props => (props.whiteColor ? "#e2e2e2" : "#1c1c1c")};
	color: white;
	}
`
// const Naslov = styled(FlexRow)`
// 	color: #1b677c;
// 	font-family: sans-serif;
// 	flex: 0 0 100%;
// `

const App = () => {
	const int = 3 * 60

	return (
		<>
			<GlobalStyle />
			{/* <Naslov>
				<h1>Meč</h1>
			</Naslov> */}
			<Match int={int} />

		</>
	)
}
export default App
