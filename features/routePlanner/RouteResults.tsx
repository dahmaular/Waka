import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RouteResults({ route }: { route: string[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Planned Route:</Text>
      {route.map((point, index) => (
        <Text key={index} style={styles.point}>
          {point}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  point: {
    fontSize: 16,
    marginVertical: 4,
  },
});
