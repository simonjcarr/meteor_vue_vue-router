import { Meteor } from 'meteor/meteor'
import Vue from 'vue';

import VueMeteorTracker from 'vue-meteor-tracker'

import router from './routes'

import AppComponent from '/imports/ui/App.vue';

Meteor.startup(() => {
  Vue.use(VueMeteorTracker)
  new Vue({
    router,
    render: (h) => h(AppComponent),
  }).$mount('#app');
});
