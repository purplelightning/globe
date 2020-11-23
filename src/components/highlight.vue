// globe.gl 3d地球
<template>
  <div id="hh"></div>
</template>

<script>
import Globe from "globe.gl";

export default {
  name: "highlight",
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
      let dom = document.querySelector("#hh");

      const COUNTRY = 'Portugal';
      const MAP_CENTER = { lat: 37.6, lng: -16.6, altitude: 0.4 };
      const OPACITY = 0.1;

      const myGlobe = Globe()
        (dom)
        .globeImageUrl('http://unpkg.com/three-globe/example/img/earth-night.jpg')

        .arcLabel(d => `${d.airline}: ${d.srcIata} &#8594; ${d.dstIata}`)
        .arcStartLat(d => d.srcAirport.lat)
        .arcStartLng(d => d.srcAirport.lng)
        .arcEndLat(d => d.dstAirport.lat)
        .arcEndLng(d => d.dstAirport.lng)
        .arcColor(d => [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`])
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(1500)
        .onArcHover(hoverArc => myGlobe
          .arcColor(d => {
            const op = !hoverArc ? OPACITY : d === hoverArc ? 0.9 : OPACITY / 4;
            return [`rgba(0, 255, 0, ${op})`, `rgba(255, 0, 0, ${op})`];
          })
        )

        .pointColor(() => 'orange')
        .pointAltitude(0)
        .pointRadius(0.04)
        .pointsMerge(true);

      // load data
      const airportParse = ([airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source]) => ({ airportId, name, city, country, iata, icao, lat, lng, alt, timezone, dst, tz, type, source });
      const routeParse = ([airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment]) => ({ airline, airlineId, srcIata, srcAirportId, dstIata, dstAirportId, codeshare, stops, equipment});

      Promise.all([
        fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat').then(res => res.text())
          .then(d => d3.csvParseRows(d, airportParse)),
        fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat').then(res => res.text())
          .then(d => d3.csvParseRows(d, routeParse))
      ]).then(([airports, routes]) => {

        const filteredAirports = airports.filter(d => d.country === COUNTRY);
        const byIata = indexBy(filteredAirports, 'iata', false);

        const filteredRoutes = routes
          .filter(d => byIata.hasOwnProperty(d.srcIata) && byIata.hasOwnProperty(d.dstIata)) // exclude unknown airports
          .filter(d => d.stops === '0') // non-stop flights only
          .map(d => Object.assign(d, {
            srcAirport: byIata[d.srcIata],
            dstAirport: byIata[d.dstIata]
          }))
    //      .filter(d => d.srcAirport.country !== d.dstAirport.country); // international routes
    //      .filter(d => d.srcAirport.country === d.dstAirport.country); // domestic routes
          .filter(d => d.srcAirport.country === COUNTRY && d.dstAirport.country === COUNTRY); // domestic routes within country

        myGlobe
          .pointsData(filteredAirports)
          .arcsData(filteredRoutes)
          .pointOfView(MAP_CENTER, 4000);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
