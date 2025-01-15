import { createStackNavigator } from '@react-navigation/stack'
import MainRoutes from './Main.routes';
import ConfigRoutes from './Config.routes';
import SecondaryRoutes from './Secondary.routes';
import AuthRoutes from './Auth.routes';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <Navigator
            initialRouteName="Authentication Tabs"
            screenOptions={{
                headerShown: false,
            }}
        >
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