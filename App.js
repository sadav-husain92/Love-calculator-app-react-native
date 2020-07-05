import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';

import DisplayLove from './components/DisplayLove';

class App extends React.Component {
  state = {
    fname: '',
    sname: '',
    result: '',
  }

  submitit = () => {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "746702cc95mshf1eca7db7d09102p1a409cjsn47c5d0734acc"
      }
    })
      .then(data => data.json()
        .then(data2 => {
          this.setState({ result: data2 })
        }))

  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: "center" }} />

        </Appbar.Header>
        <TextInput
          label="First Person (Male)"
          value={this.state.fname}
          onChangeText={text => this.setState({ fname: text })} />

        <TextInput
          label="Second Person (Female)"
          value={this.state.sname}
          onChangeText={text => this.setState({ sname: text })} />
        <Button
          style={{ margin: 10 }}
          icon="face"
          mode="contained"
          onPress={this.submitit}>
          CALCULATE
          </Button>

        <DisplayLove data={this.state.result} />

      </View>
    );
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
