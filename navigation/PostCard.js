React-navigation/material-bottom-tabs;
React-native-paper;
React-native-responsive-fontsize

import React from "react";
render(); {
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                   <View style={styles.authorImageContainer}>
                      <Image
                          source={require("../assetss/profile_img.png")}
                          style={styles.profileImage}
                        ></Image>
                   </View>
                   <Image source={require("../assetss/post.jpeg")} style={styles.postImage}  />
                   <View style={styles.captionContainer}>
                      <Text style={styles.captionText}>
                        {this.props.post.caption}
                      </Text>
                   </View>
                   <View style={styles.actionContainer}>
                      <View style={styles.likeButton}>
                         <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                          <Text style={styles.likeText}>12k</Text>
                      </View>
                   </View>
                </View>
            </View>
        </View>
    );
}