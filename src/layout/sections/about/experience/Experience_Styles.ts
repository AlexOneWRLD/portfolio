import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styles-components/flexwrapper/FlexWrapper'
import { font } from '../../../../styles/Common'
import { theme } from '../../../../styles/Theme'


const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 25px;
  margin-bottom: 30px;
  border-bottom: 2px solid ${theme.colors.subTitle};
	
  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: row;
    }
  }
`

const ExperiencePosition = styled.p `
  ${font({ weight: 400, lineHeight: 1.4, color: theme.colors.font, Fmax: 20, Fmin: 14 })};

  margin-bottom: 10px;
	letter-spacing: 0.05em;
`

const ExperienceText = styled.p`
  ${font({ weight: 500, lineHeight: 2.3, color: theme.colors.subTitle, Fmax: 12, Fmin: 10 })};

  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`

const ExperienceTime = styled.p `
	${font({weight:600,lineHeight:2.8,color:theme.colors.primaryBg,Fmax:9,Fmin:7})};
	
	height: 24px;
	padding: 1px 20px;
	border-radius: 100px;
	background-color: ${theme.colors.font};
`

export const S = {
	ExperienceWrapper,
	ExperiencePosition,
	ExperienceText,
	ExperienceTime
}