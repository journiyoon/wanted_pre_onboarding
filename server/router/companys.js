import express from "express";
import "express-async-errors";
import * as componyController from "../controller/companys.js";
const router = express.Router();

// GET /companys
router.get("/", componyController.getJobs);

// GET /companys/:id
router.get("/:id", componyController.getJobById);

// POST /companys
router.post("/", componyController.create);

// PUT /companys/:id
router.put("/:id", componyController.update);

// DELETE /companys/:id
router.delete("/:id", componyController.remove);

export default router;
