import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'


const AboutSection = styled.section`
  width: 100%;
  max-width: 710px;
  margin-bottom: 200px;
`

const AboutTitle = styled.h2`
  ${font({ weight: 700, lineHeight: 1.2, color: theme.colors.font, Fmax: 42, Fmin: 22 })};
  margin-bottom: 40px;
`

const AboutText = styled.div`
  margin-bottom: 40px;

  p:not(last-child) {
    margin-bottom: 12px;
  }
`

export const S = {
	AboutSection,
	AboutTitle,
	AboutText
}