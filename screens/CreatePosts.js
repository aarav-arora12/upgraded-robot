import React from 'react';
<HTML>
    <head>
        <body>
            <text>
                <p>Create Post</p>
            </text>
        </body>
    </head>
</HTML>
import * as Font from "expo-font";
import DropdownPicker from React-native-dropdown-picker
React-native-dropdown-picker

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};
 addStory(); {
    if (this.state.title && this.state.description && this.state.story && this.state.moral) {
      let storyData = {
        preview_image: this.state.previewImage,
        title: this.state.title,
        description: this.state.description,
        story: this.state.story,
        moral: this.state.moral,
        author: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_uid: firebase.auth().currentUser.uid,
        likes: 0
      }
      await firebase
        .database()
        .ref("/posts/" + (Math.random().toString(36).slice(2)))
        .set(storyData)
        .then(function (snapshot) {

        })
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Feed")
    } else {
      Alert.alert(
        'Error',
        'All fields are required!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    }
  }
return (
    <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}  />
        <View style={styles.appTitle}>
            <View style={styles.appIcon}>
                <Image
                   source={require("../assetss/logo.png")}
                   style={styles.iconImage}
                ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText}>New Post</Text>
            </View>
        </View>  
        <View style={styles.fieldsContainer}>
            <ScrollView>
                <Image
                   source={preview_image[this.state.preview_image]}
                   style={styles.previewImage}
                ></Image>
                   </ScrollView>
        </View>
        <View style={{height:
        RFValue(this.state.dropdownHeight) }}>
            <DropDownPicker
                items={[
                  { label: "Image 1", value: "image_1" },
                  { label: "Image 2", value: "image_2" },
                  { label: "Image 3", value: "image_3" },
                  { label: "Image 4", value: "image_4" },
                  { label: "Image 5", value: "image_5" },
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                }}
                textStyle={{
                    color: this.state.dropdownHeight == 170 ? "black" : "white",
                    fontFamily: "Bubblegum-Sans",
                  }}
                  onSelectItem={(item) =>
                    this.setState({
                      previewImage: item.value,
                    })
                  }
                />
              </View>
              <ScrollView>
              <TextInput
                style={styles.inputFont}
                onChangeText={(title) => this.setState({ title })}
                placeholder={"Title"}
                placeholderTextColor="white"
              /></ScrollView>
                <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(description) => this.setState({ description })}
                placeholder={"Description"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
                <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(story) => this.setState({ story })}
                placeholder={"Story"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
                
              />

        
                
            


              </View>)