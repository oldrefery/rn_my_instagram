import {SafeAreaView, Text} from 'react-native';
import {size} from './src/theme/fonts';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: size.lg}}>App.tsx 2</Text>
    </SafeAreaView>
  );
};

export default App;
