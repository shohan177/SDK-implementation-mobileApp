import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';
import React, { useState, useContext } from 'react';
import styles from './Styles';
import imagePath from '../../Constants/imagePath';
import UnderlineImage from './../Reuseable/UnderlineImage';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../Constants/navigationStrings';
import { AuthContext } from '../../Constants/context';
import { useForm, Controller } from "react-hook-form";
import AppUrl from '../../RestApi/AppUrl';
import axios from 'axios';
import LoaderComp from '../LoaderComp';
import AlertModal from '../Modal/AlertModal';

const PaymentComp = ({ eventType, eventId, modelName }) => {
  // console.log('PaymentComp---------eventType---------', eventType)
  // console.log('PaymentComp---------eventId---------', eventId)
  // console.log('PaymentComp---------modelName---------', modelName)
  const { axiosConfig } = useContext(AuthContext);
  const Navigation = useNavigation()
  const [buffer, setBuffer] = useState(false)
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const [modal, setModal] = useState(false);

  // this modal object is for modal content 
  const [modalObj, setModalObj] = useState({
    modalType: '',
    buttonTitle: '',
    message: ''
  });

  const onSubmit = (data) => {
    let aditionalData = {
      ...data,
      'event_id': eventId,
      'model_name': modelName
    }
    setBuffer(true)

    axios.post(AppUrl.EventRegister, aditionalData, axiosConfig).then(res => {
      // console.log(res.data)
      setBuffer(false)

      if (res.data.status === 200) {

        reset(data)
        if (eventType == "OfflineMeetup") {
          setModalObj({
            modalType: 'success',
            buttonTitle: 'Download Ticket',
            message: 'Registration completed successfully !'
          })
        } else {
          setModalObj({
            modalType: 'success',
            buttonTitle: 'OK',
            message: 'Registration completed successfully !'
          })
        }
        setModal(true)
      }
      else {
        setModalObj({
          modalType: 'warning',
          buttonTitle: 'OK',
          message: 'Something Went Wrong'
        })
        setModal(true)
      }
    }).catch((err) => {
      setBuffer(false)
      setModalObj({
        modalType: 'warning',
        buttonTitle: 'OK',
        message: 'Something Went Wrong'
      })
      setModal(true)
    });
  }

  const modalButtonPress = () => {
    setModal(false)
    if (eventType == "OfflineMeetup") {
      Linking.openURL(
        'http://www.africau.edu/images/default/sample.pdf',
      )
    } else if (eventType == "OnlineMeetup") {
      return Navigation.navigate(navigationStrings.HOME);
    } else {
      return Navigation.navigate(navigationStrings.HOME);
    }
  }

  return (
    <>
      <AlertModal modalObj={modalObj} modal={modal} setModal={setModal} buttoPress={modalButtonPress} />
      {buffer ?
        <LoaderComp />
        :
        <></>
      }
      <View style={styles.topCard}>
        <Text style={styles.fonts}>Payment Information</Text>
        <UnderlineImage />
        <ScrollView horizontal>
          <TouchableOpacity>
            <Image source={imagePath.paypal} style={{ margin: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imagePath.bkash} style={{ margin: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imagePath.payneeor} style={{ margin: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imagePath.bank} style={{ margin: 10 }} />
          </TouchableOpacity>
        </ScrollView>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text style={styles.formText}>Card Holder Name</Text>
              <View style={styles.formText2}>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  style={styles.textInputStyle}
                  placeholderTextColor="#fff"
                  placeholder="Enter Name"
                  value={value}
                />
                {errors.card_holder_name && <Text style={{ color: 'red', marginLeft: 8 }}>This field is required !</Text>}
              </View>
            </View>

          )}
          name="card_holder_name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text style={styles.formText}>Card Number</Text>
              <View style={styles.formText2}>
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.textInputStyle}
                  placeholderTextColor="#fff"
                  placeholder="Enter Card Number"
                />
                {errors.card_number && <Text style={{ color: 'red', marginLeft: 8 }}>This field is required !</Text>}
              </View>
            </View>
          )}
          name="card_number"
        />

        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.formText, { width: '45%' }]}>Date</Text>
            <Text style={styles.formText}>CCTV</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.formText2, { width: '45%' }]}>
              <TextInput
                style={styles.textInputStyle}
                placeholderTextColor="#fff"
                placeholder="23-04-22"
              />
            </View>
            <View style={[styles.formText2, { width: '45%' }]}>
              <TextInput
                style={styles.textInputStyle}
                placeholderTextColor="#fff"
                placeholder="125"
              />
            </View>
          </View>
        </View>

        <View style={styles.textInputView}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFAD00',
              width: '40%',
              borderRadius: 4,
            }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 8,
                color: '#292929'
              }}>

              Confirm Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PaymentComp;
