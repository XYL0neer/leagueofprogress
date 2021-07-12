<template>
  <WelcomeMessage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeMessage from "../components/WelcomeMessage.vue";

export default defineComponent({
  components: {
    WelcomeMessage,
  },
});
</script>
