import React, { useEffect } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { fetchVehicleLocations } from "@/api/rest/routeService";
import { updateVehicles } from "@/features/realTimeTracking/slices";
import Map from "@/components/Map";

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const vehicles = useSelector(
    (state: RootState) => state.realTimeTracking.vehicles
  );

  // Fetch real-time vehicle data when the screen loads
  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await fetchVehicleLocations();
        dispatch(updateVehicles(data));
      } catch (error) {
        console.error("Error fetching vehicle locations:", error);
      }
    };

    loadVehicles();
  }, [dispatch]);

  // Generate coordinates for Map display
  const coordinates = vehicles.map((vehicle) => [
    vehicle.longitude,
    vehicle.latitude,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map coordinates={coordinates} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Plan Route"
          onPress={() => navigation.navigate("RoutePlanner")}
        />
        <Button
          title="Notifications"
          onPress={() => navigation.navigate("Notifications")}
        />
        <Button
          title="Offline Support"
          onPress={() => navigation.navigate("Offline")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    flex: 4,
    marginBottom: 16,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 16,
  },
});
