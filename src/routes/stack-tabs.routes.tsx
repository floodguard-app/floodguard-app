import { createStackNavigator } from '@react-navigation/stack'
import { Configs } from '../screens/Configs';

// Import Screens

const { Navigator, Screen } = createStackNavigator();

interface NavigationPattern {
    name: string;
    component: any;
}

interface StackTabsRoutesProps {
    otherNavigationPatterns?: Array<NavigationPattern>;
}

export default function StackTabsRoutes({ otherNavigationPatterns }:StackTabsRoutesProps) {
    return (
        <Navigator>
            {/* Outros padrões de navegação */}
            { otherNavigationPatterns?.map(pattern => 
                <Screen 
                    key={pattern.name}
                    name={pattern.name}
                    component={pattern.component}
                    options={{
                        headerShown: false,
                    }}
                />
            ) }


            {/* Stack navigation pattern */}
            <Screen 
                name='Configurations Screen'
                component={Configs}
                options={{
                    title: 'Configurations',
                    headerShown: true,
                }}
            />
        </Navigator>
    )
}