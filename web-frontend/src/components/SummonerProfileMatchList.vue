<template>
  <div class="matchList">
    <div v-for="match in matchList" :key="match.gameId">
      <SummonerProfileMatchItem
        :summonerSpells="summonerSpells"
        :accountId="accountId"
        :match="match"
        :server="server"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref, Ref } from "vue";
import { SummonerMatchList, SummonerMatch } from "@/common/summonerTypes";
import SummonerProfileMatchItem from "./SummonerProfileMatchItem.vue";
import { SummonerSpell } from "@/common/spells";

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
    const communityRARWDragon = ref(process.env.VUE_APP_CDRAGON_RAW_URL);
    const accountId = ref(props.accountId);
    const server = props.server;
    const matchList = reactive<SummonerMatch[]>([]);
    const currentIndex: Ref<number> = ref<number>(0);
    const summonerSpells = ref<SummonerSpell[]>([]);

    async function getSummonerSpellInformation<T>(): Promise<T> {
      const res = await fetch(
        `${communityRARWDragon.value}/v1/summoner-spells.json`
      );
      if (res.status === 404) {
        throw new Error("Summoner not found");
      }
      const data = (await res.json()) as Promise<T>;
      return data;
    }

    const getSpells = async (): Promise<void> => {
      try {
        const data = await getSummonerSpellInformation<Array<SummonerSpell>>();
        summonerSpells.value = data as Array<SummonerSpell>;
      } catch (e) {
        console.error((e as Error).message);
      }
    };

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

    onBeforeMount(getSpells);

    return { matchList, server, accountId, summonerSpells };
  },
});
</script>

<style lang="scss" scoped>
.matchList {
  margin-left: 160px;
  margin-right: 160px;
}
</style>
