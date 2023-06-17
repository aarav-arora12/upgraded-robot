import React from 'react';
<HTML>
    <head>
        <body>
            <text>
                <p>Feed</p>
            </text>
        </body>
    </head>
</HTML>
return  
<View style={StyleSheet.container}>
    <SafeAreaView style={StyleSheet.driodSafeArea} />
    <View style={StyleSheet.appTitle}>
        <View style={styles.appIcon}>
            <Image
                source={require("../assetss/logo.png")}
                style={styles.iconImage}
            ></Image>
        </View>
        <View style={styles.cardContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
        </View>
    </View>
    <View style={styles.cardContainer}>
        <Flatlist
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
        />
        <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.initiateTTS(
                    this.props.route.params.title,
                    this.props.route.params.author,
                    this.props.route.params.story,
                    this.props.route.params.moral
                  )
                }
              >
                <Ionicons
                  name={this.state.speakerIcon}
                  size={RFValue(30)}
                  color={this.state.speakerColor}
                  style={{ margin: RFValue(15) }}
                />
              </TouchableOpacity>
    </View>

</View>

   