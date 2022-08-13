import React from 'react';
import {Image, Text, View} from 'react-native';

import imagePath from '../../../../Constants/imagePath';
import styles from './Styles';
const data = [
  {
    name1: 'Asif Rahman',
    name2: 'Asma khatun',
    key: 1,
    fan1: imagePath.fan1,
    fan2: imagePath.fan2,
  },
];
const Admins = () => {
  return (
    <>
      <View style={styles.mainRow}>
        <View style={styles.row2}>
          <View style={{justifyContent: 'center'}}>
            <Image source={imagePath.srkProfileLogo} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.fontStyle}>Salman khan pannel</Text>
          </View>
        </View>
        <View style={styles.row3}>
          <View style={{justifyContent: 'center'}}>
            <Image source={imagePath.srkProfileLogo} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.fontStyle}>Shrukh khan pannel</Text>
          </View>
        </View>
      </View>

      {data.map(item => {
        return (
          <View key={item.key} style={styles.mainRow}>
            <View style={styles.normalRow}>
              <View style={{justifyContent: 'center'}}>
                <Image source={item.fan1} />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.fontStyle}>{item.name1}</Text>
              </View>
            </View>
            <View style={styles.normalRow}>
              <View style={{justifyContent: 'center'}}>
                <Image source={item.fan2} />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.fontStyle}>{item.name2}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default Admins;
