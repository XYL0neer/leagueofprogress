<template>
  <div v-if="summoner !== undefined">
    <div class="summ-profile">
      <div>
        <img
          :src="`http://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${summoner.profileIconId}.png`"
          :alt="summoner.profileIconId"
          width="64"
          height="64"
        />
        <h1 class="summ-name">{{ summoner.name }}</h1>
      </div>

      <SummonerProfileRank :leagues="summoner.leagues" />
    </div>
  </div>
  <div v-else-if="searching"></div>
  <div v-else>
    <h1>Summoner "{{ name }}" not found.</h1>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref, watch } from "vue";
import { useRoute } from "vue-router";
import SummonerProfileRank from "./SummonerProfileRank.vue";
import { Summoner } from "../common/types";

export default defineComponent({
  components: {
    SummonerProfileRank,
  },
  setup() {
    const route = useRoute();

    const name = computed(() => route.params["summonername"]);
    const searching: Ref<boolean> = ref<boolean>(false);
    const summoner: Ref<Summoner | undefined> =
      ref<Summoner | undefined>(undefined);

    const getSummonerProfile = async () => {
      searching.value = true;
      try {
        let data = await fetchSummoner<Summoner>(name.value.toString(), "euw1");
        summoner.value = data as Summoner;

        console.log(summoner.value);
      } catch (e) {
        console.error((e as Error).message);
      } finally {
        searching.value = false;
      }
    };

    onMounted(getSummonerProfile);

    watch(name, (newValue, oldValue) => {
      summoner.value = undefined;
      getSummonerProfile();
    });

    async function fetchSummoner<T>(
      summonername: string,
      server: string
    ): Promise<T> {
      const response = await fetch(
        `http://localhost:8080/api/summoner?summoner=${summonername}&server=${server}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 404) {
        throw new Error("Summoner not found");
      }
      const body = (await response.json()) as Promise<T>;
      return body;
    }

    return {
      name,
      searching,
      summoner,
    };
  },
});
</script>

<style lang="scss" scoped>
.summ-profile {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
}

.summ-profile div {
  display: inline-flex;
}

.summ-name {
  padding-left: 16px;
}
</style>
