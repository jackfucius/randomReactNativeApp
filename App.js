import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Button from 'react-native-button';

function Separator() {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {resultText: ""};
  }

  flipCoin() {
    this.setState({resultText: "Flipping..."});
    setTimeout(
      () => {
        let x = Math.floor(Math.random() * 2) == 0;
        if(x) {
          this.setState({resultText: "head"});
        } else {
          this.setState({resultText: "tail"});
        }
      },
      1000
    );
  }

  genNumber(){
    this.setState({resultText: "Randoming..."});
    setTimeout(
      () => {
        let x = Math.floor(Math.random() * 100) + 1;
        this.setState({resultText: x});
      },
      1000
    );
  }

  render () {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic"style={styles.scrollView}>
            <View>
              <Text style={styles.header}>Jackson's Random App</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                  <Button
                    style={styles.buttonCoin}
                    onPress={() => this.flipCoin()}
                    accessibilityLabel="Gives the result of a flipped coin"
                  >
                    Flip a coin
                  </Button>
                  <Separator />
                  <Button
                    style={styles.buttonNumber}
                    onPress={() => this.genNumber()}
                    title="Random number from 1-100"
                    accessibilityLabel="Gives you a random number"
                  >
                    Random number from 1-100
                  </Button>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.resultText}>
                  {this.state.resultText}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  header: {
      fontSize: 30,
      padding: 10,
      fontWeight: '600',
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'white',
  },
  separator: {
      marginVertical: 8,
  },
  buttonCoin: {
    color: 'white',
    backgroundColor: '#FFD700',
    padding: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonNumber: {
    color: 'white',
    backgroundColor: '#40E0D0',
    padding: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  resultText: {
    fontSize: 40,
    marginTop: 30,
    padding: 10,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
});