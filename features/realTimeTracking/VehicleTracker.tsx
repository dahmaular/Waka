import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "../../components/Map";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export default function VehicleTracker() {
  const vehicles = useSelector(
    (state: RootState) => state.realTimeTracking.vehicles
  );

  const coordinates = vehicles.map((vehicle) => [
    vehicle.longitude,
    vehicle.latitude,
  ]);

  return (
    <View style={styles.container}>
      <Map coordinates={coordinates} />
      <Text style={styles.info}>Tracking {vehicles.length} vehicles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    textAlign: "center",
    padding: 8,
    fontSize: 16,
  },
});
