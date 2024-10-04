import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const WishlistScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Wishlist</Text>
      <View style={styles.productContainer}>
        <View style={styles.product}>
          <Image
            source={{ uri: "https://your-image-url.com/product1.jpg" }}
            style={styles.productImage}
          />
          <Text>Aero Sport Infinity Pro</Text>
          <Text>Rp400.000</Text>
        </View>
        <View style={styles.product}>
          <Image
            source={{ uri: "https://your-image-url.com/product2.jpg" }}
            style={styles.productImage}
          />
          <Text>Sport+ Invincible Pro</Text>
          <Text>Rp389.000</Text>
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
  productContainer: {
    marginTop: 20,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 100,
  },
});

export default WishlistScreen;
