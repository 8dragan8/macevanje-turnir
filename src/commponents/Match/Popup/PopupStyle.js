import styled from "styled-components"

export const Container = styled.div`
	display: ${props => (props.show ? "flex" : "none")};
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0, .8);
	padding: 80px 20%;

`
