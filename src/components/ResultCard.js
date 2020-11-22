import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";
import ResultsList from "./ResultsList";

const ResultCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <Text style={styles.text}>{data.name}</Text>
      <Text style={{ marginBottom: 10 }}>
        {data.rating} Stars, {data.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 125,
    borderRadius: 4,
    marginVertical: 5,
  },
  container: {
    marginLeft: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 3,
  },
});

export default ResultCard;
