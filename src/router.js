import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Question from './views/Question.vue';
import Actions from './views/Actions.vue';

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
      component: () =>
        import('./views/Steps.vue')
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
      component: () =>
        import('./views/Habits.vue')
    },

    {
      path: '/results',
      name: 'result',
      component: () =>
        import('./views/Result.vue')
    },
    {
      path: '/results/actions',
      name: 'actions',
      component: () =>
        import('./views/Actions.vue')
    },

    {
      path: '/todo',
      name: 'todo',
      component: () =>
        import('./views/ToDo.vue')
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
