import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const wishlistData = [
  {
    id: "1",
    name: "AERO SPORT INFINITY PRO",
    category: "Footwear",
    price: "Rp400.000",
    image: require("../assets/aero-sport-infinity-pro.jpg"), // Replace with your actual images
  },
  {
    id: "2",
    name: "SPORT+ INVINCIBLE PRO",
    category: "Footwear",
    price: "Rp389.000",
    image: require("../assets/sport-invincible-pro.jpg"),
  },
  {
    id: "3",
    name: "SPORT SNEAKERS+ BLUE",
    category: "Footwear",
    price: "Rp200.000",
    image: require("../assets/sport-sneakers-blue.jpg"),
  },
  {
    id: "4",
    name: "SPORT+ INVINCIBLE MAX",
    category: "Footwear",
    price: "Rp399.000",
    image: require("../assets/sport-invincible-max.jpg"),
  },
];

const WishlistPage = ({ navigation }) => {
  const renderWishlistItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>WISHLIST</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="cart-outline" size={24} color="black" />
          <Ionicons
            name="menu-outline"
            size={24}
            color="black"
            style={{ marginLeft: 15 }}
          />
        </View>
      </View>

      {/* Wishlist Items */}
      <FlatList
        data={wishlistData}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 2 items per row
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContent: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  itemImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
    // textAlign: "center",
  },
  itemCategory: {
    fontSize: 12,
    color: "gray",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff6600",
  },
});

export default WishlistPage;
