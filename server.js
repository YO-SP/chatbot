const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Route redirect ke landing page
app.get("/", (req, res) => {
  res.redirect('/landing-page');
});

// Route halaman statis
app.get("/landing-page", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "landing-page", "index.html"));
});

app.get("/chatbot", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "chatbot", "index.html"));
});

app.get("/quiz", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "quiz", "index.html"));
});

// API route: forward ke Flask
app.post("/api/predict", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:5000/predict", req.body);
    res.json(response.data); // kirim balik ke frontend
  } catch (error) {
    console.error("Error forwarding to AI service:", error.message);
    res.status(500).json({ error: "Failed to contact AI service" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
