import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Details from "../screens/Home/View/DetailsView";
import Teste from "../screens/Home/View/TesteView";
import Home from "../screens/Home/View/HomeView";

const Tab = createBottomTabNavigator();

export default function tabRoutes(){
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="homeView"
                component={Home}
            />

            <Tab.Screen
                name="teste"
                component={Teste}
            />

        </Tab.Navigator>
    )
}