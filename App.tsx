import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { WelcomeTabsRoutes } from './src/routes/welcome-tabs.routes';
import { Routes } from "./src/routes";
import Welcome from './src/screens/Welcome';
import { Credentials } from './src/screens/Login/Credentials';



export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(false);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // useEffect(() => {

  //   const checkFirstLaunch = async () => {
  //     const hasLaunched = await AsyncStorage.getItem('hasLaunched');
  //     if(hasLaunched === null) {
  //       // Primeira vez abrindo o app
  //       await AsyncStorage.setItem('hasLaunched', 'true');
  //       setIsFirstLaunch(true);
  //     }
  //     else {
  //       setIsFirstLaunch(false);
  //     }
  //   }
  //   checkFirstLaunch();

  // }, [])

  if(isFirstLaunch === null) return null; // AppLoading

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      { isFirstLaunch ? (
        <WelcomeTabsRoutes onComplete={() => setIsFirstLaunch(false)} />
      ) 
      : isLoggedIn ? (
          <Routes />
        ) 
        : (
          <Credentials setIsLoggedIn={setIsLoggedIn}/>
        ) 
       }
    </NavigationContainer>
  );
}