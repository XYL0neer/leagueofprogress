<template>
  <div class="matchList">
    <SummonerProfileMatchItem />
    <SummonerProfileMatchItem />
    <div v-for="match in matchList" :key="match.gameId">
      {{ match.gameId }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref } from "vue";
import { SummonerMatchList, Match } from "@/common/summonerTypes";
import SummonerProfileMatchItem from "./SummonerProfileMatchItem.vue";

export default defineComponent({
  components: {
    SummonerProfileMatchItem,
  },
  props: {
    accountId: {
      type: String,
      required: true,
    },
    server: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const matchList = reactive<Match[]>([]);
    const currentIndex: Ref<number> = ref<number>(0);

    const loadMatchList = async (
      accountId: string,
      server: string,
      currentIndex: number
    ) => {
      const response = await fetch(
        `http://localhost:8080/api/summoner/${accountId}/matchlist?server=${server}&currentIndex=${currentIndex}`
      );
      const summonerMatchList: SummonerMatchList = await response.json();
      console.log(summonerMatchList);
      matchList.push(...summonerMatchList.matches);
      currentIndex += matchList.length;
    };

    loadMatchList(props.accountId, props.server, currentIndex.value);

    return { matchList };
  },
});
</script>

<style lang="scss" scoped>
.matchList {
  margin-left: 160px;
  margin-right: 160px;
}
</style>
