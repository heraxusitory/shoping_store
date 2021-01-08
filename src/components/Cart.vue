<template>
<div class="cart">

    <router-link :to="{name: 'catalog'}">
      <div class="cart__link_to_catalog">Back to catalog</div>
    </router-link>

  <h1>Корзина</h1>
  <p v-if="!cart_data.length">Nothing exist</p>
  <CartItem
    v-for="(item, index) in cart_data"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    @increment="increment(index)"
    @decrement="decrement(index)"
  />

    <div class="cart_total" v-if="cartTotalCost">
      <p class="total_name">Total</p>
      <p>{{ cartTotalCost }} Р</p>
    </div>


</div>
</template>

<script>
import CartItem from "@/components/CartItem"
import {mapActions} from 'vuex'

export default {
name: "Cart",
  components: {
  CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    cartTotalCost() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;

        })

        return result;
      } else return 0;
    }
  },

    methods: {
    ...mapActions([
        'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
      increment(index) {
      this.INCREMENT_CART_ITEM(index);
      },

      decrement(index) {
      this.DECREMENT_CART_ITEM(index);
      },

      deleteFromCart(index) {
      console.log(index)
        this.DELETE_FROM_CART(index)
      }

    }
}
</script>

<style lang="scss">
.cart {
margin-bottom: 100px;
}

.cart__link_to_catalog {
  position:  absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid 1px grey;
}

.cart_total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: $padding;
  display: flex;
  justify-content: center;
  background-color: #28b862;
  color: #ffffff;
  font-size: 20px;
}

.total_name {
  margin-right: $margin*2;
}
</style>