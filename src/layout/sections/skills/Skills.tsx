import React from 'react'
import styled from 'styled-components'
import { FlexList } from '../../../components/styles-components/flex-list/FlexList'
import { FlexWrapper } from '../../../components/styles-components/flexwrapper/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { GridList } from '../../../components/styles-components/GridList/GridList'
import { SubtitleSection } from '../../../components/styles-components/subtitle/SubtitleSection'
import { TitleSection } from '../../../components/styles-components/title/TitleSection'
import { theme } from '../../../styles/Theme'


const skillInfo = [
	{ iconId: 'html', width: '120', height: '120', viewBox: '0 0 120 120', ariaLabel: 'html' },
	{ iconId: 'css', width: '120', height: '120', viewBox: '0 0 120 120', ariaLabel: 'css' },
	{ iconId: 'js', width: '120', height: '120', viewBox: '0 0 120 120', ariaLabel: 'js' },
	{ iconId: 'react', width: '113', height: '101', viewBox: '0 0 113 101', ariaLabel: 'react' },
	{ iconId: 'vector', width: '105', height: '100', viewBox: '0 0 105 100', ariaLabel: 'vector' },
	{ iconId: 'bootstrap', width: '88', height: '88', viewBox: '0 0 88 88', ariaLabel: 'bootstrap' },
	{ iconId: 'tailwind', width: '131', height: '131', viewBox: '0 0 131 131', ariaLabel: 'tailwind' },
	{ iconId: 'sass', width: '117', height: '87', viewBox: '0 0 117 87', ariaLabel: 'sass' },
	{ iconId: 'git', width: '105', height: '105', viewBox: '0 0 105 105', ariaLabel: 'github' },
	{ iconId: 'greensock', width: '100', height: '100', viewBox: '0 0 120 120', ariaLabel: 'greensock' },
	{ iconId: 'vscode', width: '112', height: '112', viewBox: '0 0 112 112', ariaLabel: 'vscode' },
	{ iconId: 'github', width: '88', height: '88', viewBox: '0 0 88 88', ariaLabel: 'github' }
]
export const Skills = () => {
	return (
		<SectionSkill>
			<FlexWrapper direction={'column'}>
				<TitleSection>My Tech Stack</TitleSection>
				<SubtitleSection> Technologies I’ve been working with recently</SubtitleSection>
				<GridList  gap={'78px 99px'} template_columns={'repeat(6,1fr)'} justify={'space-between'}>
					{skillInfo.map((el, i) => {
						return (
							<SkillList>
								<li key={i}><Icon iconId={el.iconId} width={el.width} height={el.height} viewBox={el.viewBox}
								                  ariaLabel={el.ariaLabel} />
								</li>
							</SkillList>)
					})}
				</GridList>
			</FlexWrapper>
		</SectionSkill>
	)
}

const SectionSkill = styled.section`
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