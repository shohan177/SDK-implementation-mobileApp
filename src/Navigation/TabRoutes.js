import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../Constants/context';
import navigationStrings from '../Constants/navigationStrings';
import AppUrl from '../RestApi/AppUrl';
import VideoSliderContainer from '../Screen/VideoSlider/VideoSliderContainer';
import {HomeStackScreen} from './HomeStack/HomeStackScreen';
import {MarketPlaceStackScreen} from './MarketPlaceStack/MarketPlaceStackScreen';
import MenuStackScreen from './MenuStack/MenuStackScreen';
import {NotificationStackScreen} from './NotificationStack/NotificationStackScreen';

const Tab = createBottomTabNavigator();
// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator screenOptions={{ headerShown:false }}>
//       <HomeStack.Screen name={navigationStrings.HOME} component={Home} />
//       <HomeStack.Screen name={navigationStrings.MEETUP} component={MeetUp} />
//     </HomeStack.Navigator>
//   );
// }

// const MenuStack = createNativeStackNavigator();

// function MenuStackScreen() {
//   return (
//     <MenuStack.Navigator screenOptions={{ headerShown:false }}>
//       <MenuStack.Screen name={navigationStrings.MENU} component={Menu} />
//       <MenuStack.Screen name={'UserProfile'} component={UserProfile} />
//     </MenuStack.Navigator>
//   );
// }

const TabRoutes = () => {
  const {notification, setNotification, axiosConfig} = useContext(AuthContext);

  useEffect(() => {
    checkNotification();
  }, []);

  let checkNotification = async () => {
    let res = await axios
      .get(AppUrl.CheckNotification, axiosConfig)
      .then(res => {
        setNotification(res?.data?.notifiction);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // console.log('notification-----', notification);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: '#272727',
          // borderTopRightRadius: 10,
          // borderTopLeftRadius: 10,
          paddingHorizontal: 3,
          // bottom: 10,
          //   paddingBottom: 6,
          height: 60,
        },
      }}>
      <Tab.Screen
        name={navigationStrings.HOMESTACK}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="home"
                      color={focused ? '#FFAD00' : 'white'}
                      size={23}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="home"
                      color={focused ? '#FFAD00' : 'white'}
                      size={23}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.NOTIFICATIONSTACK}
        component={NotificationStackScreen}
        options={{
          tabBarBadge: notification?.length > 0 ? notification?.length : null,
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="bell"
                      color={focused ? '#FFAD00' : 'white'}
                      size={22}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="bell"
                      color={focused ? '#FFAD00' : 'white'}
                      size={22}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="hekkpo"
        component={VideoSliderContainer}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="video"
                      color={focused ? '#FFAD00' : 'white'}
                      size={23}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="video"
                      color={focused ? '#FFAD00' : 'white'}
                      size={23}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.MARKETPLACE}
        component={MarketPlaceStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="shopping"
                      color={focused ? '#FFAD00' : 'white'}
                      size={22}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="shopping"
                      color={focused ? '#FFAD00' : 'white'}
                      size={22}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name={navigationStrings.MENUSTACK}
        component={MenuStackScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="format-list-bulleted"
                      color={focused ? '#FFAD00' : 'white'}
                      size={24}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <MaterialCommunityIcons
                      name="format-list-bulleted"
                      color={focused ? '#FFAD00' : 'white'}
                      size={24}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  activeTab: {
    position: 'absolute',
    borderColor: '#FFAD00',
    borderWidth: 1,
    // backgroundColor: '#ffffff7c',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTab: {
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#00000048',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabRoutes;
