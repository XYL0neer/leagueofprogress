<template>
  <div class="content">
    <Header :isLandingPage="isLandingPage" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const isLandingPage = computed(() => useRoute().name === "LandingPage");

    return { isLandingPage };
  },
});
</script>

<style lang="scss">
@import "./assets/style.scss";
</style>
