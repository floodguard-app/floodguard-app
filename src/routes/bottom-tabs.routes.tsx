import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import { Home } from '../screens/Home'

const { Navigator, Screen } = createBottomTabNavigator()

export default function BottomTabsRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#2d3142' },
                tabBarActiveTintColor: '#5e9ff2',
                tabBarInactiveTintColor: '#ffffff',
            }}
        >
            <Screen 
                name='Home Screen'
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons 
                            name='notifications'
                            size={30}
                            color={color}
                        />
                    ),
                    title: 'Home',
                    tabBarShowLabel: false,
                }}
            />
        </Navigator>
    )
}