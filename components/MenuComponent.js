import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
<<<<<<< HEAD
=======
  static navigationOptions = {
    title: 'Menu'
  };
>>>>>>> 0a2bd5f1e40cac232e33461e7e6c3820e0e3d86a

  render() {
    const { navigate } = this.props.navigation;
    const renderMenuItem = ({ item, index }) => {

      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          onPress={() => navigate('Dishdetail', { dishId: item.id })}
          leftAvatar={{ source: require('./images/uthappizza.png') }}
        />
      );
    };

    return (
<<<<<<< HEAD
      <View>
        <FlatList

          data={this.state.dishes}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
=======
      <FlatList

        data={this.state.dishes}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id.toString()}
      />
>>>>>>> 0a2bd5f1e40cac232e33461e7e6c3820e0e3d86a
    );
  }
}


export default Menu;