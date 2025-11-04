const express = require("express");
const path = require("path");
const helmet = require("helmet");

const calcRouter = require("./routes/calcule"); // nouveau nom

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// API route
app.use("/api/calcules", calcRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Serveur démarré sur http://localhost:${PORT}`),
);
