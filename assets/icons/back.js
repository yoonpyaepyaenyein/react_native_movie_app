import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../src/utils/theme/colors';
const BackIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    stroke={palette.white}
    fill={palette.white}
    height={props.height}
    width={props.width}
    {...props}>
    <Path
      fill={palette.white}
      fillRule="evenodd"
      d="M31.106 15H3.278l8.325-8.293a.999.999 0 1 0-1.414-1.414l-9.9 9.899a1.01 1.01 0 0 0 0 1.414l9.9 9.9a.999.999 0 1 0 1.414-1.414L3.278 17h27.828a1 1 0 0 0 0-2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BackIcon;
