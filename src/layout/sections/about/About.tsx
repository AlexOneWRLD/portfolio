import React from 'react'
import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

export const About: React.FC = () => {
	return (
		<AboutSection>
			<AboutTitle>About Me</AboutTitle>
			<AboutText>
				<p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
					future website. It helps you to combine slides, panels and other components and export it as a set of static
					files: HTML/CSS/JS.</p>
			</AboutText>
			<AboutTitle>Work Experience</AboutTitle>
		</AboutSection>
	)
}

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