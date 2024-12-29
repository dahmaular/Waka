import React from "react";
// import MapboxGL from "@react-native-mapbox-gl/maps";
import Mapbox from "@rnmapbox/maps";

// MapboxGL.setAccessToken(
//   "pk.eyJ1IjoiZGFobWF1bGFyIiwiYSI6ImNtNTg3NGY1MTFpcGwyanNnOTByZHEyNDYifQ._iaXmyihTyUm4TwosBvLwA"
// );

Mapbox.setAccessToken(
  "pk.eyJ1IjoiZGFobWF1bGFyIiwiYSI6ImNtNTg3NGY1MTFpcGwyanNnOTByZHEyNDYifQ._iaXmyihTyUm4TwosBvLwA"
);

export default function Map({
  coordinates,
}: {
  coordinates: [number, number][];
}) {
  return (
    // <MapboxGL.MapView style={{ flex: 1 }}>
    //   <MapboxGL.Camera
    //     zoomLevel={12}
    //     centerCoordinate={coordinates[0] || [0, 0]}
    //   />
    //   {coordinates.map((coord, index) => (
    //     <MapboxGL.PointAnnotation key={index} coordinate={coord} />
    //   ))}
    // </MapboxGL.MapView>
    <Mapbox.MapView style={{ flex: 1 }} />
  );
}
