import { fluid } from '@/Styled/functions';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  width: ${ fluid(152, 19.2, 192) };
`

const ApplicationLogo = () => {
	
  return (
		<StyledSvg xmlns="http://www.w3.org/2000/svg" width="195" height="36" viewBox="0 0 195 36">
      <g id="logo" transform="translate(-101)">
    	<text id="PlumeBooks" transform="translate(135 28)" fill="#102233" fontSize="26" fontFamily="NotoSans-Bold, Noto Sans" fontWeight="700"><tspan x="0" y="0">PlumeBooks</tspan></text>
    	<path id="plume-book" d="M1.5,6h6A1.5,1.5,0,0,1,9,7.5v21A1.5,1.5,0,0,1,7.5,30h-6A1.5,1.5,0,0,1,0,28.5V7.5A1.5,1.5,0,0,1,1.5,6ZM3,19.5v6a1.5,1.5,0,1,0,3,0v-6a1.5,1.5,0,1,0-3,0ZM12,0h6a1.5,1.5,0,0,1,1.5,1.5v27A1.5,1.5,0,0,1,18,30H12a1.5,1.5,0,0,1-1.5-1.5V1.5A1.5,1.5,0,0,1,12,0Zm1.5,16.5v9a1.5,1.5,0,0,0,3,0v-9a1.5,1.5,0,1,0-3,0ZM22.5,3h6A1.5,1.5,0,0,1,30,4.5v24A1.5,1.5,0,0,1,28.5,30h-6A1.5,1.5,0,0,1,21,28.5V4.5A1.5,1.5,0,0,1,22.5,3ZM24,22.5v3a1.5,1.5,0,0,0,3,0v-3a1.5,1.5,0,0,0-3,0Z" transform="translate(101 3)" fill="#ff4747" fillRule="evenodd" opacity="0.9"/>
      </g>
    </StyledSvg>
	)
}


export default ApplicationLogo