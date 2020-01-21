import React from "react"

import * as Styled from "./TimerStyle"

const Timer = ({t}) => {
	const secToString = t => `${Math.floor(t / 60)}:${(`0` + String(t % 60)).slice(-2)}`
	return (
		<Styled.Container>
			<h1>{secToString(t)}</h1>
		</Styled.Container>
	)
}

export default Timer
