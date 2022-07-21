const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  static table = "techno";

  findTechnosByProjectId(projectId) {
    return this.connection.query(
      `select * from ${TechnoManager.table} where id in (select techno_id from project_techno where project_id = ?)`,
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
