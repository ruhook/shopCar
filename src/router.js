import Index from './components/home/index.vue';
import All from './components/shopCar/index.vue';


export default function(router) {
    router.map({
        '/': { component: Index },
        '/index': { component: Index },
        '/shopCar': { component: All }
    })
}