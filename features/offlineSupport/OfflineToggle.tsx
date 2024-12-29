import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

export default function OfflineToggle() {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Offline Mode</Text>
      <Switch value={isOffline} onValueChange={setIsOffline} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  label: {
    fontSize: 16,
  },
});
