import { NavigationContainer } from '@react-navigation/native'
import BottomTabsRoutes from './bottom-tabs.routes'

export function Routes() {
    return (
        <NavigationContainer>
            <BottomTabsRoutes />
        </NavigationContainer>
    )
}