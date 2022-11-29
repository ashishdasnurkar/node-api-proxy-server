const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.listen(PORT, () => console.log("Listening on 5000 ..."));
