import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export const SubtitleSection = styled.h3`
  font-weight: 400;
	font-size: calc((100vw - 320px) / (1600 - 320) * (32 - 18) + 18px);
  line-height: 0.8125;
  text-align: center;
  color: #a7a7a7;
  margin-bottom: 150px;
	
	@media ${theme.media.mobile}{
		margin-bottom: 50px;
	}
`