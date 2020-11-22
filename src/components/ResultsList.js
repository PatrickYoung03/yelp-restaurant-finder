import React from "react";

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import ResultCard from "./ResultCard";
import { withNavigation } from "react-navigation";

const ResultsList = ({ priceType, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{priceType}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Result", { id: item.id })}
            >
              <ResultCard data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 15,
  },
  container: {
    marginTop: 10,
  },
});

export default withNavigation(ResultsList);
