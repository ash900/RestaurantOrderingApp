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

export default class menu extends Component {

  constructor(props){
    super(props);
    let params = this.props.navigation.state.params;
    this.state = {
      var1: params.menuBusiness,
      menuItem1:"",
      menuItem2:"",
      quantity1:0,
      quantity2:0,
    };

    this.menu=[{
      value:'Prawn Pad Thai-$12',
    }, {
      value:'Falafel Roll-$11',
    }, {
      value:'Veggie curry-$10',
    }, {
      value:'Cheeseburger-$11',
    }, {
      value:'Pizza -$13',
    }];

    this.drink=[{
      value:'Mango Magic-$5',
    }, {
      value:'Choccy milk-$6',
    }, {
      value:'Pepsi-$3',
    }, {
      value:'Banana smoothie-$5',
    }, {
      value:'Milk Tea-$6',
    }];



    this.quantity=[{
      value:1,
    }, {
      value:2,
    }, {
      value:3,
    }, {
      value:4,
    }, {
      value:5,

    }];
  }

  render() {

    return (
      <View style={styles.container}>





        <View style={styles.viewRow4}>
     <Image source={require('./img/Food-and-drink-2.png')} style={styles.image }/>
       <Text style={styles.header}> {this.state.var1}</Text>
          <Text style={styles.instructions}> Please choose your desired food and drink items for your order, from the dropdowns below </Text>
        </View>


        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Select menu item'
                      data={this.menu}
                      onChangeText={(chosenMenuItem1) => this.setState({
                        menuItem1:chosenMenuItem1
                      }
                      )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Select quantity'
                      data={this.quantity}
                      onChangeText={(chosenQuantity1) => this.setState({
                        quantity1:chosenQuantity1
                      }
                      )}
                        />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Select drink'
                      data={this.drink}
                      onChangeText={(chosenMenuItem2) => this.setState({
                        menuItem2:chosenMenuItem2
                      }
                      )}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Select quantity'
                      data={this.quantity}
                      onChangeText={(chosenQuantity2) => this.setState({
                        quantity2:chosenQuantity2
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
    let temp1 = this.state.menuItem1;
    let temp2 = this.state.menuItem2;

    let totalUnitCost1 = (parseInt(temp1.substring(temp1.indexOf("$") + 1, temp1.length)) || 0) * this.state.quantity1;
    let totalUnitCost2 = (parseInt(temp2.substring(temp2.indexOf("$") + 1, temp2.length)) || 0) * this.state.quantity2;

    let totalCost = totalUnitCost1 + totalUnitCost2;

    Actions.summary({
      summaryValue:totalCost,
      finalBusiness:this.state.var1
    });
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
  instructions: {
    alignItems: 'center',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    color: 'black',
  },
  image: {
    height: 90,
    width: 600,
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
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,

  },


  viewRow4:{
    flex:1.5,
  },
  viewRow1:{
    flex:1,
    backgroundColor: '#e5dfc5',
  },
  viewRow2:{
    flex:1.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
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
    flex: 1,
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
  },





});
