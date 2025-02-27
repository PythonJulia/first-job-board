const express = require("express");
const { getAllJobs, createJob, getJobById, applyJob } = require("../controllers/jobController");
const router = express.Router();

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/:id", getJobById);
router.post("/apply/:id", applyJob);

module.exports = router;