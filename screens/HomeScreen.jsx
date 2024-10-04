import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { ViewPager } from "react-native-pager-view";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Wallet and Promotions Section */}
      <View style={styles.walletContainer}>
        <View style={styles.walletItem}>
          <Text>Wallet balance</Text>
          <Text>Rp1.000.000</Text>
        </View>
        <View style={styles.walletItem}>
          <Text>Top up balance</Text>
          <Text>Top up</Text>
        </View>
      </View>

      {/* Horizontal Slider (ViewPager) */}
      <ViewPager style={styles.pager} initialPage={0}>
        <View key="1">
          <Image
            style={styles.bannerImage}
            source={{ uri: "https://your-image-url.com/banner1.jpg" }}
          />
        </View>
        <View key="2">
          <Image
            style={styles.bannerImage}
            source={{ uri: "https://your-image-url.com/banner2.jpg" }}
          />
        </View>
      </ViewPager>

      {/* Categories Section */}
      <View style={styles.categoriesContainer}>
        <Text>Shop by Category</Text>
        {/* Add Category Icons here */}
      </View>

      {/* Products for you */}
      <View style={styles.productContainer}>
        <Text>For You</Text>
        {/* Product items */}
        <View style={styles.product}>
          <Image
            source={{ uri: "https://your-image-url.com/product1.jpg" }}
            style={styles.productImage}
          />
          <Text>Air Legging Sport</Text>
          <Text>Rp200.000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  walletContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  walletItem: {
    flex: 1,
    alignItems: "center",
  },
  pager: {
    height: 200,
  },
  bannerImage: {
    width: "100%",
    height: 200,
  },
  categoriesContainer: {
    marginTop: 20,
  },
  productContainer: {
    marginTop: 20,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
