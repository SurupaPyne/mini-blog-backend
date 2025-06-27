const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const postRoutes = require("./routes/posts");

const app = express();
const PORT = 9001;

app.use(cors());
app.use(bodyParser.json());

app.use('/admin', postRoutes);

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
