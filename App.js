import React from "react";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import EasyMode from "./components/Game/EasyMode";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";


export default function App() {
    const Tab = createMaterialBottomTabNavigator();

    return (
      <NavigationContainer>
          <Tab.Navigator
              initialRouteName={"Home"}
              activeColor="#f0edf6"
              inactiveColor="#3e2465"
              barStyle={{ backgroundColor: '#ef0000' }}
              >
              <Tab.Screen name={"Home"} component={Home} />
              <Tab.Screen name={"Jeux"} component={EasyMode} />
              <Tab.Screen name={"About"} component={About} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}


