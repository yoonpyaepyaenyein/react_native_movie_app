import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {palette} from '../../src/utils/theme/colors';

const FavoriteIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: 'new 0 0 50 50',
    }}
    viewBox="0 0 50 50"
    width={props.width}
    height={props.height}
    stroke={props.color ? props.color : palette.secondary}
    fill={props.fillColor ? props.fillColor : null}
    {...props}>
    <Path d="M45.281 25.915c4.949-5.004 4.949-13.146 0-18.15A12.556 12.556 0 0 0 36.292 4h-.001c-3.396 0-6.59 1.337-8.991 3.765L25 10.09l-2.3-2.325A12.56 12.56 0 0 0 13.709 4a12.56 12.56 0 0 0-8.99 3.765c-4.949 5.004-4.949 13.146 0 18.15L25 46.422l20.281-20.507zM6.141 9.171A10.575 10.575 0 0 1 13.709 6c2.858 0 5.547 1.126 7.569 3.171L25 12.935l3.722-3.764A10.576 10.576 0 0 1 36.291 6c2.858 0 5.546 1.126 7.568 3.171 4.183 4.229 4.183 11.109 0 15.338L25 43.578 6.141 24.509c-4.183-4.229-4.183-11.11 0-15.338z" />
  </Svg>
);
export default FavoriteIcon;
