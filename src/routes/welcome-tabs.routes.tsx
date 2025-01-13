import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import RegisterUser from '../screens/RegisterUser';

interface WelcomeRoutesProps {
    onComplete: () => void;
}

const { Navigator, Screen } = createStackNavigator<any>();

export function WelcomeTabsRoutes({ onComplete }: WelcomeRoutesProps) {
    return (
        <Navigator>
            <Screen  
                name="Welcome Screen"
                // children={() => <Welcome onComplete={() => onComplete()} />}
                children={Welcome}
                options={{
                    title: "Welcome",
                    headerShown: false,
                }}
            />
            <Screen  
                name="Register User Screen"
                children={() => <RegisterUser onComplete={onComplete} />}
                options={{
                    title: "Welcome",
                    headerShown: false,
                }}
            />
        </Navigator>
    )
}