import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { S } from './About_Styles'
import { Experience } from './experience/Experience'

const workExperienceItem = [
	{
		position: 'Junior Web Developer',
		location: 'Dr. Rajkumсar’s Learning App',
		city: 'Bengaluru',
		time: 'Full Time',
		date: 'Sep 2021 - Dec 2021'
	},
	{
		position: 'Web Development Intern',
		location: 'IonPixelz Web Solutions',
		city: 'Bengaluru',
		time: 'Internship',
		date: 'Sep 2021 - Dec 2021'
	},
	{
		position: 'SEO / SEM Specialist',
		location: 'HAAPS',
		city: 'Bengaluru',
		time: 'Internship',
		date: 'Sep 2021 - Dec 2021'
	}
]

export const About: React.FC = () => {
	return (
		<S.AboutSection id={'about'}>
			<Fade cascade={true} damping={0.5}>
			<S.AboutTitle>About Me</S.AboutTitle>
			<S.AboutText>
				<p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
					future website. It helps you to combine slides, panels and other components and export it as a set of static
					files: HTML/CSS/JS.</p>
			</S.AboutText>
			<S.AboutTitle>Work Experience</S.AboutTitle>
			{workExperienceItem.map((el, i) => {
			return <Experience key={i} position={el.position} location={el.location} city={el.city} time={el.time} date={el.date} />
		})}
		</Fade>
		</S.AboutSection>
	)
}

