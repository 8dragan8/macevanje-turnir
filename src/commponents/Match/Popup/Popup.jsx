import React from "react"

import * as Styled from "./PopupStyle"

const Popup = ({ show, children }) => {
	return <Styled.Container show={show}>
		{children}
		</Styled.Container>
}

export default Popup
