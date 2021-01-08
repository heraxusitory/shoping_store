import Vue from 'vue'
//подключили Vuex
import Vuex from 'vuex'
import axios from 'axios'
//Говорим вью использовать Vuex
Vue.use(Vuex);

//создадим само ххранилище и это будет новый обьект, в нем будут опции всевозможные
let store = new Vuex.Store({
    //состояние, хранятся всякие переменные массивы обьекты коллекции и тд
    state: {
        //(1)записали в стэйт массив продуктс, пока он пустой
        products: [],
        //создаем хранилище в виде пустого массива(далее создаем гетер)
        cart: [],
    },
    //мутации- с помощью нихх меняются данные в состоянии state(сначала выполняется 1, а потом 2 мутация)
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            //в стэйт.карт пушится product
            if (state.cart.length) {
                let isProductExist = false;
                state.cart.map(function (item) {
                    if (item.article === product.article) {
                        isProductExist = true;
                        item.quantity++;
                    }
                })
                if (!isProductExist) {
                    state.cart.push(product);
                }
            } else {
                    state.cart.push(product);
                }
        },
        REMOVE_FROM_CART: (state, index) => {
            //splice вырезает элемент начиная с индекса в количестве один
            state.cart.splice(index, 1);
        },

        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },

        DECREMENT: (state, index) => {
            if(state.cart[index].quantity > 1) {
            state.cart[index].quantity--
            }
        }
    },
    //actions- выполняются асинхронно,  в отличие от мутаций
    actions: {
        //(2)
        //axios возвращает по умолчанию promise
        //создали метод, в фиг скобках пишем всегда либо коммит, либо ничего(если коммит ниже кодом не используем)
        GET_PRODUCTS_FROM_API({commit}) {
            //commit - вызывает мутацию в последствии
            //в аксиосе идет первым делом юрл апишный
            //внутри этого метода вызываем аксиос-запрос, с методом гет по определенному урл по которому стучимся
            return axios('http://localhost:3000/products', {
                method: 'GET'
            }).then((products) => {
                //полсе аксиоса мы вызываем мутацию
                //вызываем мутацию, чтобы положить продукты в state
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            }).catch((error) => {
                console.log(error)
                return error;
            })
        },
        //вторым параметром принимается в качестве аргумента -product
        ADD_TO_CART({commit}, product) {
            //сразу вызываем коммит
           commit('SET_CART', product)
            //следом создаем мутацию
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },

        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },

        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        }
    },
    //короткий путь до получения информации о данных в state
    getters: {
        //это будет реактивным, продуктс будет реактивно обновляться, если в стейте возникнут изенения
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
})

//Эскпорт для дальнейших действий
export default store;