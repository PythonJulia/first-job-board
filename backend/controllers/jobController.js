const Job = require("../models/Job");

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.createJob = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.json(newJob);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findByPk(req.params.id);
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

exports.applyJob = async (req, res) => {
    res.json({ message: "Application Submitted" });
};