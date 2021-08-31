import app from "./App";
import knex from "./db/Connection";
import { config } from "dotenv";

config();

const { PORT = 80 } = process.env;

knex.migrate
  .latest()
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch(console.error);
