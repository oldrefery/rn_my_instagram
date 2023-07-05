import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconSVGProps} from '../../types/common';
export const IconFullBookmark = ({size = 21, color = 'red'}: IconSVGProps) => (
  <Svg viewBox="0 0 384 512" width={size} height={size} fill={color}>
    <Path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
  </Svg>
);
