var data=require('.');

function preload() {
  data = require("ne_110m_admin_0_countries.geojson");
  console.log(data)
}
preload()