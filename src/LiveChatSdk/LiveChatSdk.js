import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MediaStream,
  RTCView,
} from '@videosdk.live/react-native-sdk';
import {createMeeting, token} from '../../api';
import {useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AntDesign from 'react-native-vector-icons/AntDesign';

function JoinScreen(props) {
  const [meetingVal, setMeetingVal] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F6F6FF',
        justifyContent: 'center',
        paddingHorizontal: 6 * 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          props.getMeetingId();
        }}
        style={{backgroundColor: 'black', padding: 12, borderRadius: 6}}>
        <Text style={{color: 'white', alignSelf: 'center', fontSize: 18}}>
          Create Meeting
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          alignSelf: 'center',
          fontSize: 22,
          marginVertical: 16,
          fontStyle: 'italic',
          color: 'grey',
        }}>
        ---------- OR ----------
      </Text>
      <TextInput
        value={meetingVal}
        onChangeText={setMeetingVal}
        placeholder={'XXXX-XXXX-XXXX'}
        style={{
          padding: 12,
          borderWidth: 1,
          borderRadius: 6,
          fontStyle: 'italic',
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 12,
          marginTop: 14,
          borderRadius: 6,
        }}
        onPress={() => {
          props.getMeetingId(meetingVal);
        }}>
        <Text style={{color: 'white', alignSelf: 'center', fontSize: 18}}>
          Join Meeting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const Button = ({onPress, buttonText, backgroundColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 4,
      }}>
      <Text style={{color: 'white', fontSize: 12}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

function ControlsContainer({join, leave, toggleWebcam, toggleMic}) {
  return (
    <View
      style={{
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          backgroundColor: '#ffaa00',
        }}
        onPress={() => {
          join();
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Join</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          borderRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          backgroundColor: '#ffaa00',
        }}
        onPress={() => {
          toggleWebcam();
        }}>
        <Icon name="video" size={18} color={'#000'} />
     
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          borderRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          backgroundColor: '#ffaa00',
        }}
        onPress={() => {
          toggleMic();
        }}>
        <Icon name="microphone" size={18} color={'#000'} />
      
      </TouchableOpacity>

 

      <TouchableOpacity
        style={{
          borderRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          backgroundColor: 'red',
        }}
        onPress={() => {
          leave();
        }}>
        <AntDesign name="closecircle" size={18} color={'white'} />
       
      </TouchableOpacity>

 
    </View>
  );
}
// tccz-lx9c-ek4z
function ParticipantView({participantId}) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const {webcamStream, webcamOn, isLocal} = useParticipant(participantId);
  return webcamOn ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={'cover'}
      style={isLocal ? styles.userVideo : styles.remoteVideo}
    />
  ) : (
    <View style={isLocal ? styles.userVideo : styles.remoteVideo}>
      <Text style={{fontSize: 16, color: 'red'}}>NO MEDIA</Text>
    </View>
  );
}

// ========================================

// function ParticipantView({participantId}) {
//   const {webcamStream, webcamOn, isLocal} = useParticipant(participantId);
//   return (
//     <View>
//       {webcamOn ? (
//         <>
//           {isLocal ? (
//             <RTCView
//               streamURL={new MediaStream([webcamStream.track]).toURL()}
//               objectFit={'cover'}
//               style={{
//                 height: 130,
//                 width: 130,
//                 marginVertical: 8,
//                 marginHorizontal: 8,
//                 position: 'absolute',
//                 zIndex: 99,
//                 right: 10,
//                 top: 10,
//                 borderWidth: 1,
//                 borderColor: 'white',
//               }}
//             />
//           ) : (

//             <RTCView
//               streamURL={new MediaStream([webcamStream.track]).toURL()}
//               objectFit={'cover'}
//               style={{
//                 backgroundColor: 'grey',
//                 height: 600,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderWidth: 1,
//                 borderColor: 'white',
//                 zIndex: 0,
//                 position: 'relative',

//               }}
//             />
//           )}
//         </>
//       ) : (
//         <>
//           {isLocal ? (
//             <View
//               style={{
//                 height: 130,
//                 width: 130,
//                 marginVertical: 8,
//                 marginHorizontal: 8,
//                 position: 'absolute',
//                 zIndex: 99,
//                 right: 10,
//                 top: 10,
//                 borderWidth: 1,
//                 borderColor: 'white',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderRadius:5

//               }}>
//               <Text style={{fontSize: 16, color: '#ffaa00'}}>
//                 Your Camera Off
//               </Text>
//             </View>
//           ) : (
//             <View
//               style={{
//                 backgroundColor: '#010101',
//                 height: 350,
//                 justifyContent: 'center',
//                 alignItems: 'center',

//                 zIndex: 0,
//               }}>
//               <Text style={{fontSize: 19, color: '#ffaa00'}}>
//                 STAR CAMERA OFF
//               </Text>
//             </View>
//           )}
//         </>
//       )}
//     </View>
//   );
// }

function ParticipantList({participants}) {
  // console.log(participants)

  return participants.length > 0 ? (
    <View style={styles.container}>
      {participants &&
        participants.map(item => <ParticipantView participantId={item} />)}
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: 'white'}}>
        Press Join button to enter meeting.
      </Text>
    </View>
  );
}
function MeetingView() {
  const {join, leave, toggleWebcam, toggleMic, participants} = useMeeting({});
  const participantsArrId = [...participants.keys()];

  return (
    <View style={{flex: 1}}>
      <ParticipantList participants={participantsArrId} />
      <ControlsContainer
        join={join}
        leave={leave}
        toggleWebcam={toggleWebcam}
        toggleMic={toggleMic}
      />
    </View>
  );
}
export default function LiveChatSdk() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingId = async id => {
    const meetingId = id == null ? await createMeeting({token}) : id;
    setMeetingId(meetingId);
  };

  return meetingId ? (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: true,
          name: 'Test User',
        }}
        token={token}>
        <MeetingView />
      </MeetingProvider>
    </SafeAreaView>
  ) : (
    <JoinScreen getMeetingId={getMeetingId} />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  userVideo: {
    // backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 80,
    left: '55%',
    top: '2%',
    width: '40%',
    height: '28%',
    overflow: 'hidden',
    zIndex: 2,
  },
  remoteVideo: {
    // backgroundColor: 'black',
    // borderColor: 'black',
    flex: 1,
    // borderWidth: 5,
    // borderRadius: 20,
  },
});
