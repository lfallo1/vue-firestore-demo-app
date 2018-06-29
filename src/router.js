import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import EditEmployee from './views/EditEmployee.vue'
import NewEmployee from './views/NewEmployee.vue'
import ViewEmployee from './views/ViewEmployee.vue'
import NotFound from './components/404.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/new',
            name: 'new-employee',
            component: NewEmployee
        },
        {
            path: '/edit/:employee_id',
            name: 'edit-employee',
            component: EditEmployee
        },
        {
            path: '/:employee_id',
            name: 'view-employee',
            component: ViewEmployee
        },
        {
            path: '*',
            name: '404',
            component: NotFound
        }
    ]
})
