import Vue from 'vue'
import Router from 'vue-router'

import Catalog from "@/components/Catalog";
import Cart from "@/components/Cart";

Vue.use(Router);

let router = new Router({
    //массив-роуты, в нем будет разное кол-во рутов
    routes: [
        //у обьекта есть 1 основной ключ path
        {
            //по какому пути будет находится наша страница
            path: '/',
            name: 'catalog',
            //какой компонент будет находиться по нашему урлу
            component: Catalog
        },
        //если мы хотим переходя на какой то другой рут вместе с ним передавать и данные компоненту, надо дописать props true

        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            props: true
        }
    ]
})

export default router