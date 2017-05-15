import { StyleSheet } from 'react-native';
import { colours } from './colours';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.black,
  },
  pageContainer: {
    flex: 1,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  paragraph: {
    color: colours.blueLight,
    fontSize: 16,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderColor: colours.white,
  },
  triangleDown: {
    top: 2,
    transform: [{ rotate: '180deg' }],
  },
  triangleLeft: {
    transform: [{ rotate: '-90deg' }],
  },
  triangleRight: {
    transform: [{ rotate: '90deg' }],
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colours.white,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: colours.white,
    borderWidth: 1,
    borderRadius: 4,
  },
});
