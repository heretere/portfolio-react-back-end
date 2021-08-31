import path from "path";
import { config } from "dotenv";

config();
const { DATABASE_URL = "postgresql://postgres@localhost/postgres" } =
  process.env;

export default {
  client: "postgresql",
  connection: DATABASE_URL,
  pool: { min: 0, max: 5 },
  migrations: {
    directory: path.join(__dirname, "migrations"),
  },
  seeds: {
    directory: path.join(__dirname, "seeds"),
  },
};
