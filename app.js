require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
const whitelist = [
  "https://reactgram.iarlenreis.com.br",
  "https://www.reactgram-backend.iarlenreis.com.br/",
  "http://localhost:3000",
  "http://localhost:5173",
];

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cors(corsOptions));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection

require("./configdb.js");

// routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
  console.log(`APP rodando na porta ${port}`);
});
