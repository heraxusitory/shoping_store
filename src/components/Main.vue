<template>
  <div class="mainLayout">
<!--    //в этой области будут показываться компоненты в зависмости от урла-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>


<!--    //при роутинге не нужен по сути здесь-->
<!--    //keep-alive пригодится, если данные при переходе по урлу нужно будет передавать не из централизованного хранилища,-->
<!--    а через компоненты(я так понял через пропсы)-->

<!--    <Catalog/>-->
<!--    &lt;!&ndash;        Main, свяжи карт-дату своего дочернего элемента с нашим 'CART'&ndash;&gt;-->
<!--    <Cart-->
<!--        v-if="CART.length"-->
<!--        :cart_data = "CART"-->
<!--    />-->
  </div>
</template>

<script>
//при роутинге не нужен по сути здесь
// import Catalog from "@/components/Catalog";
// import Cart from "@/components/Cart";

//Для того чтобы поймать гетер корзины(далее идем в computed)
// import  {mapGetters} from 'vuex'

export default {
  name: "Main",
  components: {
    //при роутинге не нужен по сути здесь
    // Cart,
    // Catalog
  },
  props: {},
  data() {
    return {
      title: 'Shopping'
    }
  },
  computed: {
    //при роутинге не нужен по сути здесь
    // ...mapGetters([
    //   'CART'
    // ])
  },
  methods: {

  },
  watch: {

  },

}
</script>

<style scoped>
  .mainLayout {
    max-width: 900px;
    margin: 0 auto;
  }
</style>