<template>
  <div id="app">
    <w-header :seller="seller"></w-header>
    <div class="tab-wrapper">
      <tab :tabs="tabs" :initialIndex="0"></tab>
    </div>
  </div>
</template>

<script>
import WHeader from "./components/w-header/w-header"
import Goods from "./components/goods/goods"
import Ratings from "./components/ratings/ratings"
import Seller from "./components/seller/seller"
import Tab from "./components/tab/tab"

import { getSeller } from "./api/index"

export default {
  name: "App",
  components: {
    WHeader,
    Tab,
  },
  data() {
    return {
      seller: {},
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    },
  },
  computed: {
    tabs() {
      return [{ 
        label: "商品", component: Goods, data: { seller: this.seller } },
        { label: "评价", component: Ratings, data: { seller: this.seller } },
        { label: "商家", component: Seller, data: { seller: this.seller } },
      ]
    },
  },
}
</script>

<style>
#app .tab-wrapper {
  position: fixed;
  top: 136px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
