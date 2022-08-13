import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './Styles'
import imagePath from '../../../../../../Constants/imagePath'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import noImage from '../../../../../../Assets/Images/no-image.png'
import VideoPlayer from 'react-native-video-player';
import moment from 'moment';
import AppUrl from '../../../../../../RestApi/AppUrl';
import PostCard from '../../../../../../Components/Card/PostCard/PostCard';

const windowWidth = Dimensions.get('window').width;
const ProfilePost = ({ userActivites }) => {

  //console.log("user activity", userActivites)
  const vedioRef = React.useRef(null)

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };
  const loadVideo = () => {
    setVideoLoad(true)
  };
  return (
    <>
      {/* Dynamic data from user activities table */}
      {userActivites && userActivites?.map((item, index) =>

        <>
          {item.type != "marketplace" && item.type != "auction" &&

            <PostCard key={index} post={item} callform="user-profile" />
          }
        </>


      )}




    </>
  )
}

export default ProfilePost

