import styled from 'styled-components'

type GridListPropsType = {
	template_columns?: string
	justify?: string
	align?: string
	wrap?: string
	gap?: string
	grow?: string
}

export const GridList = styled.div<GridListPropsType>`
  display: grid;
	grid-template-columns: ${props => props.template_columns || 'auto'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || 'unset'};
`