// globe.gl 3d地球
<template>
  <div id="vv"></div>
</template>

<script>
import Globe from "globe.gl";

export default {
  name: "volcanoes",
  data() {
    return {};
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let dom = document.querySelector("#vv");
      console.log(dom)

      const catColor = d3.scaleOrdinal(d3.schemeCategory10.map(col => polished.transparentize(0.2, col)));

      const getAlt = d => d.elevation * 5e-5;

      const getTooltip = d => `
        <div style="text-align: center">
          <div><b>${d.name}</b>, ${d.country}</div>
          <div>(${d.type})</div>
          <div>Elevation: <em>${d.elevation}</em>m</div>
        </div>
      `;

      const myGlobe = Globe()
        .globeImageUrl('http://unpkg.com/three-globe/example/img/earth-night.jpg')
        .backgroundImageUrl('http://unpkg.com/three-globe/example/img/night-sky.png')
        .pointLat('lat')
        .pointLng('lon')
        .pointAltitude(getAlt)
        .pointRadius(0.12)
        .pointColor(d => catColor(d.type))
        .pointLabel(getTooltip)
        .labelLat('lat')
        .labelLng('lon')
        .labelAltitude(d => getAlt(d) + 1e-6)
        .labelDotRadius(0.12)
        .labelDotOrientation(() => 'bottom')
        .labelColor(d => catColor(d.type))
        .labelText('name')
        .labelSize(0.15)
        .labelResolution(1)
        .labelLabel(getTooltip)
        (dom);

      fetch(this.baseUrl + '/datasets/world_volcanoes.json').then(res => res.json()).then(volcanoes => {
        console.log('bbbb')
        myGlobe.pointsData(volcanoes)
          .labelsData(volcanoes);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
