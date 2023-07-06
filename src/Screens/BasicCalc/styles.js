import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const buttonWidth = screenWidth / 4 - 10;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    width: buttonWidth,
  },
});

      
