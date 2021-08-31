import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("skills_projects").del();

  // Inserts seed entries
  await knex("skills_projects").insert([
    {
      project_id: 1,
      skill_id: 1,
    },
    {
      project_id: 2,
      skill_id: 2,
    },
    {
      project_id: 3,
      skill_id: 1,
    },
    {
      project_id: 4,
      skill_id: 2,
    },
    {
      project_id: 5,
      skill_id: 1,
    },
    {
      project_id: 6,
      skill_id: 2,
    },
    {
      project_id: 7,
      skill_id: 1,
    },
    {
      project_id: 8,
      skill_id: 2,
    },
    {
      project_id: 9,
      skill_id: 1,
    },
    {
      project_id: 10,
      skill_id: 2,
    },
    {
      project_id: 11,
      skill_id: 1,
    },
    {
      project_id: 12,
      skill_id: 2,
    },
    {
      project_id: 13,
      skill_id: 1,
    },
    {
      project_id: 14,
      skill_id: 2,
    },
    {
      project_id: 15,
      skill_id: 1,
    },
    {
      project_id: 16,
      skill_id: 2,
    },
    {
      project_id: 17,
      skill_id: 3,
    },
    {
      project_id: 18,
      skill_id: 4,
    },
    {
      project_id: 19,
      skill_id: 5,
    },
    {
      project_id: 20,
      skill_id: 6,
    },
  ]);
}
