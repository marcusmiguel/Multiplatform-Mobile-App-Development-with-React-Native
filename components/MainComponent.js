import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})

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
        name="DishDetail"
        component={DishDetail}
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
};

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
        name="Login"
        component={LoginNavigatorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name='sign-in'
              type='font-awesome'
              size={24}
              color={color}
            />
          )
        }}
      />
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
      <MainNavigator.Screen
        name="Reserve Table"
        component={ReservationNavigatorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name='cutlery'
              type='font-awesome'
              size={24}
              iconStyle={{ color: color }}
            />
          )
        }}
      />
      <MainNavigator.Screen
        name="My Favorites"
        component={FavoritesNavigatorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name='heart'
              type='font-awesome'
              size={24}
              iconStyle={{ color: color }}
            />
          )
        }}
      />
    </MainNavigator.Navigator>
  );
}

const ReservationNavigator = createStackNavigator();

function ReservationNavigatorScreen() {
  return (
    <ReservationNavigator.Navigator
      initialRouteName='About Us'
      screenOptions={HeaderOptions}
    >
      <ReservationNavigator.Screen
        name="Reserve Table"
        component={Reservation}
        options={
          ({ navigation }) => ({
            headerLeft: () =>
              <MenuIcon navigation={navigation} />
          })
        }
      />
    </ReservationNavigator.Navigator>
  )
}


const FavoritesNavigator = createStackNavigator();

function FavoritesNavigatorScreen() {
  return (
    <FavoritesNavigator.Navigator
      initialRouteName='My Favorites'
      screenOptions={HeaderOptions}
    >
      <FavoritesNavigator.Screen
        name="My Favorites"
        component={Favorites}
        options={
          ({ navigation }) => ({
            headerLeft: () =>
              <MenuIcon navigation={navigation} />
          })
        }
      />
      <FavoritesNavigator.Screen
        name="DishDetail"
        component={DishDetail}
        options={{ headerTitle: "Dish Detail" }}
      />
    </FavoritesNavigator.Navigator>
  )
}

const LoginNavigator = createStackNavigator();

function LoginNavigatorScreen() {
  return (
    <LoginNavigator.Navigator
      initialRouteName='Login'
      screenOptions={HeaderOptions}
    >
      <LoginNavigator.Screen
        name="Login"
        component={Login}
        options={
          ({ navigation }) => ({
            headerLeft: () =>
              <MenuIcon navigation={navigation} />
          })
        }
      />
    </LoginNavigator.Navigator>
  )
}

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();


  }

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
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);