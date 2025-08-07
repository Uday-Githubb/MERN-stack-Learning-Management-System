import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/lms";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log(`API running on :${PORT}`));
  } catch (e) {
    console.error("Failed to start server", e);
    process.exit(1);
  }
})();
