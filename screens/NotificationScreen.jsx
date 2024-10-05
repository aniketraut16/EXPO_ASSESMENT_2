import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Notification = ({ navigation }) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={styles.headerIcons}>
          <FontAwesome6 name="check-double" size={16} color="#F26522" />
          <Text style={styles.headerTitle1}>Mark as read</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.fewnot}>
          <View style={styles.dot} />
          <Text style={styles.timeText}>Today, 10:20</Text>
          <Text style={styles.titleText}>
            LIMITED-TIME PROMO - UP TO 50% OFF!
          </Text>
          <Text style={styles.bodyText}>
            Don't miss out on this special opportunity! Get up to 50% off on all
            our sports shoes. Check out our latest collection now!
          </Text>
        </View>

        <View style={styles.fewnot}>
          <View style={styles.dot} />
          <Text style={styles.timeText}>Today, 09:05</Text>
          <Text style={styles.titleText}>
            FLASH SALE ALERT - SAVE BIG TODAY!
          </Text>
          <Text style={styles.bodyText}>
            Hurry, our flash sale is live now! Grab your favorite sports shoes
            at unbeatable prices. This offer won't last long!
          </Text>
        </View>

        <View style={styles.notificationCard}>
          <Text style={styles.timeText}>Yesterday, 08:10</Text>
          <Text style={styles.titleText}>GOOD MORNING, RUNNER!</Text>
          <Text style={styles.bodyText}>
            It's time to step out and run. Give your best to your body today.
            Find comfort in every step.
          </Text>
        </View>

        <View style={styles.notificationCard}>
          <Text style={styles.timeText}>July 13, 2023, 17:30</Text>
          <Text style={styles.titleText}>EXCLUSIVE DISCOUNT JUST FOR YOU</Text>
          <Text style={styles.bodyText}>
            Hello loyal customers! We want to reward you with an exclusive 15%
            discount on all our shoe products. Use the code 'EXCLUSIVE15' at
            checkout.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
  headerTitle1: {
    fontSize: 16,
    color: "#F26522",
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // paddingHorizontal: 16,
    paddingTop: 16,
  },
  fewnot: {
    backgroundColor: "#FDF7F0",
    padding: 16,
  },
  notificationCard: {
    padding: 16,
    // marginVertical: 10,
    // borderRadius: 8,
    // borderColor: "#E0E0E0",
    // borderWidth: 1,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: "#FF7A00",
    borderRadius: 4,
    position: "absolute",
    top: 16,
    left: -16,
  },
  timeText: {
    fontSize: 12,
    color: "#888888",
    marginBottom: 4,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 6,
  },
  bodyText: {
    fontSize: 14,
    color: "#666666",
  },
});

export default Notification;
