import {StyleSheet} from 'react-native';
import {weights} from '../../theme/fonts';

export const styles = StyleSheet.create({
  commentContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: weights.bold,
  },
  commentIcon: {
    marginLeft: 'auto',
  },
});
