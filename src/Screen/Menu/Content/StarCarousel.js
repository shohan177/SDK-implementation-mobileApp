/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';

import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import AppUrl from '../../../RestApi/AppUrl';

const {width: screenWidth} = Dimensions.get('window');

const StarCarousel = ({eventData}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const crosalItem = ({item, index}) => {
    return (
      <View key={index} style={{marginHorizontal: 4}}>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image
              source={{uri: `${AppUrl.MediaBaseUrl + item.banner}`}}
              style={styles.image}
            />
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'red',
                borderRadius: 100,
                position: 'absolute',
                right: 0,
                marginTop: 5,
                marginRight: 5,
              }}
            />

            <LinearGradient
              colors={['#FFAD00', '#3f2b00']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={{transform: [{translateY: 82}]}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'rgba(228, 228, 228, 0.938)',
                }}>
                {item.title}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {}, []);

  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={5}
      autoplayLoop
      // index={1}
      // showPagination
      data={eventData}
      renderItem={crosalItem}
    />
  );
};

export default StarCarousel;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    // backgroundColor: 'black',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  item: {
    width: 94,
    height: 100,
    position: 'relative',
    backgroundColor: '#FFAD00',
    overflow: 'hidden',
    borderRadius: 6,
  },
  seemore: {
    height: 100,
    width: 50,
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    // borderRadius: 8,
    width: '100%',
    height: 50,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
