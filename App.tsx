import 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { Routes } from "./src/routes";
import { Welcome } from './src/screens/Welcome';


export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {

    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if(hasLaunched === null) {
        // Primeira vez abrindo o app
        await AsyncStorage.setItem('hasLaunched', 'true');
        setIsFirstLaunch(true);
      }
      else {
        setIsFirstLaunch(false);
      }
    }
    checkFirstLaunch();

  }, [])

  if(isFirstLaunch === null) return null;

  return (
    <>
    <StatusBar style="dark" />
    { isFirstLaunch ? (
      <Welcome onComplete={() => setIsFirstLaunch(false)} />
    ) : (
      <Routes />
    ) }
    </>
  );
}