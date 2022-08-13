import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import Menu from '../../Screen/Menu/Menu';

import LearningSessionNav from '../../Components/LearningSession/LearningSessionNav/LearningSessionNav';
import ResultLearningSession from '../../Components/LearningSession/ResultLearningSession/ResultLearningSession';
import VideoUploadLearningSession from '../../Components/LearningSession/VideoUploadLearningSession/VideoUploadLearningSession';
import navigationStrings from '../../Constants/navigationStrings';
import Instuction from '../../Screen/Audition/Instruciton/Instuction';
import Judges from '../../Screen/Audition/Judges/Judges';
import Learning from '../../Screen/Audition/Learning/Learning';
import MarkDistribution from '../../Screen/Audition/MarkDistribution/MarkDistribution';
import Participation from '../../Screen/Audition/Participation/Participation';
import Result from '../../Screen/Audition/Result/Result';
import Round1 from '../../Screen/Audition/Round1/Round1';
import TotalAuditions from '../../Screen/Audition/TotalAuditons/TotalAuditions';
import VideoView from '../../Screen/GallaryVideoView/VideoView';
import UserProfile from '../../Screen/Menu/MenuProfile/UserProfile/UserProfile';
import Wallet from '../../Screen/Menu/Wallet/Wallet';

import ApplyForCertificate from '../../Components/LearningSession/ApplyForCertificate';

const MenuStack = createNativeStackNavigator();
const MenuStackScreen = () => {
  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name={navigationStrings.MENU} component={Menu} />
      <MenuStack.Screen
        name={navigationStrings.USERPROFILE}
        component={UserProfile}
      />
      <MenuStack.Screen
        name={navigationStrings.GALLARYIDEOVIEW}
        component={VideoView}
      />
      <MenuStack.Screen name={navigationStrings.WALLET} component={Wallet} />

      {/* Learning Session */}
      <MenuStack.Screen
        name={navigationStrings.LEARNINGSESSIONNAV}
        component={LearningSessionNav}
      />
      <MenuStack.Screen
        name={navigationStrings.VIDEOUPLOADLEARNINGSESSION}
        component={VideoUploadLearningSession}
      />
      <MenuStack.Screen
        name={navigationStrings.RESULTLEARNINGSESSION}
        component={ResultLearningSession}
      />

      <MenuStack.Screen
        name={navigationStrings.APPLYFORCERLEARNINGSESSION}
        component={ApplyForCertificate}
      />

      {/* Audition */}
      <MenuStack.Screen
        name={navigationStrings.LEARNING}
        component={Learning}
      />
      <MenuStack.Screen
        name={navigationStrings.TOTALAUDITION}
        component={TotalAuditions}
      />
      <MenuStack.Screen name={navigationStrings.ROUND1} component={Round1} />
      <MenuStack.Screen
        name={navigationStrings.INSTRUCTION}
        component={Instuction}
      />
      <MenuStack.Screen name={navigationStrings.JUDGES} component={Judges} />
      <MenuStack.Screen
        name={navigationStrings.MARKDISTIBUTION}
        component={MarkDistribution}
      />
      <MenuStack.Screen
        name={navigationStrings.PARTICIPATION}
        component={Participation}
      />
      <MenuStack.Screen name={navigationStrings.RESULT} component={Result} />
    </MenuStack.Navigator>
  );
};

export default MenuStackScreen;

const styles = StyleSheet.create({});
