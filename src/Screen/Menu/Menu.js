import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import noImage from '../../Assets/Images/no-image.png';
import HeaderComp from '../../Components/HeaderComp';
import ActivitiesCard from '../../Components/Reuseable/ActivitiesCard';
import AuctionActivityCard from '../../Components/Reuseable/AuctionActivityCard';
import ActivityListSkeleton from '../../Components/Skeleton/ActivityListSkeleton/ActivityListSkeleton';
import MenuCardSkeleton from '../../Components/Skeleton/MenuCardSkeleton/MenuCardSkeleton';
import {AuthContext} from '../../Constants/context';
import imagePath from '../../Constants/imagePath';
import navigationStrings from '../../Constants/navigationStrings';
import AppUrl from '../../RestApi/AppUrl';
import MenuCategorySkeleton from './../../Components/Skeleton/MenuCardSkeleton/MenuCategorySkeleton';
import MenuActivities from './Content/MenuActivities';
import MenuFanGroup from './Content/MenuFanGroup';
import MenuFilter from './Content/MenuFilter';
import MenuFollowers from './Content/MenuFollowers';
import StarCarousel from './Content/StarCarousel';
import MenuNavigator from './MenuNavigator';
import styles from './styles';

const Menu = () => {
  const Navigation = useNavigation();
  const [menuNavigator, setMenuNavigator] = useState(MenuNavigator.MENUHOME);
  const [menuChange, setMenuChange] = useState(0);
  const [selectCatBuffer, setSelectCatBuffer] = useState(false);

  const [activityLength, setActivityLength] = useState(0);
  const [menuActivitList, setMenuActivitList] = useState({});
  const [childActivityEventList, setChildActivityEventList] = useState({});

  const [childActivityEventType, setChildActivityEventType] = useState('');
  const {useInfo, authContext} = useContext(AuthContext);
  const {axiosConfig, posts, setPosts} = useContext(AuthContext);
  const [loder, setLoder] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [allCategoty, setAllCategory] = useState(null);
  const [upCommingEvents, setUpCommingEvents] = useState({
    learningSessions: '',
    liveChats: '',
    auditions: '',
    meetups: '',
  });

  const handleChange = () => {
    setMenuNavigator(MenuNavigator.MENUACTIVITIES), setMenuChange(0);
  };

  //back icon
  const handleBack = () => {
    setMenuNavigator(MenuNavigator.MENUHOME), setMenuChange(0);
  };

  //follower click
  const handleFollower = () => {
    setMenuNavigator(MenuNavigator.MENUFOLLOWERS);
    setMenuChange(0);
  };

  //fan group click
  const handleFanGroup = () => {
    setMenuNavigator(MenuNavigator.MENUFANGROUP);
    setMenuChange(0);
  };
  const onRefresh = () => {
    setRefreshing(true);
    getMenuList();
    setRefreshing(false);
    getAllUpCommingEvents();
    getAllCategory();
  };

  useEffect(() => {
    getAllCategory();
    getMenuList();
    getAllUpCommingEvents();
  }, []);

  const getMenuList = () => {
    setLoder(true);
    axios
      .get(AppUrl.Menu, axiosConfig)
      .then(res => {
        setLoder(false);
        setActivityLength(res.data.activity_length);
        setMenuActivitList(res.data);
        // console.log('res.data---------', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  /**
   * get up comming all events
   */
  const getAllUpCommingEvents = () => {
    setLoder(true);
    axios
      .get(AppUrl.UpCommingEvents, axiosConfig)
      .then(res => {
        setLoder(false);
        setUpCommingEvents({
          learningSessions: res.data.learningSessions,
          liveChats: res.data.liveChats,
          auditions: res.data.auditions,
          meetups: res.data.meetups,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  /**
   * view all category
   */
  const getAllCategory = () => {
    setLoder(true);
    axios
      .get(AppUrl.Allcategory, axiosConfig)
      .then(res => {
        setLoder(false);
        makeCatrgoryArry(res.data.category);
        // console.log(res.data.selectedCategory)
        //old selscted category
        let categoryArry = res.data.category.map((item, index) => {
          if (res.data.selectedCategory.includes(item.id)) {
            item.isSelected = true;
          } else {
            item.isSelected = false;
          }
          return {...item};
        });

        setAllCategory(categoryArry);
      })
      .catch(err => {
        console.log(err);
      });
  };
  /**
   * make category arry with is selected valu
   */
  const makeCatrgoryArry = data => {
    let categoryArry = data.map((item, index) => {
      item.isSelected = false;
      return {...item};
    });

    setAllCategory(categoryArry);
  };

  /**
   * category selected
   */
  const selectHandaler = valu => {
    setSelectCatBuffer(true);

    let categoryArry = allCategoty.map((item, index) => {
      if (valu == index) {
        item.isSelected = !item.isSelected;
      }
      return {...item};
    });

    setAllCategory(categoryArry);
    const selected = allCategoty.filter(item => item.isSelected);
    let selectedCategory = [];
    selected.map(valu => {
      if (valu.isSelected) {
        selectedCategory.push(valu.id);
      }
    });

    //category list to serve
    let formData = {
      category: JSON.stringify(selectedCategory),
    };

    axios
      .post(AppUrl.categoryAdd, formData, axiosConfig)
      .then(res => {
        if (res.data.status === 200) {
          axios
            .get(AppUrl.AllPostWithPagination + 5 + `?page=1`, axiosConfig)
            .then(res => {
              setSelectCatBuffer(false);
              if (res.data.status === 200) {
                setPosts(res.data.posts);
              }
            });

          ToastAndroid.show('Category updated', ToastAndroid.SHORT);
        }
      })
      .catch(err => {
        console.log(err);
        ToastAndroid.show('problem', ToastAndroid.SHORT);
      });

    // setPosts([])
    // console.log('select all category', selectedCategory)
  };

  /**
   * select category
   */
  const selectCategory = () => {};

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#FFAD00']}
          progressBackgroundColor="black"
        />
      }>
      {/* <SafeAreaView> */}
      <HeaderComp />
      <View
        style={{
          backgroundColor: '#171717',
          flexDirection: 'row',
          paddingVertical: 6,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 8,
            borderRadius: 50,
            marginRight: 10,
            borderColor: '#FFAD00',
            borderWidth: 1,
            overflow: 'hidden',
            padding: 2,
          }}>
          <Image
            source={
              useInfo?.image !== null
                ? {
                    uri: `${AppUrl.MediaBaseUrl + useInfo?.image}`,
                  }
                : noImage
            }
            // source={{

            //   uri: `${AppUrl.MediaBaseUrl + useInfo?.image}`,
            // }}

            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              resizeMode: 'stretch',
              margin: -2,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => Navigation.navigate(navigationStrings.USERPROFILE)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '75%',
          }}>
          <View style={{marginLeft: 7}}>
            <Text style={{color: 'white', fontSize: 18}}>
              {useInfo?.first_name} {useInfo?.last_name}
            </Text>
            <Text style={{color: 'gray'}}>See your profile</Text>
          </View>

          {menuNavigator != MenuNavigator.MENUHOME ? (
            <TouchableOpacity onPress={handleBack}>
              <View style={{marginLeft: 2, marginTop: 10}}>
                <Ionicons
                  style={{
                    color: 'white',
                    fontSize: 24,
                  }}
                  name={'arrow-back'}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={imagePath.MenuCover}
        style={{width: '100%', alignItems: 'center', paddingVertical: 20}}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            style={
              menuNavigator == MenuNavigator.MENUACTIVITIES
                ? styles.mainRowActive
                : styles.mainRow
            }
            onPress={
              activityLength > 0
                ? handleChange
                : () => {
                    ToastAndroid.show(
                      "Pleace wait or you don't have any activity",
                      ToastAndroid.SHORT,
                    );
                  }
            }>
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Image source={imagePath.menuIconActivity} />
            </View>
            <View>
              <Text
                style={
                  menuNavigator == MenuNavigator.MENUACTIVITIES
                    ? styles.fontsActive
                    : styles.fonts
                }>
                Activities
              </Text>
              <Text style={styles.fonts2}>{activityLength} activities</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              menuNavigator == MenuNavigator.MENUFOLLOWERS
                ? styles.mainRowActive
                : styles.mainRow
            }
            onPress={handleFollower}>
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Image source={imagePath.menuIconStar} />
            </View>
            <View>
              <Text
                style={
                  menuNavigator == MenuNavigator.MENUFOLLOWERS
                    ? styles.fontsActive
                    : styles.fonts
                }>
                Followers
              </Text>
              <Text style={styles.fonts2}>20 followers</Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity style={menuNavigator == MenuNavigator.MENUFANGROUP ? styles.mainRowActive : styles.mainRow}
            onPress={handleFanGroup}>
            <View style={{ alignItems: 'center', marginTop: 5 }}>
              <Image source={imagePath.fangroupMenu} />
            </View>
            <View>
              <Text style={menuNavigator == MenuNavigator.MENUFANGROUP ? styles.fontsActive : styles.fonts}>
                Fangroup
              </Text>
              <Text style={styles.fonts2}>6 Activites</Text>
            </View>
          </TouchableOpacity> */}

          {/* wallet added  */}
          <TouchableOpacity
            style={styles.mainRow}
            onPress={() => Navigation.navigate(navigationStrings.WALLET)}>
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Image source={imagePath.Wallet1} />
            </View>
            <View>
              <Text style={styles.fonts}>Wallet</Text>
              <Text style={styles.fonts2}>212 credit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* wallet added  */}
      {/*
  <LoaderComp /> */}
      {menuNavigator == MenuNavigator.MENUHOME ? (
        <>
          <ScrollView style={{backgroundColor: 'black'}}>
            {loder === true ? (
              [0, 1, 2, 3].map(item => {
                if (item === 0) {
                  return <MenuCategorySkeleton key={item} />;
                } else {
                  return <MenuCardSkeleton key={item} />;
                }
              })
            ) : (
              <>
                <View style={styles.menuCrosalItem}>
                  <MenuFilter
                    loader={selectCatBuffer}
                    categoryData={allCategoty}
                    selectHandaler={selectHandaler}
                  />
                </View>

                <View style={{paddingBottom: 5}}>
                  {/* Learning Seassion Carusel Iteam start */}
                  <View style={styles.menuCrosalItem}>
                    <View>
                      <LinearTextGradient
                        style={styles.titelText}
                        locations={[0, 1]}
                        colors={['#ffaa00', '#fcfab6']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}>
                        <Text>Learning Seassion</Text>
                      </LinearTextGradient>
                    </View>
                    <View style={styles.carouselContainer_gray}>
                      <View style={{width: '85%'}}>
                        <StarCarousel
                          eventData={upCommingEvents.learningSessions}
                        />
                      </View>
                      <View style={{width: '15%'}}>
                        <LinearGradient
                          colors={['#F1A817', '#F5E67D', '#FCB706', '#DFC65C']}
                          start={{x: 0, y: 1}}
                          end={{x: 1, y: 0}}
                          style={{borderRadius: 5}}>
                          <TouchableOpacity
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 100,
                            }}
                            onPress={() =>
                              Navigation.navigate(navigationStrings.HOME)
                            }>
                            <Text style={{color: 'black', fontWeight: 'bold'}}>
                              View
                            </Text>
                            <Text style={{color: 'black', fontWeight: 'bold'}}>
                              All
                            </Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    </View>
                  </View>
                  {/* Learning Seassion Carusel Iteam end */}

                  {/* Live Now Carusel Iteam start */}
                  <View style={styles.menuCrosalItem}>
                    <View>
                      <LinearTextGradient
                        style={styles.titelText}
                        locations={[0, 1]}
                        colors={['#ffaa00', '#fcfab6']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}>
                        <Text>Live Chat</Text>
                      </LinearTextGradient>
                    </View>
                    <View style={styles.carouselContainer_gray}>
                      <View style={{width: '85%'}}>
                        <StarCarousel eventData={upCommingEvents.liveChats} />
                      </View>
                      <View style={{width: '15%'}}>
                        <LinearGradient
                          colors={['#F1A817', '#F5E67D', '#FCB706', '#DFC65C']}
                          start={{x: 0, y: 1}}
                          end={{x: 1, y: 0}}
                          style={{borderRadius: 5}}>
                          <TouchableOpacity
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 100,
                            }}
                            onPress={() =>
                              Navigation.navigate(navigationStrings.HOME, {})
                            }>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                              View
                            </Text>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                              All
                            </Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    </View>
                  </View>
                  {/* Live Now Carusel Iteam end */}

                  {/* Upcoming Auditions Carusel Iteam start */}

                  <View style={styles.menuCrosalItem}>
                    <View>
                      <LinearTextGradient
                        style={styles.titelText}
                        locations={[0, 1]}
                        colors={['#ffaa00', '#fcfab6']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}>
                        <Text>Upcoming Events</Text>
                      </LinearTextGradient>
                    </View>
                    <View style={styles.carouselContainer_gray}>
                      <View style={{width: '85%'}}>
                        <StarCarousel eventData={upCommingEvents.liveChats} />
                      </View>
                      <View style={{width: '15%'}}>
                        <LinearGradient
                          colors={['#F1A817', '#F5E67D', '#FCB706', '#DFC65C']}
                          start={{x: 0, y: 1}}
                          end={{x: 1, y: 0}}
                          style={{borderRadius: 5}}>
                          <TouchableOpacity
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 100,
                            }}
                            onPress={() =>
                              Navigation.navigate(navigationStrings.HOME)
                            }>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                              View
                            </Text>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                              All
                            </Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    </View>
                  </View>
                  {/* <View style={styles.menuCrosalItem}>
                    <View>
                      <Text style={styles.titelText}>Upcoming Auditions</Text>
                    </View>
                    <View style={styles.carouselContainer_gray}>
                      <View style={{width: '85%'}}>
                        <StarCarousel eventData={upCommingEvents.auditions} />
                      </View>
                      <View style={{width: '15%'}}>
                        <LinearGradient
                          colors={['#F1A817', '#F5E67D', '#FCB706', '#DFC65C']}
                          start={{x: 0, y: 1}}
                          end={{x: 1, y: 0}}
                          style={{borderRadius: 5}}>
                          <TouchableOpacity
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 100,
                            }}
                            onPress={() =>
                              Navigation.navigate(navigationStrings.HOME)
                            }>
                            <Text style={{fontWeight:'bold'}}>View</Text>
                            <Text style={{fontWeight:'bold'}}>All</Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    </View>
                  </View> */}
                  {/* Upcoming Auditions Carusel Iteam end */}

                  {/* Meetup Events Carusel Iteam start */}
                  <View style={styles.menuCrosalItem}>
                    <View>
                      <LinearTextGradient
                        style={styles.titelText}
                        locations={[0, 1]}
                        colors={['#ffaa00', '#fcfab6']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}>
                        <Text>Meet up Events</Text>
                      </LinearTextGradient>
                    </View>
                    <View style={styles.carouselContainer_gray}>
                      <View style={{width: '85%'}}>
                        <StarCarousel eventData={upCommingEvents.meetups} />
                      </View>
                      <View style={{width: '15%'}}>
                        <LinearGradient
                          colors={['#F1A817', '#F5E67D', '#FCB706', '#DFC65C']}
                          start={{x: 0, y: 1}}
                          end={{x: 1, y: 0}}
                          style={{borderRadius: 5}}>
                          <TouchableOpacity
                            style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 100,
                            }}
                            onPress={() =>
                              Navigation.navigate(navigationStrings.HOME)
                            }>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                              View
                            </Text>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>
                              All
                            </Text>
                          </TouchableOpacity>
                        </LinearGradient>
                      </View>
                    </View>
                  </View>
                  {/* Meetup Events Carusel Iteam end */}

                  {/* Wallet */}
                  {/* <TouchableOpacity style={styles.Wallet}>

                  <View style={{ flex: 2 }}>
                    <Image source={imagePath.Wallet1} />
                  </View>
                  <View style={{ flex: 10 }}>
                    <Text style={styles.TextW}>Wallet</Text>
                    <Text style={styles.TextWT}>2120 diamond available</Text>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.Wallet}>

                  <View style={{ flex: 2 }}>
                    <Image source={imagePath.Audition1} />
                  </View>
                  <View style={{ flex: 10 }}>
                    <Text style={styles.TextW}>Audition</Text>
                    <Text style={styles.TextWT}>1 pending</Text>
                  </View>

                </TouchableOpacity> */}
                </View>
              </>
            )}

            <TouchableOpacity style={styles.Wallet1}>
              <View style={{flex: 2}}>
                <Image source={imagePath.Setting1} />
              </View>
              <View style={{flex: 10}}>
                <Text style={styles.TextWTS}>Setting</Text>
              </View>
            </TouchableOpacity>

            <LinearGradient
              colors={['#F1A817', '#F5E67D', '#FCB706', '#DFC65C']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={{marginVertical: 30}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => authContext.signOut()}>
                <MaterialCommunityIcons
                  name="logout"
                  color={'black'}
                  size={20}
                />
                <Text style={{color: 'black'}}>LOGOUT</Text>
              </TouchableOpacity>
            </LinearGradient>
          </ScrollView>
        </>
      ) : (
        <></>
      )}
      {menuNavigator == MenuNavigator.MENUACTIVITIES && menuChange === 0 ? (
        <>
          {/* {loder ===true && [1, 2, 3, 4,5].map((index) =>
    <ActivityListSkeleton key={index} />)
    } */}

          {loder === true ? (
            [1, 2, 3, 4, 5].map(index => <ActivityListSkeleton key={index} />)
          ) : (
            <MenuActivities
              menuActivitList={menuActivitList}
              menuChange={menuChange}
              setChildActivityEventType={setChildActivityEventType}
              setChildActivityEventList={setChildActivityEventList}
              setMenuChange={setMenuChange}
            />
          )}
        </>
      ) : (
        <></>
      )}
      {menuChange === 1 ? (
        <>
          {childActivityEventType === 'auction' ? (
            <>
              <AuctionActivityCard
                childActivityEventList={childActivityEventList}
                childActivityEventType={childActivityEventType}
              />
            </>
          ) : (
            <></>
          )}
          {childActivityEventType != 'auction' ? (
            <>
              <ActivitiesCard
                childActivityEventList={childActivityEventList}
                childActivityEventType={childActivityEventType}
              />
            </>
          ) : (
            <></>
          )}
        </>
      ) : // <ActivityEventList childActivityEventList={childActivityEventList} childActivityEventType={childActivityEventType} />
      null}
      {menuNavigator == MenuNavigator.MENUFOLLOWERS ? <MenuFollowers /> : <></>}
      {menuNavigator == MenuNavigator.MENUFANGROUP ? <MenuFanGroup /> : <></>}

      {/*
  <MenuHome />
  <MenuActivities />
  <MenuFollowers />
  <MenuFanGroup /> */}

      {/*
</SafeAreaView> */}
    </ScrollView>
  );
};

export default Menu;
