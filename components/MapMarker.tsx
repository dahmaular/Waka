import React from "react";
import { Image } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

export default function MapMarker({
  coordinate,
  icon,
}: {
  coordinate: [number, number];
  icon: string;
}) {
  return (
    <MapboxGL.PointAnnotation coordinate={coordinate}>
      <Image source={{ uri: icon }} style={{ width: 40, height: 40 }} />
    </MapboxGL.PointAnnotation>
  );
}
