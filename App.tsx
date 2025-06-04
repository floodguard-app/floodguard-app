import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { Routes } from "./src/routes";
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}