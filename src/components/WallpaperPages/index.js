import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function WallpaperPages() {
    return(
        <View style={styles.wallpaper}>
            <Image 
                source={require('../../assets/praiaRj.jpg')}
                styles={styles.imageWallpaper}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wallpaper: {
        height: 170,
        elevation: 2,
        borderRadius: 15,
        marginBottom: 5,
    },
})
