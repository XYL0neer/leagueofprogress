export interface Match {
  gameId: number;
  participantIdentities: participantIdentity[];
  queueId: number;
  gameType: string;
  gameDuration: number;
  teams: TeamStats[];
  platormId: string;
  gameCreation: number;
  seasonId?: number; //will be removed in v5
  gameVersion: string;
  mapId: number;
  gameMode: string;
  participants: Participant[];
}

interface participantIdentity {
  participantId: number;
  player: Player;
}

interface Player {
  profileIcon: number;
  accountId: string;
  matchHistoryUri: string;
  currentAccountId: string;
  currentPlatformId: string;
  summonerName: string;
  summonerId: string;
  platformId: string;
}

interface TeamStats {
  towerKills: number;
  riftHeraldKills: number;
  firstBlood: boolean;
  inhibitorKills: number;
  bans: TeamBan[];
  firstBaron: boolean;
  firstDragon: boolean;
  dominionVictoryScore?: number;
  dragonKills: number;
  baronKills: number;
  firstInhibitor: boolean;
  firstTower: boolean;
  vilemawKills?: number;
  firstRiftHerald: boolean;
  teamId: number;
  win: string;
}

interface TeamBan {
  championId: number;
  pickTur: number;
}

interface Participant {
  participantId: number;
  championId: number;
  runes: Rune[];
  stats: {};
  teamId: number;
  timeline: {};
  spell1Id: number;
  spell2Id: number;
  highestAchievedSeasonTier: string;
  masteries?: []; //old mastery system
}

interface Rune {
  runeId: number;
  rank: number;
}
