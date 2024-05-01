import {createRouter, createWebHistory} from "vue-router";
import lawyerListComponent from "../public/pages/lawyer-list/lawyer-list.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/abogados', component: lawyerListComponent, meta: { title: 'abogados'}},
        { path: '/', redirect: '/abogados'},
    ]
});

export default router;