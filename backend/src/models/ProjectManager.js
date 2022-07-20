const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name) values (?)`,
      [project.name]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set name = ? where id = ?`,
      [project.name, project.id]
    );
  }
}

module.exports = ProjectManager;
