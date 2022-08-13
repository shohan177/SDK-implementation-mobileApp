import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import InformationComp from '../../Components/InformationComp/InformationComp.js';
import InstructionComp from '../../Components/InstructionComp/InstructionComp.js';
import RegisPaymentModal from '../../Components/Modal/RegisPaymentModal.js';
import RegistrationComp from '../../Components/RegistrationComp/Registration.js';
import Video from '../../Components/Video/Video';
import AppUrl from '../../RestApi/AppUrl.js';
import styles from '../MeetUp/Styles.js';

const LearningSession = ({route, navigation}) => {
  const [isShowPaymentComp, setIsShowPaymentComp] = useState(false);
  const [parentData, setParentData] = useState({});
  const {data} = route.params;
  // console.log('data------', data)
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp />
      <ScrollView>
        <Video
          image={`${AppUrl.MediaBaseUrl + data.learning_session.banner}`}
          title={data.learning_session.title}
        />
        <InformationComp data={data.learning_session} />
        <InstructionComp
          title="Learning Session Instruction"
          instruction={data.learning_session.instruction}
        />
        <RegistrationComp
          post={data.learning_session}
          event_type="learningSession"
          eventId={data.learning_session.id}
          modelName="LearningSessionRegistration"
          passChildData={setIsShowPaymentComp}
          setParentData={setParentData}
        />
        {/* {isShowPaymentComp ? <PaymentComp eventType="LearningSession" eventId={data.learning_session.id} modelName="learningSession" /> : <></>} */}
        {isShowPaymentComp ? (
          <RegisPaymentModal
            eventType="LearningSession"
            eventId={data.learning_session.id}
            modelName="learningSession"
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

export default LearningSession;
