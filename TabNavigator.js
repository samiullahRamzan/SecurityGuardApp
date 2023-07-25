import { StyleSheet, View } from 'react-native';
import { BottomNavigator } from './Components/BottomDrawer';

export default function TabNavigatorScreen() {
  return (
    <View style={{flex:1}}>
      <BottomNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
