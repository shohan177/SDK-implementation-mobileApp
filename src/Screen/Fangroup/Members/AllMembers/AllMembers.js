import React from 'react';
import {Image, Text, View} from 'react-native';
import imagePath from '../../../../Constants/imagePath';
import styles from './Styles';

const data = [
  {
    name1: 'Afzal hossan',
    name2: 'Asma khatun',
    key: 1,
    fan1: imagePath.fan1,
    fan2: imagePath.fan2,
  },
  {
    name1: 'Afzal hossan',
    name2: 'Mofiz Rahman',
    key: 2,
    fan1: imagePath.fan3,
    fan2: imagePath.fan4,
  },
  {
    name1: 'Sejuti Rahman',
    name2: 'Amir khan',
    key: 3,
    fan1: imagePath.fan5,
    fan2: imagePath.fan7,
  },
  {
    name1: 'Afzal hossan',
    name2: 'Asma khatun',
    key: 4,
    fan1: imagePath.fan1,
    fan2: imagePath.fan2,
  },
  {
    name1: 'Afzal hossan',
    name2: 'Mofiz Rahman',
    key: 5,
    fan1: imagePath.fan3,
    fan2: imagePath.fan4,
  },
  {
    name1: 'Afzal hossan',
    name2: 'Asma khatun',
    key: 6,
    fan1: imagePath.fan1,
    fan2: imagePath.fan4,
  },
  {
    name1: 'Afzal hossan',
    name2: 'Asma khatun',
    key: 7,
    fan1: imagePath.fan2,
    fan2: imagePath.fan3,
  },
  {
    name1: 'Asif Rahman',
    name2: 'Asma khatun',
    key: 8,
    fan1: imagePath.fan6,
    fan2: imagePath.fan2,
  },
];
const AllMembers = () => {
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

export default AllMembers;
