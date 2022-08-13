import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Styles from './Styles';
import HeaderComp from '../../../Components/HeaderComp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import imagePath from '../../../Constants/imagePath';
import Packages from './Packages';
const Wallet = () => {
  return (
    <View style={Styles.container}>
      <HeaderComp />

      <View style={Styles.mainRow}>
        <View style={Styles.secondRow}>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={Styles.smallContent}>
                <View>
                  <Text>
                    <Icon name="message" color={'#FFC448'} size={20} />
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#FFC448'}}>09</Text>
                </View>
              </View>
              <Text style={{color: '#979797', fontSize: 12}}>Live Chat</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={Styles.smallContent}>
                <View>
                  <Text>
                    <Icon2 name="persons" color={'#FFC448'} size={20} />
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#FFC448'}}>07</Text>
                </View>
              </View>
              <Text style={{color: '#979797', fontSize: 12}}>MeetUp</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={Styles.smallContent}>
                <View>
                  <Text>
                    <Icon name="mic" color={'#FFC448'} size={20} />
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#FFC448'}}>07</Text>
                </View>
              </View>
              <Text style={{color: '#979797', fontSize: 12}}>Auditions</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', paddingBottom: 5}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={Styles.smallContent}>
                <View>
                  <Text>
                    <Icon name="question-answer" color={'#FFC448'} size={20} />
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#FFC448'}}>07</Text>
                </View>
              </View>
              <Text style={{color: '#979797', fontSize: 12}}>Q&A</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={Styles.smallContent}>
                <View>
                  <Text>
                    <Icon3 name="hands-helping" color={'#FFC448'} size={20} />
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#FFC448'}}>07</Text>
                </View>
              </View>
              <Text style={{color: '#979797', fontSize: 12}}>Greetings</Text>
            </View>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={Styles.smallContent}>
                <View>
                  <Text>
                    <Icon3
                      name="chalkboard-teacher"
                      color={'#FFC448'}
                      size={20}
                    />
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#FFC448'}}>07</Text>
                </View>
              </View>
              <Text style={{color: '#979797', fontSize: 12}}>Learning</Text>
            </View>
          </View>
        </View>

        <View style={{width: '40%'}}>
          <View style={Styles.thirdRow}>
            <View style={Styles.fourthRow}>
              <Image
                source={imagePath.goldenStar}
                style={{height: 30, width: 30}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <LinearGradient
                  colors={[
                    '#FFAD00',
                    '#FFD273',
                    '#FACF75',
                    '#E7A725',
                    '#FFAD00',
                  ]}
                  style={{borderRadius: 5}}>
                  <Text style={{paddingHorizontal: 5, fontWeight: 'bold',fontSize:10}}>
                    Your status
                  </Text>
                </LinearGradient>

                <Text
                  style={{color: '#FFAD00', fontWeight: 'bold', fontSize: 20}}>
                  GOLD
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#484848',
              borderRadius: 25,
              marginVertical: 10,
              marginTop: 25,
              marginLeft:5,
   marginRight:4
            }}>
            <View style={Styles.fourthRow}>
              <Image
                source={imagePath.onlyStar}
                style={{height: 30, width: 30}}
              />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <LinearGradient
                  colors={[
                    '#FFAD00',
                    '#FFD273',
                    '#FACF75',
                    '#E7A725',
                    '#FFAD00',
                  ]}
                  style={{borderRadius: 5}}>
                  <Text style={{paddingHorizontal: 5, fontWeight: 'bold',fontSize:10}}>
                    Club Point
                  </Text>
                </LinearGradient>

                <Text
                  style={{color: '#FFAD00', fontWeight: 'bold', fontSize: 20}}>
                  21005
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <Packages />
      </ScrollView>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
