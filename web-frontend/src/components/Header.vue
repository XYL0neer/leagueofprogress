<template>
  <header class="header">
    <router-link class="router-link left" to="/">
      <img src="../assets/logo.png" alt="logo" width="64" height="64" />
      <h3>League of Progress</h3>
    </router-link>
    <div class="center" v-if="!isLandingPage">
      <SummonerSearchBox />
    </div>
    <div class="right">
      <button class="btn">
        <span class="material-icons">account_box</span> Log in
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SummonerSearchBox from "./SummonerSearchBox.vue";

export default defineComponent({
  components: {
    SummonerSearchBox,
  },
  props: {
    isLandingPage: Boolean,
  },
});
</script>


<style scoped lang="scss">
.header {
  display: flex;

  align-items: center;
  justify-content: space-around;
  background-color: $base-color;
  padding: 16px;
}

.left {
  text-align: start;
  display: inline-flex;
}

.center {
  text-align: center;
}

.right {
  text-align: end;
}
</style>
