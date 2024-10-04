import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
// import CategoriesScreen from "./screens/CategoriesScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import WishlistScreen from "./screens/WishlistScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            }
            // else if (route.name === "Categories") {
            //   iconName = "grid";
            // } else if (route.name === "Profile") {
            //   iconName = "person";
            // } else if (route.name === "Wishlist") {
            //   iconName = "heart";
            // }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ff6600",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
