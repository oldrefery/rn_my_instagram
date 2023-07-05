import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconSVGProps} from '../../types/common';
export const IconComment = ({size = 24, style}: IconSVGProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size} style={style}>
    <Path d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3Zm1 16.59-2.29-2.3A1 1 0 0 0 17 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z" />
  </Svg>
);
