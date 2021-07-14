import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { getMatchById, getSummonerById, getSummonerByName, getSummonerLeague, getSummonerMatchList } from './RiotApi/riotService';
import { Summoner, SummonerMatchList } from './types/RiotAPITypes';
import { Match } from './types/RiotAPIMatch';

const app: Application = express();
app.use(express.json())
app.use(cors(
  {
    origin: "*",
    methods: 'GET'
  }
));

const PORT = process.env.PORT || 8080;

app.get("/", (_req: Request, res: Response): void => {
  res.send("Welcome to the node Backend from Leauge of Progress");
})

app.get("/api/summoner", async (req: Request, res: Response): Promise<void> => {
  console.log("Search for summoner: ", req.query);
  const { summoner, server } = req.query;

  if (summoner === undefined || server === undefined) {
    res.sendStatus(404);
  } else {
    let response: Summoner;
    try {
      response = await getSummonerByName(summoner as string, server as string);
      const leagues = await getSummonerLeague(response.id, server as string);
      response.leagues = leagues;
      console.log("Summoner found:\n", response);
      res.send(JSON.stringify(response));

    } catch (e) {
      console.log(e);
      res.sendStatus(404);
    }
  }
})

app.get("/api/summoner/:accountId/matchlist", async (req: Request, res: Response): Promise<void> => {
  console.log("Get Matchlist for summoner with the Id: ", req.params.accountId);
  const { accountId } = req.params;
  const { server, beginIndex } = req.query;
  let index: number = 0;
  if (beginIndex !== undefined) {
    index = Number(beginIndex);
  }
  if (accountId === undefined || typeof accountId !== "string" || server === undefined) {
    res.sendStatus(404);
  } else {
    try {
      const summoner: Summoner = await getSummonerById(accountId, server as string);
      const matchList: SummonerMatchList = await getSummonerMatchList(accountId, server as string, index);
      console.log("Summoner exist and Matchlist was loaded");
      res.send(JSON.stringify(matchList));
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
      res.send((e as Error).message);
    }
  }
})

app.get("/api/match/:matchId", async (req: Request, res: Response): Promise<void> => {
  console.log("Get Match with Id: " + req.params.matchId);
  const { matchId } = req.params;
  const { server } = req.query;
  if (matchId === undefined || server === undefined) {
    res.sendStatus(404);
  } else {
    try {
      const match: Match = await getMatchById(matchId, server as string);
      console.log(match);
      res.send(JSON.stringify(match));
    } catch (e) {
      console.log(e);
      res.sendStatus(404);
      res.send((e as Error).message);
    }

  }
})

app.listen(PORT, (): void => {
  console.log(`Server Runnung here 👉 http://localhost:${PORT}`)
})
