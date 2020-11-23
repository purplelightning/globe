import Vue from 'vue'
import Router from 'vue-router'
import basic from '@/components/basic'
import highlight from '@/components/highlight'
import usInter from '@/components/usInter'
import volcanoes from '@/components/volcanoes'
import city from '@/components/city'
import population from '@/components/population'

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
  ]
})
