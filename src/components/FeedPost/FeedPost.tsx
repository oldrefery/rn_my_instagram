import {Image, Text, View} from 'react-native';
import {colors} from '../../theme/colors';
import {IconThreeDots} from '../../assets/icons/IconThreeDots';
import {IconEmptyHeart} from '../../assets/icons/IconEmptyHeart';
import {IconComment} from '../../assets/icons/IconComment';
import {IconMessage} from '../../assets/icons/IconMessage';
import {IconEmptyBookmark} from '../../assets/icons/IconEmptyBookmark';
import {styles} from './FeedPost.styles';

const user = {
  id: 1,
  name: 'thisisthehague',
  avatar:
    'https://www.dutchnews.nl/wpcms/wp-content/uploads/2023/07/Wikipedia_Minister_Arie_Slob-RS.jpg',
};
const post = {
  description: 'Hermione or Hargrid?',
  user,
  image:
    'https://www.dutchnews.nl/wpcms/wp-content/uploads/2022/02/IMG_8870.jpg',
  location: 'Stockholm, Sweden',
  likedCount: 38394,
  commentCount: 122,
  age: '6 days ago',
};

export const FeedPost = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={{uri: post.image}} style={styles.avatar} />
        <View style={styles.userAndLocationContainer}>
          <Text style={styles.userName}>{post.user.name}</Text>
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
            <Text style={styles.boldText}>{post.likedCount} others</Text>
          </Text>
        </View>
        <Text>
          <Text style={styles.boldText}>{post.user.name} </Text>
          {post.description}
          <Text style={styles.grayText}>... more</Text>
        </Text>
        <View style={styles.commentContainer}>
          <Text>
            <Text style={styles.boldText}>sarra.soualahalila </Text>
            To tick a clock or watch
          </Text>
          <IconEmptyHeart
            color={colors.gray}
            size={16}
            style={styles.commentIcon}
          />
        </View>
        <Text style={styles.allCommentsText}>
          View all {post.commentCount} comments
        </Text>
        <Text style={styles.agePost}>{post.age}</Text>
      </View>
    </View>
  );
};
