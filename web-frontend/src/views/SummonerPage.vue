<template>
  <div>
    <SummonerProfile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SummonerProfile from "../components/SummonerProfile.vue";

export default defineComponent({
  components: {
    SummonerProfile,
  },
  setup() {},
});
</script>
