import React from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatarialIcon from 'react-native-vector-icons/MaterialIcons';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../Constants/imagePath';
import Analytics from './Analytics/Analytics';
import FanbaseModal from './FanbaseModal/FanbaseModal';
import FangroupCard from './FangroupCard/FangroupCard';
import Media from './Media/Media';
import Members from './Members/Members';
import styles from './Styles';
const Fangroup = () => {
  const [fanState, setFanstate] = React.useState('Home');
  // const [submitted, SetSubmitted] = React.useState(false);
  const [showWarning, SetshowWarning] = React.useState(false);
  const [starName, setStarName] = React.useState();
  const [dropDown, setDropDown] = React.useState(true);

  return (
    <View style={styles.container}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => SetshowWarning(false)}
        animationType="slide"
        hardwareAccelerated>
        <FanbaseModal
          CloseModal={() => SetshowWarning(false)}
          starName={starName}
          setStarName={setStarName}
        />
      </Modal>
      <HeaderComp FanGroup={'fangroup'} />
      <View style={styles.row1}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: '100%', resizeMode: 'stretch'}}
            source={
              starName === 'Salman khan'
                ? imagePath.SalmanKhanCover
                : imagePath.fangroupCover
            }
          />
        </View>
      </View>

      <View
        style={starName ? {alignItems: 'center'} : [styles.row1, styles.row2]}>
        <View style={{width: '67%'}}>
          <Text style={styles.fontTitle}>Salman vs Shrukh Fan group!</Text>
          <Text style={styles.fontSubtitle}>
            Created at 12 Feb 2022 || Continue till 12 Apr 2022
          </Text>
        </View>
        {starName ? (
          <></>
        ) : (
          <View style={styles.row3}>
            <TouchableOpacity
              onPress={() => setDropDown(!dropDown)}
              style={{
                backgroundColor: '#ffaa00',
                flexDirection: 'row',
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.joinNowText}>Join Now! </Text>
              </View>

              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <MatarialIcon name="arrow-drop-down" size={20} />
              </View>
            </TouchableOpacity>

            {!dropDown && (
              <View
                style={{
                  backgroundColor: '#313131',
                  borderRadius: 5,
                  marginTop: 5,
                  padding: 10,
                  position: 'absolute',
                  width: '100%',
                  marginTop: 35,
                  zIndex: 15,
                  elevation: Platform.OS === 'android' ? 50 : 0,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setDropDown(true);
                    setStarName('Shrukh khan');
                    SetshowWarning(true);
                  }}
                  style={{
                    borderWidth: 0.7,
                    borderColor: '#4556EA',
                    padding: 2,
                    margin: 3,
                    borderRadius: 10,
                    marginVertical: 5,
                    backgroundColor: `${
                      starName === 'Shrukh khan' ? '#4556EA' : '#313131'
                    }`,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
                    Shrukh khan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setStarName('Salman Khan');
                    setDropDown(true);
                    SetshowWarning(true);
                  }}
                  style={{
                    borderWidth: 0.7,
                    borderColor: '#1FA98F',
                    padding: 2,
                    margin: 3,
                    borderRadius: 10,

                    backgroundColor: `${
                      starName === 'Salman Khan' ? '#1FA98F' : '#313131'
                    }`,
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
                    Salman Khan
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>

      <View style={styles.horizontalLine} />
      {/*....... Route navbar start here....... */}
      <View style={[styles.row1, styles.routerow2]}>
        <TouchableOpacity onPress={() => setFanstate('Home')}>
          <Text
            style={
              fanState === 'Home' ? styles.routeTxtActive : styles.routeTxt
            }>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFanstate('Media')}>
          <Text
            style={
              fanState === 'Media' ? styles.routeTxtActive : styles.routeTxt
            }>
            Media
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFanstate('Analytics')}>
          <Text
            style={
              fanState === 'Analytics' ? styles.routeTxtActive : styles.routeTxt
            }>
            Analytics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFanstate('Members')}>
          <Text
            style={
              fanState === 'Members' ? styles.routeTxtActive : styles.routeTxt
            }>
            Members
          </Text>
        </TouchableOpacity>

        {starName && (
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: 'rgba(219, 8, 246, 1)',
                padding: 2,
                color: 'white',
                borderRadius: 3,
              }}>
              {starName}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/*....... Route navbar end here....... */}
      <ScrollView>
        {fanState === 'Members' || fanState === 'Analytics' ? null : (
          <View style={[styles.row1, styles.postRow]}>
            <View style={styles.subRow}>
              <Text style={[styles.routeTxt, styles.postTitle]}>
                Create a post
              </Text>
              <TextInput
                style={styles.postInput}
                placeholder="Type here to post something"
                placeholderTextColor={'gray'}
              />
              <View style={styles.postView}>
                <TouchableOpacity style={styles.postBtns}>
                  <View>
                    <Icon name="photo" size={20} color="#fff" />
                  </View>
                  <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <Text style={styles.routeTxt}>Add Photo</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postBtns}>
                  <View>
                    <Icon name="video-camera" size={20} color="#fff" />
                  </View>
                  <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <Text style={styles.routeTxt}>Add Video</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postBtns}>
                  <View>
                    <Icon name="tags" size={20} color="#fff" />
                  </View>
                  <View style={{justifyContent: 'center', marginLeft: 5}}>
                    <Text style={styles.routeTxt}>Add Photo</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={[styles.joinNowBtn, styles.postNowBtn]}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: 5,
                    color: '#402801',
                  }}>
                  Post Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View>
          {fanState === 'Home' ? (
            <>
              <FangroupCard />
            </>
          ) : null}
          {fanState === 'Media' ? (
            <ScrollView>
              <Media />
            </ScrollView>
          ) : null}
          {fanState === 'Members' ? <Members /> : null}
          {fanState === 'Analytics' && <Analytics />}
        </View>
      </ScrollView>
    </View>
  );
};

export default Fangroup;
