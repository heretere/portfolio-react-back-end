import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("skills_projects", (table) => {
    table.integer("skill_id").notNullable();
    table
      .foreign("skill_id")
      .references("id")
      .inTable("skills")
      .onDelete("CASCADE");

    table.integer("project_id").notNullable();
    table
      .foreign("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE");

    table.primary(["skill_id", "project_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("skills_projects");
}
