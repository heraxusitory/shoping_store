<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="Изображение товара">
    <div class="cart-item-info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="cart-item__quantity">

      <p>Кол-во</p>
      <span class="quantity_btn" @click="decrementItem">-</span>
      {{ cart_item_data.quantity }}
      <span class="quantity_btn" @click="incrementItem">+</span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>

export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {

    deleteFromCart() {
    this.$emit('deleteFromCart');
    },

    decrementItem() {
      this.$emit('decrement')
      // // console.log(this.cart_item_data)
      // let currentQuantity = this.cart_item_data.quantity;
      // if(currentQuantity > 1) {
      //   return this.cart_item_data.quantity--;
      // }

    },

    incrementItem() {
      this.$emit('increment')
      // let currentQuantity = this.cart_item_data.quantity++;
      // return currentQuantity;
    }
  },
  mounted() {
    //мы хотим в карт-айтем-дата добавить еще один ключ со значением
    //1аргумент - место куда хотим чтото добавить, 2ой арг - указываем ключ, 3 арг - значение ключа
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 #ff5ce1;
  margin-bottom: 15px;
  padding: $padding * 2;
  //background-color: #1cff61;
  //text-align: center;
  //font-size: 24px;
  //border: 1px solid black;
  //width: 35%;
  //margin: auto;
  &__image {
    max-width: 100px;
  }
}

.quantity_btn {
  cursor: pointer;
}
</style>