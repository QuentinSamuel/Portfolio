const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  static table = "techno";

  findTechnosByProjectId(projectId) {
    return this.connection.query(
      `select * from ${TechnoManager.table} join project_techno on project_techno.techno_id = techno.id where project_id = ?`,
      [projectId]
    );
  }

  insert(techno) {
    return this.connection.query(
      `insert into ${TechnoManager.table} (name) values (?)`,
      [techno.name]
    );
  }

  update(techno) {
    return this.connection.query(
      `update ${TechnoManager.table} set name = ? where id = ?`,
      [techno.name, techno.id]
    );
  }
}

module.exports = TechnoManager;
