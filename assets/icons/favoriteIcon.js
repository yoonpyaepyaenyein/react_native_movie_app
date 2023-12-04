import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../src/utils/theme/colors';
const FavoriteTabIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.height}
    height={props.width}
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <Path
      fill={palette.black}
      fillRule="evenodd"
      d="M160.32 84C107.285 84 64 127.503 64 181.529c0 23.265 8.025 44.573 21.413 61.316l144.747 173.02c13.546 16.18 38.134 16.18 51.68 0l144.747-173.02C439.975 226.102 448 204.794 448 181.529 448 127.503 404.715 84 351.68 84c-34.588 0-64.999 18.459-82.02 46.365a16 16 0 0 1-27.32 0C225.319 102.459 194.908 84 160.32 84ZM32 181.529C32 110.154 89.29 52 160.32 52c38.073 0 72.218 16.738 95.68 43.218C279.462 68.738 313.607 52 351.68 52 422.71 52 480 110.154 480 181.529c0 30.832-10.693 59.203-28.552 81.465-.068.085-.138.17-.208.254L306.38 436.402l-.003.004c-26.336 31.459-74.418 31.459-100.754 0l-.003-.004L60.76 263.248c-.07-.084-.14-.169-.208-.254C42.692 240.732 32 212.361 32 181.529Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default FavoriteTabIcon;
