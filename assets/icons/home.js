import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../src/utils/theme/colors';
const HomeIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    {...props}
    viewBox="0 0 40 20">
    {/* <title>{'home [#1391]'}</title> */}
    <Path
      fill={palette.primary}
      fillRule="evenodd"
      d="M16.8 18h-3.15v-4h-6.3v4H4.2V8.813l6.29-5.99 6.31 6.009V18Zm2.1-9.996V8l-8.398-8L0 9.992l1.482 1.414.618-.593V20h7.35v-4h2.1v4h7.35v-9.168l.614.584 1.487-1.414L18.9 8.004Z"
    />
  </Svg>
);
export default HomeIcon;
