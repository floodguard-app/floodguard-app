import 'react-native-gesture-handler';

import { Routes } from "./src/routes";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <Routes />
    </>
  );
}