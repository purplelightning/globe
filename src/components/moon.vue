// globe.gl 3d地球
<template>
  <div id="mmm"></div>
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
      let dom = document.querySelector("#mmm");
      console.log(dom)

      const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);

      const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

      const moon = Globe()
        .globeImageUrl('../../static/datasets/lunar_surface.jpg')
        .bumpImageUrl('../../static/datasets/lunar_bumpmap.jpg')
        .backgroundImageUrl('http://unpkg.com/three-globe/example/img/night-sky.png')
        .showGraticules(true)
        .showAtmosphere(false) // moon has no atmosphere
        .labelText('label')
        .labelSize(1.7)
        .labelDotRadius(0.4)
        .labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
        .labelColor(d => colorScale(d.agency))
        .labelLabel(d => `
            <div><b>${d.label}</b></div>
            <div>${d.agency} - ${d.program} Program</div>
            <div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
          `)
        .onLabelHover(label => dom.style.cursor = label ? 'pointer' : null)
        .onLabelClick(d => window.open(d.url, '_blank'))
        (dom);

      fetch('../../static/datasets/moon_landings.json').then(r => r.json()).then(landingSites => {
        moon.labelsData(landingSites);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
