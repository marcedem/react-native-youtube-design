import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends React.Component {

    render() {
        let video = this.props.video;
        return (
            <View style={styles.container}>
                <Image source={{uri: video.snippet.thumbnails.medium.url}} style={styles.thumbnail}/>
                <View style={styles.desContainer}>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/thumb/men/83.jpg' }} style={styles.descThumb}/>
                    <View style={styles.videoDetails}>
                        <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                        <Text style={styles.videoStats}>
                            {video.snippet.channelTitle + " · " + shortenLargeNumber(video.statistics.viewCount, 1) 
                            + " views"  + " · 5 months ago"}
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} color="#999" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    thumbnail: {
        height: 200
    },
    desContainer:{
        flexDirection: 'row',
        paddingTop: 15,
    },
    videoDetails:{
        paddingHorizontal: 15,
        flex: 1,
    },
    videoTitle:{
        fontSize: 16,
        color: '#3C3C3C',
    },
    descThumb:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    videoStats:{
        fontSize: 15
    }
});

function shortenLargeNumber(num, digits) {
    //var units = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
    var units = ['K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'],
        decimal;

    for(var i=units.length-1; i>=0; i--) {
        decimal = Math.pow(1000, i+1);

        if(num <= -decimal || num >= decimal) {
            return +(num / decimal).toFixed(digits) + units[i];
        }
    }

    return num;
}
