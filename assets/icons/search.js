import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {palette} from '../../src/utils/theme/colors';
const SearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={palette.white}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 32 32"
    width={props.width}
    height={props.height}
    {...props}>
    <Circle cx={14} cy={14} r={12} />
    <Path d="m23 23 7 7" />
  </Svg>
);
export default SearchIcon;
