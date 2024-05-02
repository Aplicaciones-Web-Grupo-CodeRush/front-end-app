import {createRouter, createWebHistory} from "vue-router";
import lawyerListComponent from "../public/pages/lawyer-list/lawyer-list.component.vue";
import subscriptionComponent from "../public/pages/subscription/subscription.component.vue";
import ProfileUser from "../public/pages/profile-users/profile-user.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/abogados', component: lawyerListComponent, meta: { title: 'abogados'}},
        { path: '/subscription', component: subscriptionComponent, meta: { title: 'subscription'}},
        { path: '/', redirect: '/abogados'},
        { path: '/perfil', component: ProfileUser, meta: { title: 'Perfil'}},
    ]
});

export default router;