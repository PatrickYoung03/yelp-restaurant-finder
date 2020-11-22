import React from "react";

import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ text, onTermChange, onSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather
        name="search"
        style={styles.image}
        size={30}
        style={{ marginLeft: 15 }}
      />
      <TextInput
        value={text}
        onChangeText={onTermChange}
        placeholder="Search"
        style={styles.input}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    height: 50.5,
    borderRadius: 9,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 15,
    flex: 1,
  },
});

export default SearchBar;
