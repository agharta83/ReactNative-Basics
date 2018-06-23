import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native';

import Nav from './src/Nav/nav';
import Generate from './src/Generator/generate';
import ListItem from './src/Generator/listItem';
import Input from './src/Input/input';
import PickerComponent from './src/Picker/picker';
import Boat from './src/assets/boat.jpg'
import ModalComponent from './src/Modal/modal';

class App extends Component {

  state = {
    nameOfApp: "My awesome app",
    random: [20, 13],
  }

  onAddRamdom = () => {
    const random = Math.floor(Math.random()*100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      }
    })
  }

  onItemDelete = (i) => {
    const newArray = this.state.random.filter((item, index) => {
      return i !== index;
    });
    this.setState({
      random: newArray,
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Nav nameOfApp={this.state.nameOfApp} />

        <ScrollView
          style={{width: '100%'}}
          // onContentSizeChange={(w,h) => alert(h)}
          // onMomentumScrollBegin={() => alert('begin')}
          // onMomentumScrollEnd={() => alert('end')}
          // onScroll={() => alert('scrolling')}
        >

          <View style={styles.wrapper}>
            <Generate add={this.onAddRamdom} />
            <ListItem items={this.state.random} delete={this.onItemDelete} />

            {/* <Input /> */}

            {/* <PickerComponent />

            <ActivityIndicator
              size= 'large'
              color= 'red'
              animating={this.state.loading}
            /> */}

            {/* <Image
              source={Boat}
              style={styles.boat}
              resizeMode="contain"
              onLoadEnd={() => alert ('image loaded')}
            />

            <Image
              source={{uri:'https://picsum.photos/400/400'}}
              style={styles.boat}
              resizeMode="contain"
              onLoadEnd={() => alert ('image loaded')}
            /> */}

            <ModalComponent />

          </View>
          
        </ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  wrapper: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  boat: {
    width: '100%',
    height: 300,
    marginTop: 20,
  }
});

export default App;
