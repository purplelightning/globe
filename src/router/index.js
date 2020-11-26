import Vue from 'vue'
import Router from 'vue-router'
import basic from '@/components/basic'
import highlight from '@/components/highlight'
import usInter from '@/components/usInter'
import volcanoes from '@/components/volcanoes'
import city from '@/components/city'
import population from '@/components/population'
import randomPath from '@/components/randomPath'
import earthquake from '@/components/earthquake'
import customlayer from '@/components/customlayer'
import countryPopulation from '@/components/countryPopulation'
import customGlobe from '@/components/customGlobe'
import moon from '@/components/moon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basic',
      component: basic
    },
    {
      path: '/highlight',
      name: 'highlight',
      component: highlight
    },
    {
      path: '/usInter',
      name: 'usInter',
      component: usInter
    },
    {
      path: '/volcanoes',
      name: 'volcanoes',
      component: volcanoes
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/population',
      name: 'population',
      component: population
    },
    {
      path: '/randomPath',
      name: 'randomPath',
      component: randomPath
    },
    {
      path: '/earthquake',
      name: 'earthquake',
      component: earthquake
    },
    {
      path: '/customlayer',
      name: 'customlayer',
      component: customlayer
    },
    {
      path: '/countryPopulation',
      name: 'countryPopulation',
      component: countryPopulation
    },
    {
      path: '/customGlobe',
      name: 'customGlobe',
      component: customGlobe
    },
    {
      path: '/moon',
      name: 'moon',
      component: moon
    },
  ]
})
