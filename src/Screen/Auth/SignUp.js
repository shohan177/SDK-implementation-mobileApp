//import liraries
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
// import {LinearTextGradient} from 'react-native-text-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoaderComp from '../../Components/LoaderComp';
import { AuthContext } from '../../Constants/context';
import imagePath from '../../Constants/imagePath';
import AppUrl from '../../RestApi/AppUrl';

// create a component
const SignUp = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const windowWidth = Dimensions.get('window').width;
  const [showPass, setShowPass] = useState(true);
  const { authContext } = useContext(AuthContext);
  const [buffer, setBuffer] = useState(false);
  const [serverError, setServerError] = useState({});
  const screen = Dimensions.get('screen');

  const onSubmit = data => {
    setBuffer(true);

    axios
      .post(AppUrl.CreateUser, data)
      .then(res => {
        //console.log(res.data.validation_errors)
        if (res.data.status === 200) {
          // alert('hello')
          setBuffer(false);
          authContext.signUp(res.data.token, res.data.user);
          navigation.navigate('Otp', {
            phone: data.phone,
          });
        } else {
          setServerError(res.data.validation_errors);
          setBuffer(false);
        }
      })
      .catch(err => {
        console.log(err);
        setBuffer(false);
        // navigation.navigate('Otp', {
        //     phone: data.phone
        // })
      });
  };

  return (
    <KeyboardAwareScrollView>
      <>
        {buffer ? <LoaderComp /> : <></>}
        <ScrollView>
          <ImageBackground
            style={
              windowWidth > 600 ? styles.containerWideScreen : styles.container
            }
            source={imagePath.background}
            resizeMode="cover">
            <View style={styles.header}>
              <Animatable.Image
                animation="zoomIn"
                // duration="1500"

                source={imagePath.logo}
                style={{ height: 100, width: 100 }}
              />
            </View>

            <Animatable.View style={styles.footer} animation="slideInUp">
              {/* <LinearTextGradient
                style={styles.title}
                locations={[0, 1]}
                colors={['#ffaa00', '#fcfab6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}> */}
              <Text style={styles.title}>SIGN UP</Text>
              {/* </LinearTextGradient> */}
              {/* Name input  */}
              <Text style={styles.inputText}>First Name</Text>
              <View style={styles.input}>
                <Icon
                  name="user"
                  color={'#ffaa00'}
                  size={20}
                  style={styles.Icon}
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholderTextColor="#9e9e9e"
                      placeholder="Your first name"
                      style={styles.input_fild}
                    />
                  )}
                  name="first_name"
                />
              </View>
              {errors.first_name && (
                <Text style={{ color: 'red', marginLeft: 8, marginBottom: -15 }}>
                  This field is required !
                </Text>
              )}

              {/* Name input  */}
              <Text style={styles.inputText}>Last Name </Text>
              <View style={styles.input}>
                <Icon
                  name="user"
                  color={'#ffaa00'}
                  size={20}
                  style={styles.Icon}
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholderTextColor="#9e9e9e"
                      placeholder="Your last name"
                      style={styles.input_fild}
                    />
                  )}
                  name="last_name"
                />
              </View>
              {errors.last_name && (
                <Text style={{ color: 'red', marginLeft: 8, marginBottom: -15 }}>
                  This field is required !
                </Text>
              )}
              {/* email input  */}
              <Text style={styles.inputText}>Email </Text>

              <View style={styles.input}>
                <Entypo
                  name="email"
                  color={'#ffaa00'}
                  size={20}
                  style={styles.Icon}
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholderTextColor="#9e9e9e"
                      placeholder="Your Email"
                      style={styles.input_fild}
                    />
                  )}
                  name="email"
                />
              </View>
              {errors.email && (
                <Text style={{ color: 'red', marginLeft: 8, marginBottom: -10 }}>
                  {errors.email?.type === 'pattern'
                    ? 'provide valid email'
                    : 'This field is required !'}
                </Text>
              )}

              {serverError?.email && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: 8,
                    marginBottom: -10,
                    marginTop: 10,
                  }}>
                  {serverError?.email}
                </Text>
              )}
              {/* password input  */}
              <Text style={styles.inputText}>Phone</Text>
              <View style={styles.input}>
                <Icon
                  name="phone"
                  color={'#ffaa00'}
                  size={20}
                  style={styles.Icon}
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                      message: 'Please enter a valid phone number',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholderTextColor="#9e9e9e"
                      placeholder="Your Phone Number"
                      style={styles.input_fild}
                    />
                  )}
                  name="phone"
                />
              </View>
              {errors.phone && (
                <Text style={{ color: 'red', marginLeft: 8, marginBottom: -15 }}>
                  {errors.phone?.type === 'pattern'
                    ? 'provide valid phone number'
                    : 'This field is required !'}
                </Text>
              )}
              {serverError?.phone && (
                <Text
                  style={{
                    color: 'red',
                    marginLeft: 8,
                    marginBottom: -10,
                    marginTop: 10,
                  }}>
                  {serverError?.phone}
                </Text>
              )}
              {/* password input  */}
              <Text style={styles.inputText}>Password</Text>
              <View style={styles.input}>
                <Icon
                  name="lock"
                  color={'#ffaa00'}
                  size={20}
                  style={styles.Icon}
                />
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    minLength: {
                      value: 5,
                      message: ', Min length is 5',
                    },
                    maxLength: {
                      value: 10,
                      message: ', Max length is 10',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholderTextColor="#9e9e9e"
                      placeholder="******"
                      secureTextEntry={showPass}
                      style={styles.input_fild}
                    />
                  )}
                  name="password"
                />
                <TouchableOpacity
                  style={styles.password}
                  onPress={() => setShowPass(!showPass)}>
                  {showPass ? (
                    <Entypo name="eye-with-line" size={20} color={'#ffad00'} />
                  ) : (
                    <Entypo name="eye" size={20} color={'#ffad00'} />
                  )}
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text style={{ color: 'red', marginLeft: 8, marginBottom: -15 }}>
                  This field is required {errors.password.message}
                </Text>
              )}

              {/* button */}
              <View style={styles.btn_container}>
                <TouchableOpacity
                  style={styles.sign_btn}
                  onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.input_title}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                  <LinearGradient
                    style={styles.login_btn}
                    colors={['#F1A817', '#F5E67D', '#FCB706', '#DFC65C']}>
                    <Text style={{ color: 'black' }}>SIGN UP</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </ImageBackground>
        </ScrollView>
      </>
    </KeyboardAwareScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: 809,
  },
  containerWideScreen: {
    flex: 1,
    backgroundColor: 'black',
    height: 809,
    paddingHorizontal: 150,
  },
  Icon: {
    marginTop: 8,
  },
  password: {
    marginTop: 8,
    marginLeft: '5%',
  },
  input_fild: {
    marginLeft: 10,
    color: '#ffaa00',
    height: 40,
    width: '76%',
    // backgroundColor: 'red'
  },
  input: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 1,
    height: 40,
    borderColor: '#ffaa00',
    borderRadius: 50,
    paddingLeft: 16,
    marginTop: 10,
    color: '#ffaa00',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input_title: {
    color: '#ffff',
  },
  inputText: {
    marginTop: 20,
    marginLeft: 5,
    color: '#ffaa00',
  },

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 4,
    backgroundColor: 'Loadergba(0, 0, 0, 0.212)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
  },

  title: {
    color: '#ffaa00',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btn_container: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },

  login_btn: {
    backgroundColor: '#ffaa00',
    borderWidth: 1,
    borderColor: '#ffaa00',
    borderRadius: 50,
    paddingHorizontal: 55,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 30,

    color: 'black',
  },

  sign_btn: {
    borderWidth: 1,
    borderColor: '#ffaa00',
    borderRadius: 50,
    paddingHorizontal: 55,
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 30,

    color: 'black',
  },
});

//make this component available to the app
export default SignUp;
