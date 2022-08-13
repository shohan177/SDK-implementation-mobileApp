import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import imagePath from '../../Constants/imagePath';

const Message = ({ navigation }) => {
  const starNotify = [
    {
      key: 1,
      img: imagePath.notify1,
      name: 'Mizanur Rahman Azhari',
      title: 'Great Work',
      time: '2 min ago',
    },
    {
      key: 2,
      img: imagePath.notify2,
      name: 'Ayman Siddique',
      title: 'Thanks Bro',
      time: '4 min ago',
    },
    {
      key: 3,
      img: imagePath.notify3,
      name: 'Zafar Iqbal',
      title: 'Follow this procedure',
      time: '12 min ago',
    },
    {
      key: 4,
      img: imagePath.notify4,
      name: 'Salman Taj',
      title: 'Hello',
      time: '17 min ago',
    },
    {
      key: 5,
      img: imagePath.notify5,
      name: 'Tamim Iqbal',
      title: 'Nice Brother',
      time: '15 min ago',
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        style={{
          backgroundColor: 'black',
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={imagePath.logo} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 30,
            width: 30,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>
            <MaterialCommunityIcons
              name="android-messages"
              color={'#FFAD00'}
              size={20}
            />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: 'black', marginVertical: 3 }}>
        <View style={{ backgroundColor: '#343434', padding: 10 }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Messaging
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ marginHorizontal: 5 }}>
              <MaterialIcons name="search" color={'white'} size={25} />
            </Text>
          </View>

          <TextInput
            style={{ color: 'white', fontSize: 18, width: '80%', height: 40 }}>
            Search messages
          </TextInput>
        </View>
      </View>

      <FlatList
        data={starNotify}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate('MessageStar')}>
              <View style={styles.content}>
                <View style={styles.ContentItems}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: 'gold',
                      borderRadius: 100,
                      padding: 3,
                    }}>
                    <Image style={styles.starCardImg} source={item.img} />
                  </View>

                  <View style={styles.ContentItems2}>
                    <View>
                      <Text style={styles.contentText}>{item.name}</Text>
                    </View>
                    <Text style={styles.contentText2}>{item.title}</Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.contentText2}>Yesterday</Text>
                  <Text style={styles.contentText2}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  starCardImg: {
    padding: 3,
  },
  SearchBar: {
    borderColor: '#FFAD00',
    borderWidth: 1,

    height: 28,
    padding: 3,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  row: {
    marginVertical: 1,
    backgroundColor: 'black',

    marginVertical: 3,
    marginHorizontal: 3,
    borderWidth: 1,
    borderBottomColor: 'gray',
  },
  content: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContentItems: {
    flexDirection: 'row',
  },
  ContentItems2: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 18,
    color: 'white',
  },
  contentText2: {
    fontSize: 12,
    color: 'gray',
  },
});
export default Message;
