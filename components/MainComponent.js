import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"            
            }
        }
    }
);


const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});

const ContactNavigator = createStackNavigator({
    Home: { screen: Contact }
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});

const AboutUsNavigator = createStackNavigator({
    Home: { screen: AboutUs }
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
});



const MainNavigator = createDrawerNavigator({
         Home :{
             screen: HomeNavigator,
             navigationOptions: {
                 title: 'Home',
                 drawerLabel: 'Home'
             }
         },

         Menu : {
             screen: MenuNavigator,
             navigationOptions: {
                title: 'Menu',
                drawerLabel: 'Menu'
         }
     },

     Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us'
        }
    },

    AboutUs :{
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us'
        }
    },
 },{
     drawerBackgrounColor: '#D1C4E9'
 })


class Main extends Component { 

  render() {
 
    return (
        
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MainNavigator />
        </View>
    //     <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
    //         <MenuNavigator />
    //     <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
    //     <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    // </View>
    );
  }
}
  
export default Main;