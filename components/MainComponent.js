import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';
import { View, ScrollView, Platform, Image , StyleSheet, Text} from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
import NetInfo  from '@react-native-community/netinfo';
import Toast from 'react-native-tiny-toast';


const mapStateToProps = state => {
  return {
    // dishes: state.dishes,
    // comments: state.comments,
    // promotions: state.promotions,
    // leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});


const LoginNavigator = createStackNavigator({
    Login: Login
  }, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    title: 'Login',
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24}
      iconStyle={{ color: 'white' }} 
      onPress={ () => navigation.toggleDrawer() } />    
  })
});

const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu,
        navigationOptions:({navigation}) =>({
           headerLeft: <Icon name='menu' size={24} color='white'
           onPress={() =>navigation.toggleDrawer()} />
        }) 
    },
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
            },
            headerLeft: <Icon name='menu' size={24} color='white'
            onPress={() =>navigation.toggleDrawer()} />
        }
    }
);


const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},
{
    navigationOptions: ({navigation}) =>( {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name='menu' size={24} color='white'
        onPress= {() => navigation.toggleDrawer()} />
    })
});

const ContactNavigator = createStackNavigator({
    Home: { screen: Contact }
},
{
    navigationOptions: ({navigation}) =>( {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name='menu' size={24} color='white'
        onPress={() =>navigation.toggleDrawer()} />
    })
});

const AboutUsNavigator = createStackNavigator({
    Home: { screen: AboutUs }
},
{
    navigationOptions: ({navigation}) =>({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: <Icon name='menu' size={24} color='white'
        onPress={() =>navigation.toggleDrawer()} />
    })
});


const ReservationNavigator = createStackNavigator({
    Reservation: { screen: Reservation }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        iconStyle={{ color: 'white' }} 
        onPress={ () => navigation.navigate('DrawerToggle') } />    
    })
  })


  const FavoritesNavigator = createStackNavigator({
    Favorites: { screen: Favorites }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        iconStyle={{ color: 'white' }} 
        onPress={ () => navigation.navigate('DrawerToggle') } />    
    })
  })


 


const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
            <View style={{flex:1}}>
                <Image source={require('./images/logo.png')} style={styles.drawerImage} />
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
            </View>
        </View>
                <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
);



const MainNavigator = createDrawerNavigator({
    Login: 
    { screen: LoginNavigator,
      navigationOptions: {
        title: 'Login',
        drawerLabel: 'Login',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='sign-in'
            type='font-awesome'            
            size={24}
            iconStyle={{ color: tintColor }}
          />
        ),
      }
    },
         Home :{
             screen: HomeNavigator,
             navigationOptions: {
                 title: 'Home',
                 drawerLabel: 'Home',
                 drawerIcon:({tintColor})=>(
                     <Icon
                         name='home'
                         type='font-awesome'
                         size={24}
                         color={tintColor}
                         />
                 )
             }
         },

         Menu : {
             screen: MenuNavigator,
             navigationOptions: {
                title: 'Menu',
                drawerLabel: 'Menu',
                drawerIcon:({tintColor})=>(
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
         }
     },

     Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon:({tintColor})=>(
                <Icon
                    name='address-card'
                    type='font-awesome'
                    size={22}
                    color={tintColor}
                    />
            )
        }
    },

    AboutUs :{
        screen: AboutUsNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon:({tintColor})=>(
                <Icon
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },

    Reservation:{ 
        screen: ReservationNavigator,
        navigationOptions: {
        title: 'Reserve Table',
        drawerLabel: 'Reserve Table',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='cutlery'
            type='font-awesome'            
            size={24}
            iconStyle={{ color: tintColor }}
          />
        ),
      }
    },

    Favorites :{
        screen: FavoritesNavigator,
        navigationOptions: {
            title: 'My Favorites',
            drawerLabel: 'My Favourites',
            drawerIcon:({tintColor})=>(
                <Icon
                    name='heart'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                    />
            )
        }
    },

    
 },{
     initialRouteName: 'Home',
     drawerBackgrounColor: '#D1C4E9',
     contentComponent :CustomDrawerContentComponent
 })


class Main extends Component { 
  
    
      componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    
        NetInfo.fetch().then((connectionInfo) => {
            ToastAndroid.show('Initial Network Connectivity Type: '
                + connectionInfo.type, ToastAndroid.LONG)
        });
        
        NetInfo.addEventListener(connectionChange => this.handleConnectivityChange(connectionChange))
    }
    
componentWillUnmount() {
        NetInfo.removeEventListener(connectionChange => this.handleConnectivityChange(connectionChange))
    }

handleConnectivityChange = (connectionInfo) => {
      switch (connectionInfo.type) {
          case 'none': 
              Toast.show ('You are now offline', {duration: 2000});
              break;
          case 'wifi':
              Toast.show ('You are now on WiFi', {duration: 2000});
              break;
          case 'cellular':
              Toast.show ('You are now on Cellular', {duration: 2000});
              break;
          case 'unknown' :
              Toast.show ('You are now have an Unknown connection', {duration: 2000});
              break;
          default: 
      }
  }

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



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main);