// globe.gl 3d地球
<template>
  <div id="pp"></div>
</template>

<script>
import Globe from "globe.gl";

export default {
  name: "population",
  data() {
    return {};
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let dom =document.querySelector('#pp')
      const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
      .domain([0, 1e7]);

        const world = Globe()
          (dom)
          .globeImageUrl('http://unpkg.com/three-globe/example/img/earth-night.jpg')
          .bumpImageUrl('http://unpkg.com/three-globe/example/img/earth-topology.png')
          .backgroundImageUrl('http://unpkg.com/three-globe/example/img/night-sky.png')
          .hexBinPointWeight('pop')
          .hexAltitude(d => d.sumWeight * 6e-8)
          .hexBinResolution(4)
          .hexTopColor(d => weightColor(d.sumWeight))
          .hexSideColor(d => weightColor(d.sumWeight))
          .hexBinMerge(true)
          .enablePointerInteraction(false); // performance improvement

        fetch('../static/datasets/world_population.csv').then(res => res.text())
          .then(csv => d3.csvParse(csv, ({ lat, lng, pop }) => ({ lat: +lat, lng: +lng, pop: +pop })))
          .then(data => world.hexBinPointsData(data));

        // Add auto-rotation
        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 0.6;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
