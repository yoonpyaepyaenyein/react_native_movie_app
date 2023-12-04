import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {palette} from '../../src/utils/theme/colors';

const ForwardIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width={props.width}
    height={props.height}
    viewBox="0 0 18 15">
    <G fill="none" fillRule="evenodd">
      <Path d="M17 22H-7V-2h24z" opacity={0.87} />
      <Path
        fill={palette.white}
        d="M.38 19.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L2.15.98a1.25 1.25 0 0 0-1.77 0 1.25 1.25 0 0 0 0 1.77L7.62 10 .37 17.25c-.48.48-.48 1.28.01 1.76Z"
      />
    </G>
  </Svg>
);
export default ForwardIcon;
