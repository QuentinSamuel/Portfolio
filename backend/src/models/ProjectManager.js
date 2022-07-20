const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name , description , github , demo , date_start , date_end) values (?, ?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.github,
        project.demo,
        project.date_start,
        project.date_end,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set name = ?, description = ?, github = ?, demo = ?, date_start = ?, date_end = ? where id = ?`,
      [
        project.name,
        project.description,
        project.github,
        project.demo,
        project.date_start,
        project.date_end,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
