import { createStackNavigator } from '@react-navigation/stack'
import { RegisterUser } from '../screens/RegisterUser';
import { Credentials } from '../screens/Login/Credentials';
import { Configs } from '../screens/Configs';
import { WriteComment } from '../screens/WriteComment';
import BottomTabsRoutes from './bottom-tabs.routes';
import { RecoverPassword } from '../screens/Login/RecoverPassword';


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
        <Navigator initialRouteName='Register User Screen'>

            <Screen 
                name='Register User Screen'
                component={RegisterUser}
                initialParams={{ onComplete: () => {} }}
                options={{
                    headerShown: false,
                }}
            />

            <Screen 
                name='Login Screen'
                component={Credentials}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name='Recover Password Screen'
                component={RecoverPassword}
                options={{
                    headerShown: false,
                }}
            />

            <Screen 
                name='Configurations Screen'
                component={Configs}
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#f2f2f2',
                    },
                }}
            />

            <Screen 
                name='Write Comment Screen'
                component={WriteComment}
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#f2f2f2',
                    },
                }}
            />

            <Screen 
                name="Main Tabs"
                component={BottomTabsRoutes}
                options={{
                    headerShown: false,
                }}
            />
        </Navigator>
    )
}