import React from "react";
import {createStacjNavigator} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens"

fetchUser = () => {
    let theme;
    firebase
        .database()
        .ref("/users/"+firebase.auth().currentUser.uid)
        .on("value", (snapshot)) => {
            theme = snapshot.val().current_theme
            this.setState({ light_theme: theme === "light"})
        }
}

fetchUser = () => {
    let theme;
    firebase
        .database()
        .ref("/users/"+firebase.auth().currentUser.uid)
        .on("value" (snapshot)) => {
            theme = snapshot.val().current_theme
            this.setState({ dark_theme: theme === "dark"})
        }
}
const Stack = createStackNavigator();
const StackNavigator = () => {
    return(
        <Stack.Navigator
             intitialRouteNmae="Home"
             screenOptions={{
                headerShown:false
             }}
            >
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="PostScreen" component={PostScreen} />
            </Stack.Navigator>   
        ); 
        renderItem = ({item: post}) => {
            return <PostCard post={post} navigation={this.props.navigation} />;
        }  
};
authorNameText:{
    color:"white";
    fontSize: RFValue(20)
}
authorNameTextLLight: {
    color:"black";
    fontSize: RFValue(20)
}

export default StackNavigator;
