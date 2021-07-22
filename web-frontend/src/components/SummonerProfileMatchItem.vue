<template>
  <div v-if="match !== undefined && summonerStats !== undefined">
    <div :class="`matchItem ${summonerStats.stats.win ? 'win' : 'loose'}`">
      <div>
        <h4 v-if="summonerStats.stats.win">Win</h4>
        <h4 v-else>Loose</h4>
        <img
          :src="`${communityCDNDragon}/champion/${summonerStats.championId}/square`"
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
            :src="
              getKeystone(
                summonerStats.stats.perkPrimaryStyle,
                summonerStats.stats.perk0
              )
            "
            alt="Key Rune"
            width="60"
            height="60"
          />
          <img
            :src="getSummonerSpell(summonerStats.spell1Id)"
            alt="sum-D"
            width="60"
            height="60"
          />
          <img
            :src="getSummonerSpell(summonerStats.spell2Id)"
            alt="sum-F"
            width="60"
            height="60"
          />
        </div>
        <div>
          <img :src="getItem(summonerStats.stats.item0)" alt="" />
          <img :src="getItem(summonerStats.stats.item3)" alt="" />
        </div>
        <div>
          <img :src="getItem(summonerStats.stats.item1)" alt="" />
          <img :src="getItem(summonerStats.stats.item4)" alt="" />
        </div>
        <div>
          <img :src="getItem(summonerStats.stats.item2)" alt="" />
          <img :src="getItem(summonerStats.stats.item5)" alt="" />
        </div>
        <div>
          <img :src="getItem(summonerStats.stats.item6)" alt="" />
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
import { SummonerSpell } from "@/common/spells";
import {
  PerkTree,
  PrecisionTree,
  DominationTree,
  InspirationTree,
  SorceryTree,
  ResolveTree,
} from "@/common/runesReforged";
import {
  defineComponent,
  PropType,
  ref,
  Ref,
  computed,
  onBeforeMount,
} from "vue";
import { Items } from "@/common/items";

export default defineComponent({
  props: {
    summonerSpells: {
      type: Array as PropType<Array<SummonerSpell>>,
      required: true,
    },
    items: {
      type: Array as PropType<Array<Items>>,
      required: true,
    },
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
    const communityCDNDragon = ref(process.env.VUE_APP_CDRAGON_CDN_URL);
    const communityRARWDragon = ref(process.env.VUE_APP_CDRAGON_RAW_URL);
    const summonerSpells: Array<SummonerSpell> = props.summonerSpells;
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

    const getItem = (itemId: number): string => {
      if (itemId === undefined || itemId === 0) {
        return `${communityRARWDragon.value}/assets/items/icons2d/gp_ui_placeholder.png`;
      }
      let item: Items | undefined = props.items.find((e) => e.id === itemId);
      return `${communityRARWDragon.value}/assets/items/icons2d/${
        item !== undefined
          ? item.iconPath.split("/").pop()?.toLowerCase()
          : "gp_ui_placeholder.png"
      }`;
    };

    const getSummonerSpell = (summonerspellId: number): string => {
      if (summonerspellId === undefined) {
        return `${communityRARWDragon.value}/data/spells/icons2d/summoner_empty.png`;
      }
      let spell: SummonerSpell | undefined = summonerSpells.find(
        (e) => e.id == summonerspellId
      );
      return `${communityRARWDragon.value}/data/spells/icons2d/${
        spell !== undefined
          ? spell.iconPath.split("/").pop()?.toLowerCase()
          : "summoner_empty.png"
      }`;
    };

    const getKeystone = (tree: number, rune: number): string => {
      const perkTree = PerkTree[tree];

      let keyStone = undefined;
      switch (perkTree) {
        case "Precision":
          keyStone = PrecisionTree[rune];
          break;
        case "Domination":
          keyStone = DominationTree[rune];
          break;
        case "Sorcery":
          keyStone = SorceryTree[rune];
          break;
        case "Resolve":
          keyStone = ResolveTree[rune];
          break;
        case "Inspiration":
          keyStone = InspirationTree[rune];
          break;
      }
      if (keyStone === undefined || perkTree === undefined) {
        return `${communityRARWDragon.value}/v1/perk-images/styles/runesicon.png`;
      }
      let imgName = keyStone.toLowerCase();
      if (keyStone.toLowerCase() === "lethaltempo") {
        imgName = "lethaltempotemp";
      }
      return `${
        communityRARWDragon.value
      }/v1/perk-images/styles/${perkTree.toLowerCase()}/${keyStone.toLowerCase()}/${imgName}.png`;
    };

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
      try {
        const data = await getMatch<Match>(
          summonerMatch.value.gameId,
          props.server
        );
        match.value = data as Match;
      } catch (e) {
        console.error((e as Error).message);
      }
    };

    const getChampionName = () => {
      let error = undefined;
      fetch(
        `${communityCDNDragon.value}/champion/${summonerMatch.value.champion}/data`
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

    onBeforeMount(loadMatch);

    return {
      communityCDNDragon,
      communityRARWDragon,
      summonerMatch,
      summonerStats,
      championName,
      match,
      getKeystone,
      getSummonerSpell,
      getItem,
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
