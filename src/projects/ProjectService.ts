import knex from "../db/Connection";

const list = () => {
  return knex("projects").select("*");
};

export default {
  list,
};
