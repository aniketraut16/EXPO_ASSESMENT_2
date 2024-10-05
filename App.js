import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Expo Icons

// Import your screens
import HomePage from "./screens/HomeScreen";
import WishlistPage from "./screens/WishlistScreen";
import CategoriesPage from "./screens/CategoriesScreen";
import Notification from "./screens/NotificationScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Wishlist") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Categories") {
              iconName = focused ? "ticket" : "ticket-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff6600",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Wishlist" component={WishlistPage} />
        <Tab.Screen name="Categories" component={CategoriesPage} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
