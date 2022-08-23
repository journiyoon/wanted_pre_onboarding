import express from "express";
import "express-async-errors";
import * as jobController from "../controller/jobs.js";
const router = express.Router();

// GET /jobs
router.get("/", jobController.getJobs);

// GET /jobs/:id
router.get("/:id", jobController.getJobById);

// POST
router.post("/", jobController.create);

// PUT
router.put("/:id", jobController.update);

// DELETE
router.delete("/:id", jobController.remove);

export default router;
