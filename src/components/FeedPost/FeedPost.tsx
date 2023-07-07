import {Image, Text, View} from 'react-native';
import {IconThreeDots} from '../../assets/icons/IconThreeDots';
import {IconEmptyHeart} from '../../assets/icons/IconEmptyHeart';
import {IconComment} from '../../assets/icons/IconComment';
import {IconMessage} from '../../assets/icons/IconMessage';
import {IconEmptyBookmark} from '../../assets/icons/IconEmptyBookmark';
import {styles} from './FeedPost.styles';
import {IPost} from '../../types/models';
import {Comment} from '../Comment/Comment';
interface FeedPostProps {
  post: IPost;
}
export const FeedPost = ({post}: FeedPostProps) => {
  return (
    <View style={styles.postContainer} key={post.id}>
      <View style={styles.header}>
        <Image source={{uri: post.user.image}} style={styles.avatar} />
        <View style={styles.userAndLocationContainer}>
          <Text style={styles.userName}>{post.user.username}</Text>
          {post.location && (
            <Text style={styles.postLocation}>{post.location}</Text>
          )}
        </View>
        <IconThreeDots style={styles.actionIcon} />
      </View>
      <Image source={{uri: post.image}} style={styles.image} />
      <View style={styles.footer}>
        <View style={styles.actionsContainer}>
          <IconEmptyHeart style={styles.iconFooter} />
          <IconComment style={styles.iconFooter} />
          <IconMessage style={styles.iconFooter} />
          <IconEmptyBookmark style={styles.rightIcon} />
        </View>
        <View style={styles.likedContainer}>
          <Text>
            Liked by <Text style={styles.boldText}>rishat.rs</Text> and{' '}
            <Text style={styles.boldText}>{post.likesCount} others</Text>
          </Text>
        </View>
        <Text style={styles.description}>
          <Text style={styles.boldText}>{post.user.name} </Text>
          {post.description}
          <Text style={styles.grayText}>... more</Text>
        </Text>
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
        <Text style={styles.allCommentsText}>
          View all {post.commentsCount} comments
        </Text>
        <Text style={styles.agePost}>{post.createdAt}</Text>
      </View>
    </View>
  );
};
