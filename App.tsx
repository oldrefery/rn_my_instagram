import {SafeAreaView} from 'react-native';
import {FeedPost} from './src/components/FeedPost/FeedPost';
import {IPost} from './src/types/models';

const post: IPost = {
  id: '1',
  createdAt: '01 July 2023',
  image:
    'https://nltimes.nl/sites/nltimes.nl/files/styles/news_article_full_desktop_2x/public/2023-05/Depositphotos_210938732_XL.jpg',
  description:
    'Former football star Edwin van der Sar hospitalized after cerebral hemorrhage',
  user: {
    id: '1',
    image:
      'https://nltimes.nl/sites/nltimes.nl/files/styles/news_article_full_desktop_2x/public/2019/12/depositphotos_81342398_xl-2015.jpg',
    username: 'creaola',
  },
  commentsCount: 11,
  likesCount: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        id: '2',
        username: 'parsien.la',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: '3',
        username: 'croatia.blanditis',
      },
    },
  ],
  location: 'The Hague, The Netherlands',
};
const App = () => {
  return (
    <SafeAreaView>
      <FeedPost post={post} />
    </SafeAreaView>
  );
};

export default App;
