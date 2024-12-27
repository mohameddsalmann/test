const express = require("express");
const router = express.Router();
const { sendMessage } = require("../services/kafka");

router.post("/signup", async (req, res) => {
    // Use Supertokens pre-built signup API
    sendMessage("user-events", { event: "signup", user: req.body });
    res.status(200).json({ message: "User signed up successfully" });
});

router.post("/signin", async (req, res) => {
    // Use Supertokens pre-built signin API
    res.status(200).json({ message: "User signed in successfully" });
});

module.exports = router;
