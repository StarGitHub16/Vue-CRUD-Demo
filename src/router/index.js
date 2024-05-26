import {createRouter, createWebHashHistory} from 'vue-router';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Edit from '../components/Edit.vue';
import Delete from '../components/Delete.vue';

const routes = [
  { path: '/', component: List },
  { path: '/add', component: Add },
  { path: '/edit/:id', component: Edit },
  { path: '/delete/:id', component: Delete },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;