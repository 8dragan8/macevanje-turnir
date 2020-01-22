import React, { useState, useEffect } from "react"

import { Container, Red, Igrac, Split, Skor, Vreme, CommandBar, Command } from "./MatchStyle"

import Timer from "./Timer"
import Popup from "./Popup"

const Match = ({ data }) => {
	const { time, p1, p2 } = data

	const [isRunning, setIsRunning] = useState(true)
	const [timer, setTimer] = useState(0)
	const [skorP1, setSkorP1] = useState(0)
	const [skorP2, setSkorP2] = useState(0)

	useEffect(() => {
		let interval = null
		if (isRunning && time - timer !== 0) {
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
		if (e.target.value === `1`) {
			setSkorP1(old => old + 1)
		} else if (e.target.value === `2`) {
			setSkorP2(old => old + 1)
		}
		if (timer === 0) {
			setIsRunning(true)
		} else if (time - timer !== 0) {
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
				<Igrac>
					<p>{p1.ime}</p>
					<p>{p1.prezime}</p>
				</Igrac>
				<Split>
					{/* <CommandBar> */}
						<Command onClick={playpause}>Play/Pause</Command>
					{/* </CommandBar> */}
				</Split>
				<Igrac>
					<p>{p2.ime}</p>
					<p>{p2.prezime}</p>
				</Igrac>
			</Red>
			<Red>
				<Skor>{skorP1}</Skor>
				<Vreme>
					<Timer t={time - timer} />
				</Vreme>
				<Skor>{skorP2}</Skor>
			</Red>
			<Popup show={!isRunning}>
				<Command onClick={playpause} value="1">
					Ubod P1
				</Command>
				<Command onClick={reset}>Reset</Command>
				<Command onClick={playpause} value="2">
					Ubod P2
				</Command>
			</Popup>
		</Container>
	)
}

export default Match
