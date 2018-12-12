import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import iconHomeTab from '../../assets/img/iconHome.png'
import Icon from 'react-native-vector-icons/Foundation';
import CardComponent from '../CardComponent';

import { Container, Content, Card, Thumbnail } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="home" color={tintColor} size={30} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ height: 100}}>
            <View style={styles.containerStory}>
                <Text style={{ fontWeight: 'bold'}}>Stories</Text>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                  <Icon name="play" style={{ fontSize: 14 }} />
                  <Text style={{ fontWeight: 'bold'}}> Watch All</Text>
                </View>
            </View>
            {/* scrollview story */}
            <View style={{ flex: 3}}>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
                <Thumbnail 
                  style={styles.thumbnailStory}
                  source={ require('../../assets/img/me.jpeg')}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="23" />
          <CardComponent imageSource="2" likes="43" />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }, 
  containerStory: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 7
  },
  thumbnailStory: {
    marginHorizontal: 5,
    borderColor: 'pink',
    borderWidth: 2,
  }
})