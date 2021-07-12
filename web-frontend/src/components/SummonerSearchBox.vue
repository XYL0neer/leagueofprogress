<template>
  <form id="searchbox">
    <div class="search">
      <input
        v-model="searchTerm"
        class="searchTerm"
        type="search"
        name="summoner"
        id="summoner"
        placeholder="Search Summoner"
      />
      <button class="searchButton" type="submit" @click="onSearch">
        <span class="material-icons">search</span>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Router, useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    let searchTerm: Ref<string> = ref("");

    const router: Router = useRouter();

    const onSearch = (e: Event) => {
      e.preventDefault();
      let summonername: string = searchTerm.value;
      searchTerm.value = "";
      console.log("search summoner named " + summonername);
      router.push({
        name: "SummonerPage",
        params: { summonername: summonername },
      });
    };

    return {
      searchTerm,
      onSearch,
    };
  },
});
</script>


<style scoped>
#searchbox {
  display: inline-block;
}
.search {
  width: 30vw;
  display: flex;
}
.searchTerm {
  font-size: 18px;
  width: 100%;
  border: none;
  border-right: none;
  padding: 8px;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.searchButton {
  width: 40px;
  height: 50px;
  border: none;
  background: white;
  text-align: center;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
</style>
