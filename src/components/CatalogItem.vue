<template>
<div class="catalog-item">
  <img class="catalog-item__image" :src="require('../assets/images/' + product_data.image)" alt="Изображение товара">
  <p class="catalog_item__name">{{product_data.name}}</p>
  <p class="catalog-item__price">Price: {{product_data.price}}</p>
  <button class="catalog-item__button btn" @click="addToCart">Корзина</button>
</div>
</template>

<script>

export default {
  name: "CatalogItem",
  components: {
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart',this.product_data)
    }
    // sendDataToParent() {
    //   this.$emit('sendArticle', this.product_data.article)
    //   console.log(this)
    // }
  }
}
</script>

<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 10px 0 #ff5ce1;
  text-align: center;
  border: black solid 1px;
  border-radius: 4px;
  padding: $padding * 2;
  font-size: 18px;
  background-color: #ff5ce1;
  margin-bottom: 10px;
  min-height: 280px;
  &__image {
    max-width: 250px;
    max-height: 350px;
  }
}

.catalog-item p {
  text-decoration: underline;
}
</style>