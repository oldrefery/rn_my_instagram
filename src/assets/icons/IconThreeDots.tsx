import Svg, {Path} from 'react-native-svg';
import {IconSVGProps} from '../../types/common';

export const IconThreeDots = ({style, size = 16}: IconSVGProps) => (
  <Svg viewBox="0 0 32 32" width={size} height={size} style={style}>
    <Path d="M16 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM16 13c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM16 22c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
  </Svg>
);
