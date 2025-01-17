import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import das Rotas
import WelcomeRoutes from './Welcome.routes';
import MainRoutes from './Main.routes';
import ConfigRoutes from './Config.routes';
import SecondaryRoutes from './Secondary.routes';
import AuthRoutes from './Auth.routes';
import { getUserId } from '../services/users';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {

    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            const hasLaunched = await AsyncStorage.getItem('hasLaunched');
            if(hasLaunched === null) {
                // Primeira vez abrindo o app
                setIsFirstLaunch(true);
            }
            else {
                setIsFirstLaunch(false);
            }
        }
        checkFirstLaunch();

        const checkIsLoggedIn = async () => {
            const userId = await getUserId();
            if(userId !== undefined) setIsLoggedIn(true);
            else setIsLoggedIn(false);
        }
        checkIsLoggedIn();

    }, []);

    if(isFirstLaunch === null || isLoggedIn === null) return null; // AppLoading

    return (
        <Navigator
            initialRouteName={ 
                isFirstLaunch ? "Welcome Tabs"
                : isLoggedIn ? "Main Tabs" 
                : "Authentication Tabs" }
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen 
                name="Welcome Tabs"
                component={WelcomeRoutes}
            />

            <Screen 
                name="Main Tabs"
                component={MainRoutes}
            />

            <Screen 
                name="Secondary Tabs"
                component={SecondaryRoutes}
            />

            <Screen
                name="Configurations Tabs"
                component={ConfigRoutes}
            />

            <Screen 
                name="Authentication Tabs"
                component={AuthRoutes}
            />

        </Navigator>
    )
}