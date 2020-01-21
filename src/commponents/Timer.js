import React from "react"

const Timer = ({ t }) => {
	const secToString = t => `${Math.floor(t / 60)}:${(`0` + String(t % 60)).slice(-2)}`
	return (
		<div>
			<h1>{secToString(t)}</h1>
		</div>
	)
}

export default Timer
