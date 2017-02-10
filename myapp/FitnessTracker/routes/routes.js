
import index from '../src/components/index.vue';
import home from '../src/components/home.vue';
import NotFoundView from '../src/components/notfound.vue';



const routes = [
  { path: '/login', component: index}, 
  { path: '/', component: home}, 
  { path: '*', component: NotFoundView }
]

export default routes