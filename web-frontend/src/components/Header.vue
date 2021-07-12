<template>
  <header class="header">
    <div class="left">
      <router-link class="router-link" to="/">
        <img src="../assets/logo.png" alt="logo" width="64" height="64" />
      </router-link>
      <h3>League of Progress</h3>
    </div>
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

  background-color: $accent-color;
  padding: 16px;
}

.left {
  text-align: start;
  display: inline-flex;
  flex: 1;
}

.center {
  text-align: center;
  flex: 2;
}

.right {
  text-align: end;
  flex: 1;
}
</style>
