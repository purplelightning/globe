// globe.gl 3d地球
<template>
  <div id="gg"></div>
</template>

<script>
import Globe from "globe.gl";

export default {
  name: "countryPopulation",
  data() {
    return {};
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {

      let dom = document.querySelector("#gg");
      console.log(dom)
      const world = Globe()(dom)
        .globeImageUrl('http://unpkg.com/three-globe/example/img/earth-dark.jpg')
        .pointOfView({ altitude: 4 }, 5000)
        .polygonCapColor(feat => 'rgba(200, 0, 0, 0.6)')
        .polygonSideColor(() => 'rgba(0, 100, 0, 0.05)')
        .polygonLabel(({ properties: d }) => `
            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
          `);

      // Auto-rotate
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 1.8;

      
      fetch('../../static/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries => {
        world.polygonsData(countries.features);

        setTimeout(() => world
          .polygonsTransitionDuration(4000)
          .polygonAltitude(feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5))
        , 3000);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
