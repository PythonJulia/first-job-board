const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Fetch all jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Create a job
router.post("/", async (req, res) => {
    try {
        const { title, company, location, salary, description } = req.body;
        const job = await Job.create({ title, company, location, salary, description });
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
