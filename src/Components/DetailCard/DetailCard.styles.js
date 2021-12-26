import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {width} = Dimensions.get('window');

const SPACING = 10;

const styles = StyleSheet.create({
  image: {
    height: 175,
    width: width / 3 - SPACING * 2,
    resizeMode: 'cover',
    margin: SPACING,
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0.2,
    borderColor: colors.tomato,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.white,
  },
  button: {
    right: 10,
    top: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    position: 'absolute',
  },
  image_color_container: {
    backgroundColor: '#00000022',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  linear: {
    padding: 10,
  },
});
export default styles;