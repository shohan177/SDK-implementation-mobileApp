import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';

import {SCREEN_NAMES} from './src/SdkSrc/navigators/screenNames';
import SplashScreen from './src/SdkSrc/scenes/splash/SplashScreen';

import MeetingInfoScreen from './src/SdkSrc/scenes/meetingInfo';
import MeetingInitializerScreen from './src/SdkSrc/scenes/meetingInitializer';
import UpcomingMeetingScreen from './src/SdkSrc/scenes/upcomingMeeting';

import {Colors} from './src/SdkSrc/styles';
import {ROBOTO_FONTS} from './src/SdkSrc/styles/fonts';
import {convertRFValue} from './src/SdkSrc/styles/spacing';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const RootStack = createStackNavigator();

export default function VideoSdk() {
  const [splashVisible, setsplashVisible] = useState(true);

  useEffect(async () => {
    setTimeout(() => {
      setsplashVisible(false);
    }, 1000);
  }, []);

  return splashVisible ? (
    <SplashScreen />
  ) : (
  
      <RootStack.Navigator
        mode="modal"
        screenOptions={{
          animationEnabled: false,
        }}
        initialRouteName={SCREEN_NAMES.UpcomingMeeting}>
        <RootStack.Screen
          name={SCREEN_NAMES.UpcomingMeeting}
          component={UpcomingMeetingScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={SCREEN_NAMES.MeetingInfo}
          component={MeetingInfoScreen}
          options={{
            headerStyle: {
              backgroundColor: Colors.BLUE_MAGENTA,
            },
            title: 'Meeting',
            headerTitleStyle: {
              fontSize: convertRFValue(16),
              fontFamily: ROBOTO_FONTS.RobotoMedium,
              color: Colors.WHITE,
            },
            headerTintColor: 'white',
          }}
        />

        <RootStack.Screen
          name={SCREEN_NAMES.MeetingInitializer}
          component={MeetingInitializerScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
   
  );
}
