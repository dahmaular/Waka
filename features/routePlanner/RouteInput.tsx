import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setRoutePoints } from "./slices";

export default function RouteInput() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const dispatch = useDispatch();

  const handlePlanRoute = () => {
    dispatch(setRoutePoints({ startPoint: start, endPoint: end }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Start Point"
        value={start}
        onChangeText={setStart}
      />
      <TextInput
        style={styles.input}
        placeholder="End Point"
        value={end}
        onChangeText={setEnd}
      />
      <Button title="Plan Route" onPress={handlePlanRoute} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});
