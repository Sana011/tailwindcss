import { createGlobalStyle, css } from "styled-components"
import theme from "./Theme"

const Global = createGlobalStyle`${css`
	body {
		font-family: ${({ theme }) => theme.font.family};
		color: ${({ theme }) => theme.colors.darkGray};
		
	}



 
`}`

export default Global
