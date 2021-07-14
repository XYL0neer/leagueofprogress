<template>
  <div class="matchItem">
    <div>
      <h4>Win</h4>
      <img
        src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/Aatrox.png"
        alt="championIcon"
      />
      <p>Aatrox</p>
    </div>
    <div>
      11/0/22 <br />
      CS: 214 Vision: 29
    </div>
    <div class="itemGrid">
      <div>
        <img
          src="https://raw.communitydragon.org/11.14/game/assets/perks/styles/precision/conqueror/conqueror.png"
          alt="Rune"
        />
        <img
          src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/SummonerFlash.png"
          alt=""
        />
        <img
          src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/SummonerTeleport.png"
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
</template>

<style lang="scss" scoped>
.matchItem {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: whitesmoke;
  padding: 4px;
  margin-bottom: 8px;
  border-left: 16px solid red;
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
</style>
