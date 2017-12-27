// import Vue from 'vue'
import Router from 'vue-router'
import Pocket from './views/Pocket.vue'
import Center from './views/Center.vue'
import Answer from './views/Answer.vue'
import StoriesView from './views/StoriesView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'

Vue.use(Router);

// Story view factory
function createStoriesView(type) {
    return {
        name: `${type}-stories-view`,
        render (createElement) {
            return createElement(StoriesView, {props: {type}})
        }
    }
}

export default new Router({
    // mode: 'abstract',
    routes: [
        {path: '/pocket', component: Pocket},
        {path: '/center', component: Center},
        {path: '/Answer', component: Answer},
        {path: '/ask', component: createStoriesView('ask')},
        {path: '/job', component: createStoriesView('job')},
        {path: '/article/:url(.*)?', component: ArticleView},
        {path: '/item/:id(\\d+)', component: CommentView},
        {path: '/user/:id', component: UserView},
        {path: '/', redirect: '/pocket'}
    ]
})
