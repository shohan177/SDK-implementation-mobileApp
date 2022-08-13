import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import CheckSlot from '../../Components/CheckSlot/CheckSlot.js';
import HeaderComp from '../../Components/HeaderComp';
import InformationComp from '../../Components/InformationComp/InformationComp.js';
import InstructionComp from '../../Components/InstructionComp/InstructionComp.js';
import LoaderComp from '../../Components/LoaderComp.js';
import RegisPaymentModal from '../../Components/Modal/RegisPaymentModal.js';
import RegistrationComp from '../../Components/RegistrationComp/Registration.js';
import Video from '../../Components/Video/Video';
import AppUrl from '../../RestApi/AppUrl.js';
import styles from '../MeetUp/Styles.js';

const Qna = ({route, navigation}) => {
  const [isShowPaymentComp, setIsShowPaymentComp] = useState(false);
  const [isShowRegComp, setIsShowRegComp] = useState(false);
  const [buffer, setBuffer] = useState(false);
  const [feeCount, setFeeCount] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [takeTime, setTakeTime] = useState('1');
  const [parentData, setParentData] = useState({});
  const {data} = route.params;
  useEffect(() => {
    //  console.log('`${AppUrl.MediaBaseUrl + data.qna.banner}`',`${AppUrl.MediaBaseUrl + data.qna.banner}`);
  }, [takeTime]);
  return (
    <SafeAreaView style={styles.container}>
      {buffer ? <LoaderComp /> : <></>}
      <HeaderComp />
      <ScrollView>
        <Video
          image={`${AppUrl.MediaBaseUrl + data.qna.banner}`}
          title={data.qna.title}
        />
        <InformationComp data={data.qna} takeTime={takeTime} />
        <InstructionComp
          title="QNA Instruction"
          instruction={data.qna.instruction}
        />

        {isShowRegComp ? (
          <RegistrationComp
            post={data.qna}
            event_type="qna"
            fee={feeCount}
            start_time={startTime}
            end_time={endTime}
            eventId={data.qna.id}
            modelName="QnaRegistration"
            passChildData={setIsShowPaymentComp}
            setParentData={setParentData}
          />
        ) : (
          <>
            <CheckSlot
              data={data.qna}
              charge={data?.qna?.fee}
              setBuffer={setBuffer}
              setTakeTimeParent={setTakeTime}
              setIsShowRegComp={setIsShowRegComp}
              setFeeCount={setFeeCount}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
              apiInPoint={AppUrl.QnaSlotChecking}
            />
          </>
        )}

        {isShowPaymentComp ? (
          <RegisPaymentModal
            eventType="qna"
            eventId={data.qna.id}
            modelName="qna"
            isShowPaymentComp={isShowPaymentComp}
            setIsShowPaymentComp={setIsShowPaymentComp}
            parentData={parentData}
            event_type="qna"
            start_time={startTime}
            end_time={endTime}
            fee={feeCount}
          />
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Qna;
