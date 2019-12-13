import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.horario = {hora: this.dataHora()};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.datahora}>{this.horario.hora}</Text>
      </View>
    );
  }
  componentDidMount(){
    setInterval(() => {
      this.setHorario({
        hora: this.dataHora(),
      });
    }, 1000);
  }
  dataHora() {
    return Moment().format('H:mm:ss');
  }
}
const styles = StyleSheet.create({
  datahora: {
    textShadowColor: '#0AAFE6',
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 10,
    fontSize: 70,
    color: '#daf6ff'
  },
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
