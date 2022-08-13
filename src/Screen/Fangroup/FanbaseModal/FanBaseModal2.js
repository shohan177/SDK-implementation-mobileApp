import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import imagePath from '../../../Constants/imagePath';
imagePath;
const FanBaseModal2 = props => {
  const { starName, setStarName } = props;

  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 25,
      }}>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={imagePath.afterfanModal}
          style={{ height: 80, width: 80 }}
        />
      </View>
      <View>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
          Are you sure want to join {starName} group?
        </Text>
        <Text style={{ color: 'gray', textAlign: 'center', fontSize: 12 }}>
          Be carefull once you select you can not go back!
        </Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 5 }}>
        <TouchableOpacity
          onPress={() => {
            setStarName(starName);
            props.closeModal();
          }}
          style={{
            backgroundColor: "#FFAD00",
            borderWidth: 1,
            width: '50%',
            borderRadius: 5,
          }}>
          <Text style={{ color: 'white', padding: 5, textAlign: 'center' }}>
            Join Now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 5 }}>
        <TouchableOpacity
          onPress={() => {
            props.onPress(false)
            props.closeModal(true)
          }}
          style={{
            borderColor: "#FFAD00",
            borderWidth: 1,
            width: '50%',
            borderRadius: 5,
            marginTop: 7
          }}>
          <Text style={{ color: 'white', padding: 5, textAlign: 'center' }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FanBaseModal2;

const styles = StyleSheet.create({});
