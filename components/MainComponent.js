import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';


import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const MenuNavigator = createStackNavigator();

const HeaderOptions = {
  headerStyle: {
    backgroundColor: "#512DA8"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    color: "#fff"
  }
};

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <View style={styles.drawerHeader}>
      <View style={{ flex: 1 }}>
        <Image
          source={require('./images/logo.png')}
          style={styles.drawerImage}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.drawerHeaderText}>
          Ristorante Con Fusion
                </Text>
      </View>
    </View>
    <DrawerItemList {...props} />
  </ScrollView>
);

function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={HeaderOptions}
    >
      <MenuNavigator.Screen
        name="Menu"
        component={Menu}
        options={
          ({ navigation }) => ({
            headerLeft: () =>
              <MenuIcon navigation={navigation} />
          })
        }
      />
      <MenuNavigator.Screen
        name="Dishdetail"
        component={Dishdetail}
        options={{ headerTitle: "Dish Detail" }}
      />
    </MenuNavigator.Navigator>
  );
}

const HomeNavigator = createStackNavigator();


function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={HeaderOptions}
    >
      <HomeNavigator.Screen
        name="Home"
        component={Home}
        options={
          ({ navigation }) => ({
            headerLeft: () =>
              <MenuIcon navigation={navigation} />
          })
        }
      />
    </HomeNavigator.Navigator>
  );
}

const ContactNavigator = createStackNavigator();

function ContactNavigatorScreen() {
  return (
    <ContactNavigator.Navigator
      initialRouteName='Contact Us'
      screenOptions={HeaderOptions}
    >
      <ContactNavigator.Screen
        name="Contact Us"
        component={Contact}
        options={
          ({ navigation }) => ({
            headerLeft: () =>
              <MenuIcon navigation={navigation} />
          })
        }
      />
    </ContactNavigator.Navigator>
  );
}

const AboutUsNavigator = createStackNavigator();

const MenuIcon = (props) => {
  return (
    <Icon
      name='menu'
      size={24}
      color='white'
      onPress={() =>
        props.navigation.toggleDrawer()}
    />
  );
}

function AboutUsNavigatorScreen() {
  return (
    <AboutUsNavigator.Navigator
      initialRouteName='About Us'
      screenOptions={HeaderOptions}
    >
      <AboutUsNavigator.Screen
        name="About Us"
        component={About}
        options={
          ({ navigation }) => ({
            headerLeft: () =>
              <MenuIcon navigation={navigation} />
          })
        }
      />
    </AboutUsNavigator.Navigator>

  )
}

const MainNavigator = createDrawerNavigator();

function MainNavigatorDrawer() {
  return (
    <MainNavigator.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#D1C4E9'
      }}
      drawerContent={props => <CustomDrawerContentComponent {...props} />}
    >
      <MainNavigator.Screen
        name="Home"
        component={HomeNavigatorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name='home'
              type='font-awesome'
              size={24}
              color={color}
            />
          )
        }}

      />
      <MainNavigator.Screen
        name="Contact Us"
        component={ContactNavigatorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name='address-card'
              type='font-awesome'
              size={22}
              color={color}
            />
          )
        }}
      />
      <MainNavigator.Screen
        name="Menu"
        component={MenuNavigatorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name='list'
              type='font-awesome'
              size={24}
              color={color}
            />
          )
        }}
      />
      <MainNavigator.Screen
        name="About Us"
        component={AboutUsNavigatorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name='info-circle'
              type='font-awesome'
              size={24}
              color={color}
            />
          )
        }}
      />
    </MainNavigator.Navigator>
  );
}

class Main extends Component {

  render() {

    return (
      <NavigationContainer>
        <MainNavigatorDrawer />
      </NavigationContainer>
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


export default Main;