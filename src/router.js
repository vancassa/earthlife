import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Question from './views/Question.vue';
import Actions from './views/Actions.vue';
import Steps from './views/Steps.vue';
import Habits from './views/Habits.vue';
import Result from './views/Result.vue';
import ToDo from './views/ToDo.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/steps',
      name: 'steps',
      component: Steps
    },
    {
      path: '/habits/:category',
      name: 'category',
      component: Category
    },
    {
      path: '/habits/:category/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/habits',
      name: 'habits',
      component: Habits
    },
    {
      path: '/results',
      name: 'result',
      component: Result
    },
    {
      path: '/results/actions',
      name: 'actions',
      component: Actions
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDo
    }
  ],
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 300);
    });
  }
});
