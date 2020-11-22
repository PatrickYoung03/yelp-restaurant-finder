import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

import useResults from "../hooks/UseResults";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [text, setText] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((res) => {
      return res.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        onSubmit={() => searchApi(text)}
        text={text}
        onTermChange={(v) => setText(v)}
      />
      <Text style={{ color: "red", fontWeight: "700", alignSelf: "center" }}>
        {errorMessage}
      </Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          priceType="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          priceType="Bit Pricier"
        />
        <ResultsList results={filterResultsByPrice("$$$")} priceType="Boujie" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SearchScreen;
