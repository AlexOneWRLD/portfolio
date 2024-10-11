import React from 'react'
import styled from 'styled-components'
import { FlexList } from '../../../components/styles-components/flex-list/FlexList'
import { FlexWrapper } from '../../../components/styles-components/flexwrapper/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { SubtitleSection } from '../../../components/styles-components/subtitle/SubtitleSection'
import { TitleSection } from '../../../components/styles-components/title/TitleSection'


const skillInfo = [
	{ iconId: "html", width: "120", height: '120', viewBox: '0 0 120 120', },
	{ iconId: "css", width: "120", height: '120', viewBox: '0 0 120 120', },
	{ iconId: "js", width: "120", height: '120', viewBox: '0 0 120 120', },
	{ iconId: "react", width: "113", height: '101', viewBox: '0 0 113 101', },
	{ iconId: "vector", width: "105", height: '100', viewBox: '0 0 105 100', },
	{ iconId: "bootstrap", width: "88", height: '88', viewBox: '0 0 88 88', },
	{ iconId: "tailwind", width: "131", height: '131', viewBox: '0 0 131 131', },
	{ iconId: "sass", width: "117", height: '87', viewBox: '0 0 117 87', },
	{ iconId: "git", width: "105", height: '105', viewBox: '0 0 105 105', },
	{ iconId: "greensock", width: "120", height: '120', viewBox: '0 0 120 120', },
	{ iconId: "vscode", width: "112", height: '112', viewBox: '0 0 112 112', },
	{ iconId: "github", width: "88", height: '88', viewBox: '0 0 88 88', },
]
export const Skills = () => {
	return (
		<SectionSkill>
			<FlexWrapper direction={"column"}>
				<TitleSection>My Tech Stack</TitleSection>
				<SubtitleSection> Technologies I’ve been working with recently</SubtitleSection>
				<FlexList wrap={"wrap"} gap={"78px 99px"}>
					{skillInfo.map((el,i)=>{
						return (<li key={i}><Icon iconId={el.iconId} width={el.width} height={el.height} viewBox={el.viewBox} /></li>)
					})}
				</FlexList>
			</FlexWrapper>
		</SectionSkill>
	)
}

const SectionSkill = styled.section`
  margin: 190px 0 215px 0;
`
