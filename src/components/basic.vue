// globe.gl 3d地球
<template>
  <div id="gg"></div>
</template>

<script>
import Globe from "globe.gl";

export default {
  name: "basic",
  data() {
    return {};
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      const N = 300;
      const dd = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: Math.random() / 3,
        color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)]
      }));
      let dom = document.querySelector("#gg");
      console.log(dom)
      const myGlobe = Globe();
      Globe()(dom).globeImageUrl('http://unpkg.com/three-globe/example/img/earth-night.jpg').pointsData(dd);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
