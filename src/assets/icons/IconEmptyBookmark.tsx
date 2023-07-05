import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconSVGProps} from '../../types/common';
export const IconEmptyBookmark = ({
  size = 24,
  color = 'black',
  style,
}: IconSVGProps) => (
  <Svg
    style={style}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={size}
    height={size}>
    <Path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </Svg>
);
