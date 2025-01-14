import { createStackNavigator } from '@react-navigation/stack'
import { Configs } from '../screens/Configs';
import { WriteComment } from '../screens/WriteComment';
// import { RegisterUser } from '../screens/RegisterUser';

export type StackParamList = {
    'Configurations Screen': undefined; // Nenhum parâmetro
    'Register User Screen': undefined; // Nenhum parâmetro
    [key: string]: any; // Aceita outras rotas dinâmicas
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



export default function StackTabsRoutes({ otherNavigationPatterns }:StackTabsRoutesProps) {
    return (
        <Navigator>
            {/* Outros padrões de navegação */}
            { otherNavigationPatterns?.map(pattern => 
                <Screen 
                    key={pattern.name}
                    name={pattern.name as keyof StackParamList}
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
        </Navigator>
    )
}