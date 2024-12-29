import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

export default function NotificationSettings() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enable Alerts</Text>
      <Switch value={alertsEnabled} onValueChange={setAlertsEnabled} />
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
