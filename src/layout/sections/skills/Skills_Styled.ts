import styled from 'styled-components'
import { GridList } from '../../../components/styles-components/GridList/GridList'
import { theme } from '../../../styles/Theme'


const SectionSkill = styled.section`
  position: relative;
	margin: 10px 0 215px 0;
	
	${GridList} {
		@media ${theme.media.midDisplay}{
			grid-template-columns: repeat(4,1fr);
		}
		@media ${theme.media.lowDisplay}{
			grid-template-columns: repeat(3,1fr);
			gap: 20px 40px;
		}
		@media ${theme.media.mobile}{
			grid-template-columns: repeat(2,1fr);
			gap: 30px 10px;
		}
	}
`

const SkillList = styled.ul `
margin: 0 auto;
`

export  const S = {
	SectionSkill,
	SkillList
}