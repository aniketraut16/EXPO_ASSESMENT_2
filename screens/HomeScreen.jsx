import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ViewPager from "react-native-pager-view";
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  FontAwesome6,
  AntDesign,
} from "@expo/vector-icons";

// Import images from assets
const banner1 = require("../assets/banner1.png");
const banner2 = require("../assets/banner2.png");
const product1 = require("../assets/fy1.png");
const product2 = require("../assets/fy2.png");
const product3 = require("../assets/fy3.png");
const product4 = require("../assets/fy4.png");

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Logo and Icons Row */}
      <View style={styles.header}>
        <Text style={styles.logo}>Sport Shoes</Text>
        <View style={styles.iconRow}>
          <FontAwesome name="heart" size={24} color="black" />
          <MaterialIcons
            name="shopping-cart"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
          <FontAwesome name="user" size={24} color="black" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search items" />
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={18} color="white" />
        </TouchableOpacity>
      </View>

      {/* Wallet and Promotions Section */}
      <View style={styles.walletContainer}>
        <View style={styles.walletItem}>
          <Text style={styles.walletText}>Wallet balance</Text>
          <AntDesign
            name="wallet"
            size={24}
            color="black"
            style={styles.walletIteminline}
          />
          <Text style={styles.walletIteminline}>Rp 1.000.000</Text>
        </View>
        <View style={styles.walletItem}>
          <Text style={styles.walletText}>Top up balance</Text>
          <MaterialIcons name="add-circle" size={20} color="black" />
          <Text>Top up</Text>
        </View>
      </View>

      {/* Horizontal Slider (ViewPager) */}
      <ViewPager style={styles.pager} initialPage={0}>
        <View key="1">
          <Image style={styles.bannerImage} source={banner1} />
        </View>
        <View key="2">
          <Image style={styles.bannerImage} source={banner2} />
        </View>
      </ViewPager>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <View style={styles.categoriesRow}>
          <View style={styles.category}>
            <Ionicons name="footsteps" size={24} color="black" />
            <Text style={styles.categoryText}>Footwear</Text>
          </View>
          <View style={styles.category}>
            <FontAwesome name="shopping-bag" size={20} color="black" />
            <Text style={styles.categoryText}>Bags</Text>
          </View>
          <View style={styles.category}>
            <FontAwesome6 name="shirt" size={24} color="black" />
            <Text style={styles.categoryText}>Apparel</Text>
          </View>
        </View>
      </View>

      {/* Products for You */}
      <View style={styles.productContainer}>
        <Text style={styles.sectionTitle}>For You</Text>
        <View style={styles.productRow}>
          <View style={styles.product}>
            <Image source={product1} style={styles.productImage} />
            <Text style={styles.productName}>Air Legging Sport</Text>
            <Text style={styles.productCategory}>Apparel</Text>
            <Text style={styles.productPrice}>Rp200.000</Text>
          </View>
          <View style={styles.product}>
            <Image source={product2} style={styles.productImage} />
            <Text style={styles.productName}>Aero Sport Infinity</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp450.000</Text>
          </View>
        </View>
        <View style={styles.productRow}>
          <View style={styles.product}>
            <Image source={product3} style={styles.productImage} />
            <Text style={styles.productName}>Sport+ Runner Blue</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp250.000</Text>
          </View>
          <View style={styles.product}>
            <Image source={product4} style={styles.productImage} />
            <Text style={styles.productName}>Sport+ Bag</Text>
            <Text style={styles.productCategory}>Bag</Text>
            <Text style={styles.productPrice}>Rp350.000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Add refined styles to match the provided UI
// Modify the styles for Search Bar and For You section
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF6600",
    marginHorizontal: 6,
  },
  iconRow: {
    flexDirection: "row",
    marginHorizontal: 12,
  },
  iconSpacing: {
    marginHorizontal: 15,
  },
  // Updated Search Bar styling
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    backgroundColor: "#f1f1f1",
    borderRadius: 7, // More rounded
    paddingHorizontal: 10, // Increased padding for better aesthetics
    height: 45, // Increased height
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  searchButton: {
    backgroundColor: "#FF6600",
    padding: 10,
    borderRadius: 7, // Fully rounded button
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40, // Same width and height for a round button
  },
  walletContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  walletItem: {
    alignItems: "center",
  },
  walletIteminline: {
    display: "inline",
  },
  walletText: {
    fontWeight: "bold",
    marginTop: 5,
  },
  pager: {
    height: 160,
    marginVertical: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoriesContainer: {
    marginVertical: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  categoriesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  category: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 90,
    height: 90,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 14,
  },
  // Updated Product Container styling
  productContainer: {
    marginTop: 15,
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  product: {
    width: "48%", // Reduced width for even spacing
    // alignItems: "center",
    backgroundColor: "#f9f9f9", // Adding a subtle background color to make it stand out
    borderRadius: 10,
    padding: 10, // Add padding inside the product card
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 14,
  },
  productCategory: {
    fontSize: 12,
    color: "gray",
  },
  productPrice: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 16,
    color: "#FF6600",
  },
});

export default HomePage;
