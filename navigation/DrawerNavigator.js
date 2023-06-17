import React from "react";
import {createDrawerNavigator} from"@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
export default class PostScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        speakerColor: "gray",
        speakerIcon: "volume-high-outline",
        light_theme: true
      };
    }
  } 
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;