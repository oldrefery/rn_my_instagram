import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconSVGProps} from '../../types/common';
export const IconMessage = ({size = 24, color = 'black'}: IconSVGProps) => (
  <Svg
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={size}
    height={size}>
    <Path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </Svg>
);
