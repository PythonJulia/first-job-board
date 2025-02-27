import React, { useEffect, useState } from "react";

function Home() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("/api/jobs")
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>{job.title} - {job.company}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;