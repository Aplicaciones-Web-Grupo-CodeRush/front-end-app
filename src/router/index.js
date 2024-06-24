import {createRouter, createWebHistory} from "vue-router";
import lawyerListComponent from "../public/pages/lawyer-list/lawyer-list.component.vue";
import subscriptionComponent from "../public/pages/subscription/subscription.component.vue";
import ProfileUser from "../public/pages/profile-users/profile-user.component.vue";
import reviewListComponent from "../public/pages/review-list/review-list.component.vue";
import educationalResourceComponent from "../public/pages/educational-resource/educational-resource.component.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/abogados', component: lawyerListComponent, meta: { title: 'abogados'}},
        { path: '/subscription', component: subscriptionComponent, meta: { title: 'subscription'}},
        { path: '/', redirect: '/abogados'},
        { path: '/perfil', component: ProfileUser, meta: { title: 'Perfil'}},
        { path: '/reviews', component: reviewListComponent, meta: {title: 'reviews'}},
        { path: '/educational-resources', component: educationalResourceComponent, meta: {title: 'Educational Resources'}},
    ]
});

export default router;