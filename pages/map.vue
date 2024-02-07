<template>
  <div
    id="map-container"
    class="map-container"
    name="map-container"
    style="width: 500px; height: 400px"
  ></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const map = new DG.Map("map-container");
    map.setView([76.9, 43.25], 40);
    DG.marker([76.9, 43.25]).addTo(map);
    marker.bindPopup("Hello, World!").openPopup();
    // const tileLayer = DG.tileLayer(
    //   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    // );
    // tileLayer.addTo(map);
  },
};
</script>
