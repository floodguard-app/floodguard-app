import { createStackNavigator } from '@react-navigation/stack'

// Import Screens
import { RegisterUser } from '../screens/RegisterUser';
import { Credentials } from '../screens/Login/Credentials';
import { RecoverPassword } from '../screens/Login/RecoverPassword';

const { Navigator, Screen } = createStackNavigator()

export default function AuthRoutes() {
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
        </Navigator>
    )
}