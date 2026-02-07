import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Matches your working v2 logic:
  // In production, 'dist/index.js' is in the same folder as the 'public' directory.
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  console.log(`🌐 Serving assets from: ${staticPath}`);

  app.use(express.static(staticPath));

  // API Route for the Contact Form
  app.post("/api/contact", (req, res) => {
    console.log("🚀 New Lead Captured:", req.body);
    res.status(200).json({ message: "Success" });
  });

  // Handle client-side routing
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);