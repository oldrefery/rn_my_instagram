import {Text, View} from 'react-native';
import {IconEmptyHeart} from '../../assets/icons/IconEmptyHeart';
import {colors} from '../../theme/colors';
import {IComment} from '../../types/models';
import {styles} from './Comment.styles';

interface CommentProps {
  comment: IComment;
}
export const Comment = ({comment}: CommentProps) => {
  return (
    <View style={styles.commentContainer}>
      <Text>
        <Text style={styles.boldText}>{comment.user.username}</Text>
        {comment.comment}
      </Text>
      <IconEmptyHeart
        color={colors.gray}
        size={16}
        style={styles.commentIcon}
      />
    </View>
  );
};
