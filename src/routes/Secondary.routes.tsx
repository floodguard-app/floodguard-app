import { createStackNavigator } from '@react-navigation/stack'

export type StackParamList = {
    [key: string]: any; 
};

// Import Screens
import { Configs } from '../screens/Configs';
import { WriteComment } from '../screens/WriteComment';

const { Navigator, Screen } = createStackNavigator<StackParamList>();

export default function SecondaryRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f2f2f2',
                },
                headerShown: true,
                title: '',
            }}
        >
            <Screen 
                name="Configurations Screen"
                component={Configs}
            />
            <Screen 
                name="Write Comment Screen"
                component={WriteComment}
            />
        </Navigator>
    )
}