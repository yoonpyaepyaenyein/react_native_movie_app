import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../src/utils/theme/colors';
const IsFavoriteIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: 'new 0 0 16 16',
    }}
    viewBox="0 0 16 16"
    width={props.width}
    height={props.height}
    fill={palette.secondary}
    {...props}>
    <Path d="M8.612 2.347 8 2.997l-.612-.65c-1.69-1.795-4.43-1.795-6.12 0-1.69 1.795-1.69 4.706 0 6.502l.612.65L8 16l6.12-6.502.612-.65c1.69-1.795 1.69-4.706 0-6.502-1.69-1.795-4.43-1.795-6.12.001z" />
  </Svg>
);
export default IsFavoriteIcon;
