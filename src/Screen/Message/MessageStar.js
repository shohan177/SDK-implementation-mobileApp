import React from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import EmojiSelector from 'react-native-emoji-selector';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import imagePath from '../../Constants/imagePath';
const data = [1, 2, 3, 4, 5, 6];
const MessageStar = ({ navigation }) => {
  const [showEmoji, setShowEmoji] = React.useState(false);
  const [store, setStore] = React.useState(null);
  const [sendType, setSendType] = React.useState(false);
  const [pick, setPick] = React.useState();
  const starNotify = [
    {
      key: 1,
      img: imagePath.StarZ,
      name: 'Mizanur Rahman Raihan',
      title: 'Hi man',
      time: '2 min ago',
    },
    {
      key: 2,
      img: imagePath.notify2,
      name: 'Ayman Siddique',
      title: 'Hlo',
      time: '4 min ago',
    },
  ];
  const options = {
    title: 'Pick an image',

    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openPicker = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setPick(source);


        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };
  return (
    <>
      {console.log('picked image is=', pick)}
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

        <View
          style={{ backgroundColor: '#343434', marginVertical: 3, padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '15%' }} onPress={() => navigation.goBack()}>
              <View>
                <Image
                  style={{ height: 40, width: 40 }}
                  source={imagePath.StarZ}
                />
              </View>
            </View>
            <TouchableOpacity style={{ width: '70%', justifyContent: 'center' }}>
              <Text style={styles.Name}>Mizanur Rahman Raihan</Text>
              {/* <TextInput  */}
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '20%' }}>
              <Text style={styles.Name}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  color={'white'}
                  size={30}
                />
              </Text>
              {/* <TextInput  */}
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {/* <View style={styles.UnderLine}>
            <View style={styles.BorderA}></View>
            <View style={{
              flex: 1, justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ color: 'gray', }}>JAN 9, 2021</Text>
            </View>
            <View style={styles.BorderA}></View>

          </View> */}

          <View style={{ flex: 1 }}>
            {showEmoji && <EmojiSelector onEmojiSelected={emoji => {
              setStore(emoji)
              setShowEmoji(false)
            }} />}

            {data.map((item) => {
              return (
                <>
                  <View
                    key={item}
                    style={{
                      flexDirection: 'row',
                      marginVertical: 8,
                      marginLeft: 10,
                    }}>
                    <Image
                      source={imagePath.msgPerson4}
                      style={styles.UserImg}
                    />
                    <View
                      style={{
                        backgroundColor: '#E4E3E9',
                        justifyContent: 'center',
                        marginHorizontal: 8,
                        width: '50%',
                        borderRadius: 20,
                      }}>
                      <Text style={{ color: 'black', marginLeft: 5, padding: 5 }}>
                        Hi raihan! Biye korba kobe? 🥰
                      </Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={{ color: 'gray' }}>Today | 5pm</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 8,
                      justifyContent: 'flex-end',
                      marginRight: 10,
                    }}>
                    <View style={{ justifyContent: 'center' }}>
                      <Text style={{ color: 'gray' }}>Today | 12am</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: '#0E82FD',
                        justifyContent: 'center',
                        marginHorizontal: 8,
                        width: '50%',
                        borderRadius: 20,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          marginLeft: 5,
                          paddingLeft: 3,
                          textAlign: 'left',
                          paddingRight: 2,
                        }}>
                        Eibar thanda porlei biye !😜{' '}
                      </Text>
                    </View>

                    <Image source={imagePath.StarZ} style={styles.StarImg} />
                  </View>


                </>
              );
            })}
          </View>
        </ScrollView>

        <View style={styles.bottomContainer}>
          <View style={{ justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setShowEmoji(true)}>
                <Icon name="smile-o" color={'gray'} size={28} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: '75%',
              position: 'relative',
            }}>
            <TextInput
              onChangeText={e => {
                // setStore

                if (e.length > 0) {
                  setSendType(true);
                } else {
                  setSendType(false);
                }
              }}
              // value={store}
              placeholder="Type your message here..."
              placeholderTextColor={'gray'}
              style={styles.inputTxt}
            />
            {/* <TouchableOpacity style={{position:'absolute',right:10}}>
                <MaterialCommunityIcons
                  name="plus-circle"
                  color={'black'}
                  size={28}
                />
              </TouchableOpacity> */}
          </View>

          <View style={{ justifyContent: 'center', position: 'absolute', right: '18%', top: '25%' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity >
                <Icon name="camera" color={'gray'} size={20} />
              </TouchableOpacity>
            </View>
          </View>


          {sendType ? (
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity style={styles.sendBtn}>
                <Icon name="send" color={'white'} size={15} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity style={styles.sendBtn}>
                <Icon name="microphone" color={'white'} size={15} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Name: {
    color: 'white',
    fontSize: 20,
  },

  BorderA: {
    flex: 2,
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',
  },
  UnderLine: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  starNameT: {
    fontSize: 15,
    color: 'gray',
    paddingHorizontal: 10,
  },
  starName: {
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 10,
  },

  starCardImgS: {
    borderRadius: 100,
  },

  StarPro: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    //    height:200,
  },

  UserImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gold',
  },

  StarImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gold',
  },

  inputTxt: {
    paddingLeft: 10,
    backgroundColor: '#2C323A',
    height: 39,
    borderRadius: 20,
    color: 'white',
  },
  sendBtn: {
    backgroundColor: '#1DAECA',
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    borderTopColor: 'gray',
    borderWidth: 1,
  },
});

export default MessageStar;
