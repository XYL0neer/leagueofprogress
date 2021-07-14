<template>
  <div v-for="league in leagues" :key="league.id">
    <img :src="getImgUrl(league.tier)" :alt="league.tier" width="140" />
    <p class="rank">
      {{
        getQueueType(league.queueType) + ": " + league.tier + " " + league.rank
      }}
    </p>
    <p class="lp">LP {{ league.leaguePoints }}</p>
    <p>
      {{
        "Win Rate: " +
        ((100 * league.wins) / (league.wins + league.losses)).toFixed(2) +
        "% " +
        league.wins +
        "W/" +
        league.losses +
        "L"
      }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { LeagueEntry } from "@/common/summonerTypes";

export default defineComponent({
  props: {
    leagues: {
      type: [] as PropType<LeagueEntry[]>,
      required: true,
    },
  },
  setup(props) {
    const { leagues } = toRefs(props);

    const getImgUrl = (tier: string): NodeRequire => {
      return require("@/assets/ranked-emblems/" + tier + ".png");
    };

    const getQueueType = (queueType: string): string => {
      if (queueType === "RANKED_SOLO_5x5") return "Solo/Duo";
      if (queueType === "RANKED_FLEX_SR") return "Flex";
      return "";
    };

    return {
      leagues,
      getImgUrl,
      getQueueType,
    };
  },
});
</script>

<style lang="scss" scoped>
.rank {
  font-size: 18px;
}

.lp {
  font-size: 15px;
  font-weight: bold;
}
</style>
