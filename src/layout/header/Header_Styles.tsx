import styled from 'styled-components'
import { theme } from '../../styles/Theme'

const StyledHeader = styled.header`
  padding: 40px 0 0 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: ${theme.colors.primaryBg};
	z-index: 1000;
`

const SocialWrapper = styled.div`
  @media ${theme.media.lowDisplay} {
    display: none;
  }
`

export const S = {
	StyledHeader,
	SocialWrapper
}