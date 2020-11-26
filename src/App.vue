<template>
  <div id="app">
    <div class="item-wrapper">
      <router-link class="item" to="/">基本</router-link>
      <router-link class="item" to="population">全球人口</router-link>
      <router-link class="item" to="volcanoes">火山</router-link>
      <router-link class="item" to="highlight">航线</router-link>
      <router-link class="item" to="city">全球城市</router-link>
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
