const models = require("../models");

class ProjectController {
  static browse = (req, res) => {
    models.project.findAll().then(([rows]) => {
      Promise.all(
        rows.map((project) => models.techno.findTechnosByProjectId(project.id))
      )
        .then((technos) => {
          res.json(
            rows.map((project, index) => ({
              ...project,
              technos: technos[index][0],
            }))
          );
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    });
  };

  static read = (req, res) => {
    models.project
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const { technos, ...project } = req.body;
    models.project
      .delete(
        technos.forEach((techno) => techno.id),
        project.id
      )
      .then(() => {
        models.project
          .insert(project)
          .then(() => {
            models.project_techno
              .insertTechno(project.id, technos)
              .then(() => {
                res.sendStatus(200);
              })
              .catch((err) => {
                console.error(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      });
  };

  static add = (req, res) => {
    const project = req.body;

    // TODO validations (length, format...)

    models.project
      .insert(project)
      .then(([result]) => {
        project.id = result.insertId;
        res.status(201).send({ ...project, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static addTechno = (req, res) => {
    const projectId = parseInt(req.params.projectId, 10);
    const technoId = parseInt(req.params.technoId, 10);

    models.project
      .addTechno(projectId, technoId)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static deleteTechno = (req, res) => {
    const projectId = parseInt(req.params.projectId, 10);
    const technoId = parseInt(req.params.technoId, 10);

    models.project
      .deleteTechno(projectId, technoId)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.project
      .delete(req.params.id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectController;
