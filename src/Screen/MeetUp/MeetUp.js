import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import InformationComp from '../../Components/InformationComp/InformationComp';
import InstructionComp from '../../Components/InstructionComp/InstructionComp';
import RegisPaymentModal from '../../Components/Modal/RegisPaymentModal';
import RegistrationComp from '../../Components/RegistrationComp/Registration';
import Video from '../../Components/Video/Video';
import AppUrl from '../../RestApi/AppUrl';
import styles from './Styles';

const MeetUp = ({route, navigation}) => {
  const [isShowPaymentComp, setIsShowPaymentComp] = useState(false);
  const [parentData, setParentData] = useState({});
  const {data} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp />
      <ScrollView>
        <Video
          image={`${AppUrl.MediaBaseUrl + data.meetup.banner}`}
          title={data.meetup.title}
        />
        <InformationComp data={data.meetup} />
        <InstructionComp
          title="Meetup Instruction"
          instruction={data.meetup.instruction}
        />
        <RegistrationComp
          post={data.meetup}
          event_type="meetup"
          eventId={data.meetup.id}
          modelName="MeetupEventRegistration"
          passChildData={setIsShowPaymentComp}
          setParentData={setParentData}
        />
        {isShowPaymentComp ? (
          <RegisPaymentModal
            eventType={data.meetup.meetup_type + 'Meetup'}
            eventId={data.meetup.id}
            modelName="meetup"
            isShowPaymentComp={isShowPaymentComp}
            setIsShowPaymentComp={setIsShowPaymentComp}
            parentData={parentData}
          />
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MeetUp;
