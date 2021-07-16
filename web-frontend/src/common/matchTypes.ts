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

export interface Participant {
  participantId: number;
  championId: number;
  runes: Rune[];
  stats: ParticipantStats;
  teamId: number;
  timeline: {};
  spell1Id: number;
  spell2Id: number;
  highestAchievedSeasonTier: string;
  masteries?: []; //old mastery system
}

interface ParticipantStats {
  participantId: number;
  win: boolean;
  kills: number;
  deaths: number;
  assists: number;
  champLevel: number;
  visionScore: number;
  wardsKilled: number;
  visonWardsBoughtInGame: number;
  wardsPlaced: number;
  sightWardsBoughtInGame: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  neutralMinionsKilledTeamJungle: number;
  neutralMinionsKilledEnemyJungle: number;
  goldSpent: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  unrealKills: number;
  killingSprees: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  totalPlayerScore: number;
  combatPlayerScore: number;
  objectivePlayerScore: number;
  totalScoreRank: number;
  teamObjective: number;
  largestCricialStrike: number;
  longestTimeSpentLiving: number;
  totalDamageDealtToChampions: number;
  physicalDamageDealtToChampions: number;
  magicDamageDealtToChampions: number;
  trueDamageDealtToChampions: number;
  damageDealtToObjectives: number;
  totalDamageDealt: number;
  physicalDamageDealt: number;
  magicDamageDealt: number;
  trueDamageDealt: number;
  damageDealtToTurrets: number;
  totalDamageTaken: number;
  physicalDamageTaken: number;
  magicalDamageTaken: number;
  trueDamageTaken: number;
  damageSelfMitigated: number;
  totalHeal: number;
  totalUnitsHealed: number;
  timeCCingOthers: number;
  totalTimeCorwdControlDealt: number;
  firstBloodKill: boolean;
  firstBloodAssist: boolean;
  firstInhibitorKill: boolean;
  firstInhibitorAssist: boolean;
  inhibitorKills: number;
  firstTowerKill: boolean;
  firstTowerAssist: boolean;
  turretKills: number;
  nodeCapture: number;
  nodeNeutralize: number;
  nodeNeutralizeAssist: number;
  nodeCaptureAssist: number;
  altarsNeutralized: number;
  altarsCaptured: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  perk0: number;
  perk0Var1: number;
  perk0Var2: number;
  perk0Var3: number;
  perk1: number;
  perk1Var1: number;
  perk1Var2: number;
  perk1Var3: number;
  perk2: number;
  perk2Var1: number;
  perk2Var2: number;
  perk2Var3: number;
  perk3: number;
  perk3Var1: number;
  perk3Var2: number;
  perk3Var3: number;
  perk4: number;
  perk4Var1: number;
  perk4Var2: number;
  perk4Var3: number;
  perk5: number;
  perk5Var1: number;
  perk5Var2: number;
  perk5Var3: number;
  perkPrimaryStyle: number;
  perkSubStyle: number;
  statPerk0: number;
  statPerk1: number;
  statPerk2: number;
}

interface Rune {
  runeId: number;
  rank: number;
}
