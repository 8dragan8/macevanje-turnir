import React, { useState, useEffect } from "react"

import {Container, Red, Igrac, Split, Skor, Vreme } from "./MatchStyle"

import Timer from "./Timer"


const Match = ({int}) => {

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
		<Container>
			<Red>
				<Igrac>1</Igrac>
				<Split></Split>
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
	)
}

export default Match
