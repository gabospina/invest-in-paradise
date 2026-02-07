import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

/**
 * PATH RESOLUTION
 * According to your structure:
 * Root: C:\Users\Daisy\invest-in-paradise
 * Server File: Root\server\index.ts
 * Build Output: Root\dist\public
 */

// If we are running from the source: server/index.ts
// We go up one level to Root, then into dist/public
const publicPath = path.resolve(__dirname, "..", "dist", "public");

// LOGGING: This will help you verify the path in your terminal
console.log("-------------------------------------------");
console.log("🌍 INVEST IN PARADISE PRODUCTION SERVER");
console.log("📁 Serving assets from:", publicPath);
console.log("-------------------------------------------");

// 1. SERVE STATIC FILES FIRST
// This handles requests for /assets/style.css and /images/villa.jpg
app.use(express.static(publicPath));

// 2. API ROUTES
app.post("/api/contact", (req, res) => {
  console.log("🚀 New Lead captured:", req.body);
  res.status(200).json({ message: "Success" });
});

// 3. SPA CATCH-ALL ROUTE LAST
// This ensures that refreshing /for-retirees doesn't break the site
app.get("*", (req, res) => {
  const indexPath = path.join(publicPath, "index.html");
  res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Production site live at: http://localhost:${PORT}`);
});