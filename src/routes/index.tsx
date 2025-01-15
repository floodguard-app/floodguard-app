import { NavigationContainer } from '@react-navigation/native'

// Padrões de navegação
import BottomTabsRoutes from './Main.routes'
import StackTabsRoutes from './Stack.routes'

export function Routes() {
    return (
        // <NavigationContainer>
            <StackTabsRoutes 
                // otherNavigationPatterns={[
                //     { name: 'bottom-tab-pattern', component: BottomTabsRoutes }
                // ]}
            />
        // </NavigationContainer>
    )
}