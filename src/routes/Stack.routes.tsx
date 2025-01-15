import { createStackNavigator } from '@react-navigation/stack'
import { RegisterUser } from '../screens/RegisterUser';
import { Credentials } from '../screens/Login/Credentials';
import { Configs } from '../screens/Configs';
import { WriteComment } from '../screens/WriteComment';
import MainRoutes from './Main.routes';
import { RecoverPassword } from '../screens/Login/RecoverPassword';


import { Profile } from '../screens/Profile';
import { AlertConfig } from '../screens/AlertConfig';
import { ReportAbuse } from '../screens/ReportAbuse';
import { TalkToUs } from '../screens/TalkToUs';
import ConfigRoutes from './Config.routes';


export type StackParamList = {
    'Configurations Screen': undefined; 
    'Register User Screen': { onComplete: () => void }; // Parâmetro esperado
    [key: string]: any; 
};

// Import Screens

const { Navigator, Screen } = createStackNavigator<StackParamList>();

interface NavigationPattern {
    name: keyof StackParamList;
    component: any;
}

interface StackTabsRoutesProps {
    otherNavigationPatterns?: Array<NavigationPattern>;
}



export default function StackTabsRoutes(
    // { otherNavigationPatterns }:StackTabsRoutesProps
) {
    return (
        <Navigator
            initialRouteName="Register User Screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f2f2f2',
                },
                headerShown: true,
                title: '',
            }}
        >

            <Screen 
                name="Main Tabs"
                component={MainRoutes}
                options={{
                    headerShown: false,
                }}
            />

            <Screen 
                name="Write Comment Screen"
                component={WriteComment}
            />

            <Screen 
                name="Register User Screen"
                component={RegisterUser}
                initialParams={{ onComplete: () => {} }}
                options={{
                    headerShown: false, // Sobrescreve o padrão
                }}
            />

            <Screen 
                name="Login Screen"
                component={Credentials}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="Recover Password Screen"
                component={RecoverPassword}
                options={{
                    headerShown: false,
                }}
            />

            <Screen 
                name="Configurations Screen"
                component={Configs}
            />

            <Screen
                name="Configurations Tabs"
                component={ConfigRoutes}
                options={{
                    headerShown: false,
                }}
            />
            
        </Navigator>
    )
}