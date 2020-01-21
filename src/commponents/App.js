import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Timer from "./Timer"
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
const FlexRow = styled.div`
	display: flex;
	position: relative;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
`
const FlexCol = styled.div`
	display: flex;
	position: relative;
	flex-flow: column nowrap;
`
const Container = styled(FlexCol)`
	width: 100vw;
	height: 100vh;
`
const Red = styled(FlexRow)`
	width: 100%;
	height: 50%;
`

const Igrac = styled(FlexRow)`
	display: flex;
	flex: 1 0 40%;
	background-color: #001100;
	height: 100%;
`
const Split = styled(FlexRow)`
	display: flex;
	flex: 0 0 20%;
	background-color: #0011ff;
	height: 100%;
`
const Skor = styled(FlexRow)`
	display: flex;
	flex: 0 0 30%;
	background-color: #ff1100;
	height: 100%;
`
const Vreme = styled(FlexCol)`
	align-items: center;
	justify-content: center;
	height: 100%;
	display: flex;
	flex: 0 0 40%;
	background-color: #001100;
`

const Naslov = styled(FlexRow)`
	color: #1b677c;
	font-family: sans-serif;
	flex: 0 0 100%;
`

const App = () => {
	const int = 3 * 60

	const [isRunning, setIsRunning] = useState(false)
	const [timer, setTimer] = useState(0)

	useEffect(() => {
		let interval = null
		if (isRunning && int - timer !== 0) {
			interval = setInterval(() => {
				setTimer(prevTtimer => prevTtimer + 1)
			}, 1000)
		} else if (!isRunning && timer !== 0) {
			clearInterval(interval)
		} else {
			setIsRunning(false)
		}
		return () => clearInterval(interval)
	}, [isRunning, timer])

	const playpause = e => {
		if (timer === 0) {
			setIsRunning(true)
		} else if (int - timer !== 0) {
			setIsRunning(!isRunning)
		}
	}
	const reset = () => {
		setTimer(0)
		setIsRunning(false)
	}
	return (
		<>
			<GlobalStyle />
			{/* <Naslov>
				<h1>Meč</h1>
			</Naslov> */}
			<Match />
			<Container>
				<Red>
					<Igrac>1</Igrac>
					<Split>
					</Split>
					<Igrac>3</Igrac>
				</Red>
				<Red>
					<Skor>4</Skor>
					<Vreme>
						<Timer t={int - timer} />
						<div>
							<button onClick={playpause}>Play/Pause</button>
							<button onClick={reset}>Reset</button>
						</div>
					</Vreme>
					<Skor>6</Skor>
				</Red>
			</Container>
		</>
	)
}
export default App
