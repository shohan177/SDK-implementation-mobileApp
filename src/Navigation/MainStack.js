import React from 'react';
import VideoSdk from '../../VideoSdk';
import MessengerCom from '../Components/MessengerCom/MessengerCom';
import navigationStrings from '../Constants/navigationStrings';
import Message from '../Screen/Message/Message';
import MessageStar from '../Screen/Message/MessageStar';
import PromoView from '../Screen/PromoSection/PromoView';
import ChatWithStar from '../Screen/StarProfile/Greetings/ChatWithStar/ChatWithStar';
import Greetings from '../Screen/StarProfile/Greetings/Greetings';
import GreetingsHome from '../Screen/StarProfile/Greetings/GreetingsHome/GreetingsHome';
import PaymentInfo from '../Screen/StarProfile/Greetings/PaymentInfo/PaymentInfo';
import TabRoutes from './TabRoutes';

const MainStack = Stack => {
  return (
    <>
      <Stack.Screen name="Tabs" component={TabRoutes} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="MessageStar" component={MessageStar} />
      <Stack.Screen name="Messenger" component={MessengerCom} />
      <Stack.Screen name="Greetings" component={Greetings} />
      <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
      <Stack.Screen name="GreetingsHome" component={GreetingsHome} />
      <Stack.Screen name="ChatWithStar" component={ChatWithStar} />
      <Stack.Screen name={navigationStrings.PROMOSHOW} component={PromoView} />
      <Stack.Screen name={'VideoSdk'} component={VideoSdk} />
    </>
  );
};

export default MainStack;
