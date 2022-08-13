import React from 'react';
import {Image, View} from 'react-native';
import imagePath from '../../../Constants/imagePath';
import styles from './Styles';

const Media = () => {
  return (
    <View style={styles.container}>
      <View style={{margin: 5, backgroundColor: '#343434', borderRadius: 8}}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{margin: 5}}>
              <Image
                source={imagePath.media1}
                style={{height: 120, width: 180}}
              />
            </View>
            <View style={{margin: 5}}>
              <Image
                source={imagePath.media2}
                style={{height: 120, width: 180}}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{margin: 5}}>
              <Image
                source={imagePath.media3}
                style={{height: 120, width: 180}}
              />
            </View>
            <View style={{margin: 5}}>
              <Image
                source={imagePath.media4}
                style={{height: 120, width: 180}}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{margin: 5}}>
              <Image
                source={imagePath.media4}
                style={{height: 120, width: 180}}
              />
            </View>
            <View style={{margin: 5}}>
              <Image
                source={imagePath.media5}
                style={{height: 120, width: 180}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Media;
