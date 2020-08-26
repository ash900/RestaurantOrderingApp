import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

    this.state={
      FinalBusinessName: "",
    }
    this.business=[{
      value:'Ubar',
    }, {
      value:'Globe Café',
    }, {
      value:'Lee’s Asian Food',
    }, {
      value:'Boost Juice',
    }, {
      value:'Sambal',
    }];
  }

  render() {

    return (
      <View style={styles.container}>

      <View style={styles.viewRow3}>
        <Image source={require('./img/macqaurie-logo-250x250.png')} style={styles.image }/>
      </View>

      <View style={styles.viewRow1}>

        <Text style={styles.header}>Welcome to the CCS Food service</Text>
        <Text style={styles.instructionDetail}> Please select a business below </Text>
      </View>



        <View style={styles.viewRow4}>
                <Dropdown
                    containerStyle={styles.dropdown2}
                    label='Choose the place of business'
                    data={this.business}
                    onChangeText={(selectedValue) => this.setState({
                      FinalBusinessName:selectedValue
                    }
                    )}
                      />
        </View>


            <View style={styles.viewRow2}>
                <TouchableOpacity
                    style={styles.homeButton}
                    onPress={this.onPressEvent.bind(this)}>
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }

  onPressEvent(){
    Actions.menu({menuBusiness:this.state.FinalBusinessName});
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c14d4d',
  },

  header:	{
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
  },
  instructionDetail: {
    alignItems: 'center',
    fontSize: 21,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 35,
    color: 'black',
  },


  viewRow1:{
    flex:1,
  },

  viewRow2:{
    flex:1.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  viewRow4:{
    flex:1,
  },

  viewRow3:{

    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown1: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  dropdown2:{

    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,


  },

  homeButton:{
    backgroundColor:'#22b538',
    height:	70,
    width:	150,
    borderWidth:	1,
    borderRadius:40,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  buttonText:	{
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    color: 'white',
  },



});
