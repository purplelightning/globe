<template>
  <div id="app">
    <div class="item-wrapper">
      <router-link class="item" to="/">基本</router-link>
      <router-link class="item" to="population">全球人口</router-link>
      <router-link class="item" to="volcanoes">火山</router-link>
      <router-link class="item" to="highlight">航线</router-link>
      <router-link class="item" to="usInter">usInter</router-link>
      <router-link class="item" to="city">全球城市</router-link>
      <router-link class="item" to="randomPath">随机路径</router-link>
      <router-link class="item" to="earthquake">地震</router-link>
      <router-link class="item" to="customlayer">特殊覆盖</router-link>
      <router-link class="item" to="countryPopulation">countryPopulation</router-link>
      <router-link class="item" to="customGlobe">customGlobe</router-link>
      <router-link class="item" to="moon">moon</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app{
  overflow: hidden;
  box-sizing: border-box;
}
.item-wrapper{
  display: flex;
  width: 100%;
  height: 60px;
  background: #ccc;
}
.item{
  flex: 1;
  line-height: 60px;
  text-align: center;
  text-decoration: none;
  color: fff;
  border:1px solid black;
}
</style>
