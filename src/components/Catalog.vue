<template>
<div class="catalog">
  <router-link :to="{name: 'cart', params: {cart_data: CART}}">
    <div class="catalog__link_to_card">Cart: {{ CART.length }}</div>
  </router-link>
<!--  PRODUCTS === this.$store.state.products-->
  <CatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      @addToCart="addToCart"
      :product_data="product"
  />
</div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem";
import {mapActions, mapGetters} from 'vuex'

export default {
name: "Catalog",
  components: {
  CatalogItem
  },
  data() {
  return {

  }
  },
  methods: {
  ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
             ]),
  // showArticleConsole(data) {
  //   console.log(data)
  // },
    addToCart(data) {
    this.ADD_TO_CART(data);
    }
  },

    computed: {
    ...mapGetters([
        'PRODUCTS',
        'CART'
    ]),
    },

  mounted() {
  this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data) {
        console.log('Data arrived')
      }
    })
  }
}
</script>

<style lang="scss">
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &__link_to_card {
    position:  absolute;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: solid 1px grey;
  }
}



</style>