import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {
      finalValue: params.summaryValue,
      finalBusiness: params.finalBusiness
    };
  }
  render() {

    return(
      <View style={styles.container}>
        <View	style={styles.row1}>
          <Text style={styles.orderthanks}>Thank you for ordering </Text>
          <Text style={styles.orderthanks}> from: {this.state.finalBusiness}</Text>
        </View>

        <View style={styles.row2}>
          <Image source={require('./img/Tick_Mark_Dark-512.png')} style={styles.image}/>
        </View>

        <View	style={styles.row3}>
          <Text	style={styles.orderDetail}>Total order cost: ${this.state.finalValue}</Text>
          <Text	style={styles.orderDetail}>Your order completion time is 15 minutes</Text>
        </View>

        <View	style={styles.row4}>
          <Text style={styles.developers}>App created by Tyson Wood(44883986)
                and            Aashir Hussain(45269114)</Text>
            <Text style={styles.developers}></Text>
        </View>

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7bf71',
    flex: 1,
  },
  image: {
    height: 127,
    width: 150,
      justifyContent:	'flex-start',
  },
  row1:	{
    flex: 0.5,

    flexDirection:	'column',
    justifyContent:	'center',
    alignItems:	'center',
  },
  row2: {
    flex: 0.5,

    flexDirection:	'column',
    justifyContent:	'center',
    alignItems:	'center',
  },

  row3:	{
    flex: 0.5,

    flexDirection:	'column',
    justifyContent:	'space-around',
    alignItems:	'center',
  },


  row4:	{
    flex: 0.5,

    flexDirection:	'row',
    justifyContent:	'space-around',
    alignItems:	'center',
  },

  orderthanks:	{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  orderDetail: {
    alignItems: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    color: '#424242',
  },
  developers: {
    alignItems: 'center',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    color: 'black',
  },



});
