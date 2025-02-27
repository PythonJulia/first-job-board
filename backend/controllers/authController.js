const jwt = require("jsonwebtoken");

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.json({ message: "Login successful", token });
    }
    res.status(401).json({ message: "Invalid credentials" });
};

exports.registerUser = (req, res) => {
    res.json({ message: "User registered successfully" });
};
