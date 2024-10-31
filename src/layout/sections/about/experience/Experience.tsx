import React from 'react'
import { Icon } from '../../../../components/icon/Icon'
import { FlexWrapper } from '../../../../components/styles-components/flexwrapper/FlexWrapper'
import { S } from './Experience_Styles'


type  WorkExperiencePropsType = {
	position: string,
	location: string,
	city: string,
	time: string,
	date: string
}

export const Experience = (props: WorkExperiencePropsType) => {
	return (
		<S.ExperienceWrapper>
			<div>
				<S.ExperiencePosition>{props.position}</S.ExperiencePosition>
				<FlexWrapper gap={'40px'}>
					<S.ExperienceText><Icon iconId={'home'} width={'7px'} height={'9px'} viewBox={'0 0 7 9'} />{props.location}
					</S.ExperienceText>
					<S.ExperienceText><Icon iconId={'pin'} width={'12px'} height={'12px'} viewBox={'0 0 12 12'} />{props.city}
					</S.ExperienceText>
				</FlexWrapper>
			</div>
			
			<FlexWrapper direction={'column'} align={'flex-end'} gap={'10px'}>
				<S.ExperienceTime>{props.time}</S.ExperienceTime>
				<S.ExperienceText><Icon iconId={'date'} width={'12px'} height={'10px'} viewBox={'0 0 12 10'} />{props.date}
				</S.ExperienceText>
			</FlexWrapper>
		</S.ExperienceWrapper>
	)
}
