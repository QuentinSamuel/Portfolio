const AbstractManager = require("./AbstractManager");

class ProjectTechnoManager extends AbstractManager {
  static table = "project_techno";

  insertTechno(projectId, technoId) {
    return this.connection.query(
      `insert into ${ProjectTechnoManager.table} (project_id, techno_id) values (?, ?)`,
      [projectId, technoId]
    );
  }

  deleteTechno(projectTechno) {
    return this.connection.query(
      `delete from ${ProjectTechnoManager.table} where project_id = ? and techno_id = ?`,
      [projectTechno.project_id, projectTechno.techno_id]
    );
  }
}

module.exports = ProjectTechnoManager;
