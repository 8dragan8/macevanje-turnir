import styled from "styled-components"

export const FlexRow = styled.div`
	display: flex;
	position: relative;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
`
export const FlexCol = styled.div`
	display: flex;
	position: relative;
	flex-flow: column nowrap;
`
export const Container = styled(FlexCol)`
	width: 100vw;
	height: 100vh;
`
export const Red = styled(FlexRow)`
	width: 100%;
	height: 50%;
`

export const Igrac = styled(FlexRow)`
	display: flex;
	flex: 1 0 40%;
	background-color: #001100;
	height: 100%;
`
export const Split = styled(FlexRow)`
	display: flex;
	flex: 0 0 20%;
	background-color: #0011ff;
	height: 100%;
`
export const Skor = styled(FlexRow)`
	display: flex;
	flex: 0 0 30%;
	background-color: #ff1100;
	height: 100%;
`
export const Vreme = styled(FlexCol)`
	align-items: center;
	justify-content: center;
	height: 100%;
	display: flex;
	flex: 0 0 40%;
	background-color: #001100;
`
export const CommandBar = styled(FlexRow)`
	width: 95%;
	align-self: flex-end;
	flex-wrap: wrap;

`
export const Command = styled.button`
	flex: 1 0 auto;
	padding: 0.5em 0.2em;
`
