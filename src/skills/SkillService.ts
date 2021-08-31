import knex from "../db/Connection";

const TABLE_NAME = "skills";

const list = (projectId?: number) => {
  let request = knex({ s: TABLE_NAME });

  if (projectId) {
    request = request
      .join({ sp: "skills_projects" }, "s.id", "sp.skill_id")
      .join({ p: "projects" }, "sp.project_id", "p.id")
      .where("p.id", projectId);
  }

  return request.select("s.*");
};

const read = (id: number, project_id?: number) =>
  list(project_id).where("s.id", id).first();

export default {
  list,
  read,
};
