import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class CardComponent extends Component {
  render() {

    const images = {
        "1": require("../assets/img/card.png"),
        "2": require("../assets/img/card.png"),
        "3": require("../assets/img/card.png"),
        "4": require("../assets/img/card.png"),
    }

    return (
      <Card>
          <CardItem>
              <Left>
                  <Thumbnail
                    source={require('../assets/img/me.jpeg')}
                    />
                    <Body>
                        <Text>Agus Cahyono</Text>
                        <Text note>Des 15, 2018</Text>
                    </Body>
              </Left>
          </CardItem>

          <CardItem cardBody>
                <Image
                    source={images[this.props.imageSource]}
                    style={{ height: 200, width: null, flex: 1 }}
                    />
          </CardItem>
          <CardItem style={{ height: 45 }}>
              <Left>
                  <Button transparent>
                        <Icon name="ios-heart-outline" style={{ color: '#4a4a4a'}} />
                  </Button>
                  <Button transparent>
                        <Icon name="ios-chatbubbles" style={{ color: '#4a4a4a'}} />
                  </Button>
                  <Button transparent>
                        <Icon name="ios-send-outline" style={{ color: '#4a4a4a'}} />
                  </Button>
              </Left>
          </CardItem>

          <CardItem>
                <Text>{this.props.likes} likes</Text>
          </CardItem>

          <CardItem>
              <Body>
                  <Text>
                    <Text style={{ fontWeight: "900" }}>Agus </Text>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </Text>
              </Body>
          </CardItem>

 
      </Card>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})