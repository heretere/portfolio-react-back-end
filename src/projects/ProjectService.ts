import knex from "../db/Connection";

const TABLE_NAME = "projects";

const list = () => knex(TABLE_NAME).select("*");

const read = (id: number) => knex(TABLE_NAME).select("*").where({ id }).first();

const create = (project: Object) =>
  knex(TABLE_NAME)
    .insert(project)
    .returning("*")
    .then((columns) => columns[0]);

const update = (project: Object) =>
  knex(TABLE_NAME)
    .update(project)
    .returning("*")
    .then((columns) => columns[0]);

const destroy = (id: number) => {
  return knex(TABLE_NAME)
    .where({ id })
    .del()
    .returning("*")
    .then((columns) => columns[0]);
};

export default {
  list,
  read,
  create,
  update,
  delete: destroy,
};
