import {StyleSheet} from 'react-native';
import {size, weights} from '../../theme/fonts';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  postContainer: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userAndLocationContainer: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: weights.bold,
    color: colors.black,
  },
  postLocation: {
    color: colors.gray,
  },
  actionIcon: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  actionsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconFooter: {
    marginHorizontal: 5,
  },
  rightIcon: {
    marginLeft: 'auto',
  },
  boldText: {
    fontWeight: weights.bold,
  },
  grayText: {
    color: colors.gray,
  },
  likedContainer: {
    marginTop: 10,
  },
  allCommentsText: {
    color: colors.gray,
    marginVertical: 5,
  },
  agePost: {
    fontSize: size.xs,
    color: colors.gray,
  },

  description: {},
});
