import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import imagePath from '../../../Constants/imagePath';
import styles from './Styles';
import PackageDetails from './PackageDetails';
import * as Animatable from 'react-native-animatable';
const Packages = () => {
    const [silver,setSilver]=useState(false);
    const [gold,setGold]=useState(false);
    const [platinum,setPlatinum]=useState(false);
  return (
    <>
      <View style={{margin: 10, borderRadius: 10, backgroundColor: '#343434'}}>
        <Text style={{color: '#F4EAFB', textAlign: 'center', marginTop: 13,fontSize:18}}>
          Available Package
        </Text>
        <View style={styles.vlLine} />


{silver?null:  <View style={{position: 'relative', marginBottom: 10}}>
          <LinearGradient
            colors={['#C2C2C2', '#797979']}
            style={{margin: 15, borderRadius: 15, paddingVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.cardGrid}>
                <View style={{height: 70, width: 100}}>
                  <Image
                    source={imagePath.gray1}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
              <View style={styles.cardGrid2}>
                <Text
                  style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
                  $350
                </Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  SILVER PACKAGE
                </Text>
              </View>
            </View>
          </LinearGradient>
          <Animatable.View
           animation="pulse"
                iterationCount="infinite"
          >

         
          <TouchableOpacity
          onPress={()=>{
            setSilver(true)
            setGold(false)
            setPlatinum(false)
          }}
            style={{position: 'absolute', bottom: -10, left: '45%'}}>
            <Text>
              <Icon name="ios-chevron-down-circle" size={40} color="#C2C2C2" />
            </Text>
          </TouchableOpacity>
          </Animatable.View>
        </View>}


      


{silver?<PackageDetails setSilver={setSilver} setPlatinum={setPlatinum} setGold={setGold} packageName='SILVER' LiniarColor={['#C2C2C2', '#797979']} price="$400" />:null}
      







{gold?null: <View style={{position: 'relative', marginBottom: 10}}>
          <LinearGradient
            colors={['#FFD465', '#DDA336', '#E7A725']}
            style={{margin: 15, borderRadius: 15, paddingVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.cardGrid}>
                <View style={{height: 70, width: 100}}>
                  <Image
                    source={imagePath.gray2}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
              <View style={styles.cardGrid2}>
                <Text
                  style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
                  $350
                </Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  GOLD PACKAGE
                </Text>
              </View>
            </View>
          </LinearGradient>
          <Animatable.View
           animation="pulse"
                iterationCount="infinite"
          >
          <TouchableOpacity
          onPress={()=>{
            setGold(true)
            setPlatinum(false)
            setSilver(false)
          }}
            style={{position: 'absolute', bottom: -10, left: '45%'}}>
            <Text>
              <Icon name="ios-chevron-down-circle" size={40} color="#FFD465" />
            </Text>
          </TouchableOpacity>
          </Animatable.View>
        </View>}




       
{gold?<PackageDetails setGold={setGold} setPlatinum={setPlatinum} setSilver={setSilver} packageName='GOLD' LiniarColor={['#FFD465', '#DDA336', '#E7A725']} price="$600" />:null}

{platinum?null:
    <View style={{position: 'relative', marginBottom: 10}}>
          <LinearGradient
            colors={['#E3BEE4', '#7D5FF7']}
            style={{margin: 15, borderRadius: 15, paddingVertical: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.cardGrid}>
                <View style={{height: 70, width: 100}}>
                  <Image
                    source={imagePath.gray3}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>
              <View style={styles.cardGrid2}>
                <Text
                  style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
                  $350
                </Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  PlATINUM PACKAGE
                </Text>
              </View>
            </View>
          </LinearGradient>

          <Animatable.View
           animation="pulse"
                iterationCount="infinite"
          >

          <TouchableOpacity
          onPress={()=>{
            setPlatinum(true)
            setGold(false)
            setSilver(false)
          }}
            style={{position: 'absolute', bottom: -10, left: '45%'}}>
            <Text>
              <Icon name="ios-chevron-down-circle" size={40} color="#E3BEE4" />
            </Text>
          </TouchableOpacity>
          </Animatable.View>
        </View>
}
       

{platinum? <PackageDetails setGold={setGold} setPlatinum={setPlatinum} setSilver={setSilver} packageName='PLATINUM' LiniarColor={['#E3BEE4', '#7D5FF7']} price="$800" />:null}
       
      </View>
    </>
  );
};

export default Packages;
