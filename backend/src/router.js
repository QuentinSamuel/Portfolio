const express = require("express");

const { ProjectController, TechnoController } = require("./controllers");

const router = express.Router();

router.get("/projects", ProjectController.browse);
router.get("/projects/:id", ProjectController.read);
router.put("/projects/:id", ProjectController.edit);
router.post("/projects", ProjectController.add);
router.delete("/projects/:id", ProjectController.delete);

router.get("/technos", TechnoController.browse);
router.get("/technos/:id", TechnoController.read);
router.put("/technos/:id", TechnoController.edit);
router.post("/technos", TechnoController.add);
router.delete("/technos/:id", TechnoController.delete);

module.exports = router;
