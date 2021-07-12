import https from 'https';
import { keys } from '../config/keys';

const { riotApiKey } = keys();

export interface Summoner {
  id: string;
  accountId: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
  leagues?: ListLeagueEntry;
}

interface ListLeagueEntry {
  [index: number]: LeagueEntry;
}
interface LeagueEntry {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export const getSummonerByName = (summonerName: string, server: string): Promise<Summoner> => {
  return new Promise<Summoner>((resolve, reject) => {
    https.get(
      `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riotApiKey}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          if (resp.statusCode === 404) {
            reject("Summoner not Found");
          }
          resolve(JSON.parse(data));

        });
      }
    ).on("error", (err) => {
      console.log("Error: " + err.message);
      reject(err)
    });
  });
}

export const getSummonerById = (summonerId: string, server: string): Promise<Summoner> => {
  return new Promise<Summoner>((resolve, reject) => {
    https.get(
      `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-id/${summonerId}?api_key=${riotApiKey}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          resolve(JSON.parse(data));
        });
      }
    ).on("error", (err) => {
      console.log("Error: " + err.message);
      reject(err)
    });
  });
}

export const getSummonerLeague = (summonerId: string, server: string): Promise<ListLeagueEntry> => {
  return new Promise<ListLeagueEntry>((resolve, reject) => {
    https.get(`https://${server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${riotApiKey}`, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
      reject(err)
    });
  });
}
