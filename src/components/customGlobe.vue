// globe.gl 3d地球
<template>
  <div id="ccc"></div>
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
      let dom = document.querySelector("#ccc");
      console.log(dom)
      const world = Globe()(dom)
      .globeImageUrl('http://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('http://unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl('http://unpkg.com/three-globe/example/img/night-sky.png')

    // custom globe material
    const globeMaterial = world.globeMaterial();
    globeMaterial.bumpScale = 10;
    new THREE.TextureLoader().load('http://unpkg.com/three-globe/example/img/earth-water.png', texture => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new THREE.Color('grey');
      globeMaterial.shininess = 15;
    });

    setTimeout(() => { // wait for scene to be populated (asynchronously)
      const directionalLight = world.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
