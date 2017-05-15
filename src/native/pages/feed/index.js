import React, { Component } from 'react';
import Page from '../Page';
import fetch from '../../../common/utils/fetch';
import getLocale from '../../../common/utils/getLocale';
import { fetchFeed } from '../../../common/stores/feed/actions';
import Image from '../../components/Image';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import color from 'color';
import { appStyles, colourStyles, colours } from '../../styles';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export class Feed extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: getLocale(screenProps, 'pages.feed.title'),
    headerTintColor: colours.green,
    headerStyle: {
      backgroundColor: color(colours.greenDark).darken(0.2).string(),
    },
  });

  render() {
    const { screenProps } = this.props;
    const { loading, error, data } = screenProps.feed;
    const containerStyles = [appStyles.container, styles.container];

    if (error) {
      return (
        <View style={containerStyles}>
          <Error error={getLocale(screenProps, 'pages.errors.feed')} />
        </View>
      );
    }

    if (loading) {
      return (
        <View style={containerStyles}>
          <Loading
            styles={{
              icon: { color: colours.black },
              text: { color: colours.black },
            }}
          />
        </View>
      );
    }

    return (
      <View style={containerStyles}>
        <ScrollView style={[appStyles.pageContainer]}>
          {data.map(({ data: { id, title, thumbnail } }) => (
            <View key={id} style={[styles.postContainer]}>
              <Image
                style={[styles.postImage]}
                indicatorSize={30}
                source={{ uri: thumbnail }}
              />
              <Text style={[styles.postText, colourStyles.white]}>{title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.greenDark,
  },
  postContainer: {
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 10,
    borderBottomColor: colours.green,
    borderBottomWidth: 1,
    height: 50,
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'row',
  },
  postImage: {
    width: 40,
    height: 40,
  },
  postText: {
    backgroundColor: 'transparent',
    height: 50,
    paddingLeft: 10,
  },
});

export default fetch(fetchFeed)(Page(Feed));
