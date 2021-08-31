import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("skills", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.text("icon_url").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("skills");
}
