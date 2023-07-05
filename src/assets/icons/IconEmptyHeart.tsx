import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconSVGProps} from '../../types/common';

export const IconEmptyHeart = ({size = 24, color = 'black'}: IconSVGProps) => (
  <Svg
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={size}
    height={size}>
    <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Svg>
);
