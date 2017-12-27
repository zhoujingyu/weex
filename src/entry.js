// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import MetaInfo from 'vue-meta-info'
import * as filters from './filters'
import mixins from './mixins'

Vue.use(MetaInfo);

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

// register global mixins.
Vue.mixin(mixins);

// 测试代码
const storage = weex.requireModule('storage');
storage.setItem('Authorization', 'bearer 8877559d-fd85-463a-a946-d0393c1aa142', (e) => {
});
const userType={};
storage.setItem('userType', '', (e) => {
});

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({el: '#root', router, store}, App));

// 加载自定义图标文件
var domModule = weex.requireModule("dom");
domModule.addRule('fontFace', {
    'fontFamily': 'iconfont',
    'src': "url(\'http://at.alicdn.com/t/font_319748_dgrgecsewllyp66r.ttf\')"
});
