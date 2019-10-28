
import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import { Platform, ProgressBarAndroid, StyleSheet, Image, ImageBackground, Text, Alert, View } from 'react-native';
import { DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';
let i = 0;
const cards = [
  {
    name: 'Nick',
    age: '25',
    note: 'employee at oracle',
    image: [require('./img/1.jpg'), require('./img/3.jpg')]
  },
  {
    name: 'Wilson',
    age: '32',
    note: 'prof at university',
    image: [require('./img/2.jpg'),]
  },
  {
    name: 'Marie',
    age: '27',
    note: 'student',
    image: [require('./img/3.jpg'),]
  },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [],
      inumber: 0,
      prog: 0.5,
      trans:'transparent'
    };
  }
  componentDidMount() {
    this.setState({
      img: cards[0].image,
      inumber: 0
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 50 }}>

        </View>
        <DeckSwiper
          looping={true}//looping pictures
          ref={(c) => this._deckSwiper = c}
          dataSource={cards}
          renderEmpty={() =>
            <View style={{ alignSelf: "center" }}>
              <Text>Over</Text>
            </View>
          }
          renderItem={item =>

            <View style={{ alignItems: 'center', elevation: 10 }}>

              <ImageBackground source={item.image[this.state.inumber]} style={{ width: 400, elevation: 10, height: 600 }}>

                <ProgressBarAndroid
                  styleAttr="Horizontal"
                  indeterminate={false}
                  color='transparent'
                  progress={this.state.prog}
                />
                 <Text style={[styles.tex,{color: this.state.trans}]
                        
                    }>{'helo'}
                       
                      </Text>
                <View style={{ alignItems: "flex-start", position: "absolute", bottom: 5, left: 5, right: 0, padding: 15 }}>
                  <View style={{ alignItems: "flex-start", position: "absolute", bottom: 0, left: 0, right: 0, padding: 0 }} >
                    <Button contentStyle={{ height: 598 }} color='black' mode="text" onPress={() => {
                     
                     if (this.state.inumber > 0)
                        this.setState({
                          inumber: this.state.inumber - 1
                        }
                        )
                        
                        let z=this.state.inumber+1
                        let x=1/(item.image.length-1)
                        let y=z*x
                        this.setState({
                        prog:y
                      }
                      )
                       
                    }}>

                    </Button>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                      color: 'white', fontSize: 25,
                      textShadowColor: 'black',
                      textShadowOffset: { width: 1, height: 4 },
                      textShadowRadius: 5
                    }}>
                      {item.name + ' '}
                    </Text>
                    <Text style={{
                      color: 'white', paddingTop: 7, fontSize: 18,
                      textShadowColor: 'black',
                      textShadowOffset: { width: 2, height: 4 },
                      textShadowRadius: 5
                    }}>
                      {'Age :' + item.age}</Text>
                  </View>
                  <Text style={{
                    color: 'white', paddingTop: 7, fontSize: 18,
                    textShadowColor: 'black',
                    textShadowOffset: { width: 2, height: 4 },
                    textShadowRadius: 5
                  }}>
                    {item.note}</Text>
                </View>
                <View style={{ alignItems: "flex-end", position: "absolute", bottom: 0, left: 0, right: 0, padding: 0 }} >
                  <Button contentStyle={{ height: 598 }} mode="text" color='black'
                    onPress={() => {
                      
                      if (this.state.inumber < item.image.length - 1)
                        this.setState({
                          inumber: this.state.inumber + 1
                        }
                        )
                        let x=0
                        x=1/(item.image.length)
                        let y=(this.state.inumber+1)*x
                        this.setState({
                        prog:y,
                        
                      }
                      )
                     
                    }}>

                  </Button>
                </View>
              </ImageBackground>

            </View>

          }
          onSwipeLeft={() => {
            if(this.state.trans=='green'){
              this.setState({
                trans:'transparent'
                
              })
            }
            if(this.state.trans=='transparent'){
              this.setState({
                trans:'green'   
              })
            }

            this.setState({
              inumber: 0,
              
            })
          }
          }
        />

        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 5, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>

          <View style={{ paddingTop: 5 }}>
            <View style={styles.circle1}>
              <Icon name="ios-refresh" style={{ color: "#FFE300", fontSize: 40, transform: [{ rotate: '0deg' }] }} onPress={() => this._deckSwiper._root.swipeRight()} />
            </View>
          </View>
          <View style={styles.circle}>

            <Icon name="ios-add" style={{ color: 'red', fontSize: 40, transform: [{ rotate: '45deg' }] }} onPress={() => this._deckSwiper._root.swipeLeft()} />
          </View>

          <View style={{ paddingTop: 5 }}>
            <View style={styles.circle1}>
              <Icon name="ios-star" style={{ color: "#00DEFF", fontSize: 30, transform: [{ rotate: '0deg' }] }} onPress={() => this._deckSwiper._root.swipeRight()} />
            </View>
          </View>

          <View style={styles.circle}>
            <Icon name="ios-heart" style={{ color: "#00FFAC" }} onPress={() => this._deckSwiper._root.swipeRight()} />
          </View>
          <View style={{ paddingTop: 5 }}>
            <View style={styles.circle1}>
              <Icon name="ios-refresh" style={{ color: "#FFE300", fontSize: 40, transform: [{ rotate: '0deg' }] }} onPress={() => this._deckSwiper._root.swipeRight()} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


    backgroundColor: '#F5FCFF',
  },
  tex:{
    fontSize:25,
    paddingBottom:100,
    paddingRight:40,
    fontSize:32,
  },
  RectangleShapeView: {
    //To make Rectangle Shape
    marginTop: 20,
    width: 40 * 2,
    height: 20,
    backgroundColor: '#14ff5f',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5
  },
  circle1: {
    width: 40,
    height: 40,

    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5
  },

});
