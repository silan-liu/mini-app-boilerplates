import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState(prev => ({
      count: prev.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to DY mini App!</Text>
        <Text style={styles.instructions}>
          {count > 0 ? `Your click ${count} times.` : 'To get started, click the Add Button.'}
        </Text>
        <View style={styles.button}>
          <Button title="Add" onPress={this.add} />
        </View>
        <View style={styles.imageRow}>
          <Image style={styles.imageIcon} source={require('./assets/ticked.png')} />
          <Image
            style={styles.imageIcon}
            source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png' }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B00D23',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  button: {
    width: 80,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  imageIcon: {
    height: 30,
    width: 30,
  },
});
