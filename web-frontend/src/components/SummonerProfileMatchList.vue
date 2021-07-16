<template>
  <div class="matchList">
    <div v-for="match in matchList" :key="match.gameId">
      <SummonerProfileMatchItem
        :accountId="accountId"
        :match="match"
        :server="server"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, Ref } from "vue";
import { SummonerMatchList, SummonerMatch } from "@/common/summonerTypes";
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
    const accountId = ref(props.accountId);
    const server = props.server;
    const matchList = reactive<SummonerMatch[]>([]);
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

    loadMatchList(props.accountId, server, currentIndex.value);

    return { matchList, server, accountId };
  },
});
</script>

<style lang="scss" scoped>
.matchList {
  margin-left: 160px;
  margin-right: 160px;
}
</style>
