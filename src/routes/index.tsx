import { NavigationContainer } from '@react-navigation/native'

// Padrões de navegação
import BottomTabsRoutes from './bottom-tabs.routes'
import StackTabsRoutes from './stack-tabs.routes'

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