<template>
  <div id="app">
    <w-header :seller="seller"></w-header>
  </div>
</template>

<script>
import WHeader from "./components/header/WHeader.vue"
import { getSeller } from "./api/index"

export default {
  name: "App",
  components: {
    WHeader,
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
}
</script>

<style></style>
