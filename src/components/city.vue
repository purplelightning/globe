// globe.gl 3d地球
<template>
  <div id="ww"></div>
</template>

<script>
import Globe from "globe.gl";

export default {
  name: "city",
  data() {
    return {};
  },
  mounted() {
    console.log(this.baseUrl)
    this.initData();
  },
  methods: {
    initData() {
      let dom = document.querySelector("#ww");

      const myGlobe = Globe()

      fetch(this. baseUrl + '/datasets/ne_110m_populated_places_simple.geojson')
      .then(res =>res.json()).then(places => {
        myGlobe.globeImageUrl('http://unpkg.com/three-globe/example/img/earth-night.jpg')
          .backgroundImageUrl('http://unpkg.com/three-globe/example/img/night-sky.png')
          .labelsData(places.features)
          .labelLat(d => d.properties.latitude)
          .labelLng(d => d.properties.longitude)
          .labelText(d => d.properties.name)
          .labelSize(d => Math.sqrt(d.properties.pop_max) * 4e-4)
          .labelDotRadius(d => Math.sqrt(d.properties.pop_max) * 4e-4)
          .labelColor(() => 'rgba(255, 165, 0, 0.75)')
          .labelResolution(2)
          (dom)
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
