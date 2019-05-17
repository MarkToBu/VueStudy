// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import vDialogs from 'v-dialogs';
import DetailPage from './pages/detail';
import DetailAnalysis from './pages/detail/analysis';
import DetailCount from './pages/detail/count';
import DetailPublish from './pages/detail/publish';
import DetailForecast from './pages/detail/forecast';



Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(vDialogs, {  });
let router = new VueRouter({
	mode: 'history',
	routes:[
		{
			path: '/',
			component: IndexPage
		},
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
            path: 'analysis',
            commponent: DetailAnalysis
        },
        {
            path: 'count',
            commponent: DetailCount
        },
        {
            path: 'publish',
            commponent: DetailPublish
        },
        {
            path: 'forecast',
            commponent: DetailForecast
        }
      ]
    }
	]
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
