import React, { Component, PropTypes } from 'react';
import Page from '../Page';
import color from 'color';
import { FEED } from '../../../common/routes';
import getLocale from '../../../common/utils/getLocale';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { colours, colourStyles, appStyles } from '../../styles';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export class Home extends Component {
  static propTypes = {
    screenProps: PropTypes.shape({
      locale: PropTypes.shape({
        pages: PropTypes.shape({
          home: PropTypes.shape({
            title: PropTypes.string.isRequired,
            intro: PropTypes.string.isRequired,
            button: PropTypes.string.isRequired,
          }),
        }).isRequired,
      }),
    }),
  };

  render() {
    const { navigation: { navigate }, screenProps } = this.props;
    const { title, intro, button } = getLocale(screenProps, 'pages.home');

    return (
      <View key="page" style={[styles.container, appStyles.pageContainer]}>
        <ScrollView contentContainerStyle={[appStyles.centeredView]}>
          <Text style={[styles.header, colourStyles.orange]}>
            {title}
          </Text>
          <Text style={[appStyles.paragraph, colourStyles.orangeDark]}>
            {intro}
          </Text>
          <FAIcon name="globe" style={styles.icon} />
          <TouchableOpacity onPress={() => navigate(FEED)}>
            <Text style={[appStyles.button, styles.button]}>
              <FAIcon name="reddit-alien" style={styles.buttonIcon} />
              {'  '}
              {button}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Page(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.blueDark,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 100,
    marginTop: 20,
    color: color(colours.blueDark).lighten(0.3).string(),
  },
  buttonContent: {
    marginLeft: 5,
  },
  buttonIcon: {
    fontSize: 20,
    right: -4,
  },
});
