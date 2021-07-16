import https from 'https';
import { keys } from '../config/keys';
import { Summoner, LeagueEntry, SummonerMatchList } from 'src/types/RiotAPITypes';
import { Match } from 'src/types/RiotAPIMatch';

const { riotApiKey } = keys();



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
      reject("Summoner does not exist")
    });
  });
}

export const getSummonerById = (accountId: string, server: string): Promise<Summoner> => {
  return new Promise<Summoner>((resolve, reject) => {
    https.get(
      `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-id/${accountId}?api_key=${riotApiKey}`, (resp) => {
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
      reject("Summoner does not exist")
    });
  });
}

export const getSummonerLeague = (summonerId: string, server: string): Promise<LeagueEntry[]> => {
  return new Promise<LeagueEntry[]>((resolve, reject) => {
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
      reject(new Error("Cant find Summoner League"))
    });
  });
}

export const getSummonerMatchList = (accountId: string, server: string, beginIndex: number): Promise<SummonerMatchList> => {
  return new Promise<SummonerMatchList>((resolve, reject) => {
    https.get(`https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${riotApiKey}&beginIndex=${beginIndex}&endIndex=${beginIndex + 5}`, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
      reject(new Error("Matchlist couldnt load"))
    });
  });
}

export const getMatchById = (matchId: string, server: string): Promise<Match> => {
  return new Promise<Match>((resolve, reject) => {
    https.get(`https://${server}.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=${riotApiKey}`, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
      reject(new Error("Matchlist couldnt load"))
    });
  })
}
