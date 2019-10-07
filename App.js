import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Content>
          <Card>
            <CardItem header>
              <Text>Card 1</Text>
            </CardItem>
            <CardItem Body>
                <Text>
                  Hello Android
                </Text>
            </CardItem>
            <CardItem footer>
              <Text>NHello from footer</Text>
            </CardItem>
         </Card>
         <Card>
           <CardItem header>
             <Text>Simple 2</Text>
           </CardItem>
           <CardItem body>
             <Text>Hello from card 2</Text>
           </CardItem>
         </Card>
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={{uri: 'https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png'}} />
               <Body>
                 <Text>Medium</Text>
                 <Text note>Blog</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem>
             <Body>
              <Image source = {
                {uri:'http://wallpaperheart.com/wp-content/uploads/2018/05/vaporwave-wallpapers-city.jpg'}
              } 
              style = {{height: 200, width: null, flex: 1}}/>
              <Text>
                lhdjkhkjdshbjkdgs
              </Text>
             </Body>
           </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}