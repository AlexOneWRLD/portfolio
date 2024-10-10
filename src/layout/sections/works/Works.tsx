import React from 'react'
import styled from 'styled-components'
import { FlexList } from '../../../components/styles-components/flex-list/FlexList'
import { FlexWrapper } from '../../../components/styles-components/flexwrapper/FlexWrapper'
import { SubtitleSection } from '../../../components/styles-components/subtitle/SubtitleSection'
import { TitleSection } from '../../../components/styles-components/title/TitleSection'
import { Work } from './work/Work'
import socialImg from '../../../assets/img/project/proj-1.png'
import socialImg2 from '../../../assets/img/project/proj-2.png'
import socialImg3 from '../../../assets/img/project/proj-3.png'
import socialImg4 from '../../../assets/img/project/proj-4.png'
import socialImg5 from '../../../assets/img/project/proj-5.png'
import socialImg6 from '../../../assets/img/project/proj-6.png'

const data = [
	{
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		stack: 'HTML , JavaScript, SASS, React',
		src: socialImg,
		alt: 'project'
	},
	{
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		stack: 'HTML , JavaScript, SASS, React',
		src: socialImg2,
		alt: 'project'
	},
	{
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		stack: 'HTML , JavaScript, SASS, React',
		src: socialImg3,
		alt: 'project'
	},
	{
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		stack: 'HTML , JavaScript, SASS, React',
		src: socialImg4,
		alt: 'project'
	},
	{
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		stack: 'HTML , JavaScript, SASS, React',
		src: socialImg5,
		alt: 'project'
	},
	{
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		stack: 'HTML , JavaScript, SASS, React',
		src: socialImg6,
		alt: 'project'
	}
]
export const Works = () => {
	return (
		<SectionWorks>
			<FlexWrapper direction={'column'}>
				<TitleSection>Projects</TitleSection>
				<SubtitleSection>Things I’ve built so far</SubtitleSection>
				
				<FlexList wrap={'wrap'} gap={'40px'}>
					{
						data.map((el, index, arr) => {
							return <Work key={index} title={el.title}
							             text={el.text}
							             stack={el.stack}
							             src={el.src}
							             alt={el.alt} />
						})
					}
				</FlexList>
			</FlexWrapper>
		</SectionWorks>
	)
}


const SectionWorks = styled.div`
  margin: 0 0 180px 0;
  background-color: cadetblue;
`