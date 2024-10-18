import styled from 'styled-components'

type FlexListPropsType = {
	direction?: string
	justify?: string
	align?: string
	wrap?: string
	gap?: string
	grow?: string
}

export const FlexList = styled.div<FlexListPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || 'unset'};
	flex-grow:${props => props.grow || 'unset'} ;
`