<template>
  <div>
    <h1>Welcome to League of Progress</h1>
    <h4>
      Another bad stats page for League of Legends to show you how bad you are
      at the game.
    </h4>
    <SummonerSearchBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SummonerSearchBox from "./SummonerSearchBox.vue";

export default defineComponent({
  components: {
    SummonerSearchBox,
  },
});
</script>
