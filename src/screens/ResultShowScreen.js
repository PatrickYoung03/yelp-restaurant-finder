import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setPhotos(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!photos) {
    return null;
  }

  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: "700", marginLeft: 10 }}>
        {photos.name}
      </Text>
      <FlatList
        data={photos.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 10,
    borderRadius: 7,
  },
});

export default ResultShowScreen;
