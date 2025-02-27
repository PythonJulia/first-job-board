import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job/:id" element={<JobDetail />} />
            </Routes>
        </Router>
    );
}

export default App;