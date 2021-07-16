<template>
  <div v-if="match !== undefined && summonerStats !== undefined">
    <div :class="`matchItem ${summonerStats.stats.win ? 'win' : 'loose'}`">
      <div>
        <h4 v-if="summonerStats.stats.win">Win</h4>
        <h4 v-else>Loose</h4>
        <img
          :src="`${communitydragon}/champion/${summonerStats.championId}/square`"
          alt="championIcon"
        />
        <p>{{ championName }}</p>
      </div>
      <div>
        {{
          `${summonerStats.stats.kills}/${summonerStats.stats.deaths}/${summonerStats.stats.assists}`
        }}
        <br />
        {{
          `CS: ${
            summonerStats.stats.totalMinionsKilled +
            summonerStats.stats.neutralMinionsKilled
          } Vision: ${summonerStats.stats.visionScore}`
        }}
      </div>
      <div class="itemGrid">
        <div>
          <img
            src="https://raw.communitydragon.org/latest/game/assets/perks/styles/precision/conqueror/conqueror.png"
            alt="Rune"
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/SummonerFlash.png"
            alt="sum-D"
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/SummonerFlash.png"
            alt="sum-F"
          />
        </div>
        <div>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/1001.png"
            alt=""
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/1001.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/1001.png"
            alt=""
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/1001.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/1001.png"
            alt=""
          />
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/1001.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/item/1001.png"
            alt=""
          />
        </div>
      </div>
      <div class="teamGrid">
        <div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
        </div>
        <div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
          <div class="teamMember">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
              alt="championIcon"
              width="32px"
              height="32px"
            />
            <p>Summoner</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script lang="ts">
import { Match, Participant } from "@/common/matchTypes";
import { SummonerMatch } from "@/common/summonerTypes";
import {
  defineComponent,
  PropType,
  ref,
  Ref,
  onMounted,
  toRefs,
  computed,
  reactive,
  watch,
} from "vue";

export default defineComponent({
  props: {
    accountId: {
      type: String,
      required: true,
    },
    match: {
      type: Object as PropType<SummonerMatch>,
      required: true,
    },
    server: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const communitydragon = ref(process.env.VUE_APP_CDRAGON_CDN_URL);
    const summonerMatch = ref(props.match);
    const championName = ref("NaN");
    const match: Ref<Match | null> = ref<Match | null>(null);
    const summonerStats = computed<Participant | undefined>(():
      | Participant
      | undefined => {
      if (match.value !== null) {
        const participantId = match.value.participantIdentities.find(
          (e) => e.player.accountId === props.accountId
        )?.participantId;
        return match.value.participants.find(
          (e) => e.participantId === participantId
        );
      }
      return undefined;
    });

    async function getMatch<T>(gameId: number, server: string): Promise<T> {
      const res = await fetch(
        `http://localhost:8080/api/match/${gameId}?server=${server}`
      );
      if (res.status === 404) {
        throw new Error("Summoner not found");
      }
      const data = (await res.json()) as Promise<T>;
      return data;
    }

    const loadMatch = async () => {
      console.log("load Match");
      try {
        const data = await getMatch<Match>(
          summonerMatch.value.gameId,
          props.server
        );
        match.value = data as Match;
        console.log(match.value);
      } catch (e) {
        console.error((e as Error).message);
      }
    };

    const getChampionName = () => {
      let error = undefined;
      fetch(
        `${communitydragon.value}/champion/${summonerMatch.value.champion}/data`
      )
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("No Champion found");
          }
          return res.json();
        })
        .then((data) => {
          championName.value = data.name;
        })
        .catch((err) => (error = err));
    };

    getChampionName();

    onMounted(() => {
      loadMatch();
    });

    return {
      communitydragon,
      summonerMatch,
      summonerStats,
      championName,
      match,
    };
  },
});
</script>


<style lang="scss" scoped>
.matchItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(6, 28, 37);
  padding: 4px;
  margin-bottom: 8px;
  border-left: 16px solid;
}

.itemGrid {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  align-items: center;
}

.itemGrid div {
  display: inherit;
}

img {
  padding: 4px;
}

.teamGrid {
  display: grid;
  grid-template-columns: auto auto;
}
.teamGrid .teamMember {
  display: flex;
}

.win {
  border-left-color: lightgreen;
}
.loose {
  border-left-color: red;
}
</style>
