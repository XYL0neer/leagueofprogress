import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { getSummonerById, getSummonerByName, getSummonerLeague, getSummonerMatchList } from './RiotApi/riotService';
import { Summoner, SummonerMatchList } from './types/RiotAPITypes';

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
  const { server } = req.query;
  if (accountId === undefined || typeof accountId !== "string" || server === undefined) {
    res.sendStatus(404);
  } else {
    try {
      const summoner: Summoner = await getSummonerById(accountId, server as string);
      const matchList: SummonerMatchList = await getSummonerMatchList(accountId, server as string);
      console.log("Summoner exist and Matchlist was loaded");
      res.send(JSON.stringify(matchList));
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