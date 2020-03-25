const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());

const data = require("./app-data");

app.get("/app", (req, res) => {
  const { search = "", sort } = req.query;

  if (sort) {
    if (!["App", "genre"].includes(sort)) {
      return res.status(400).send("sort either by App name or genre");
    }
  }

  let results = data.filter(data =>
    data.App.toLowerCase().includes(search.toLowerCase())
  );

  if (sort) {
    results.sort((a, b) => {
      return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
    });
  }

  // const genreValues = [
  //   "Action",
  //   "Puzzle",
  //   "Strategy",
  //   "Casual",
  //   "Arcade",
  //   "Card"
  // ];
  // if (!genreValues.includes(genre)) {
  //   return res.status(400).send("Select a valid genre");
  // }

  // if (sort === "rating") {
  // }

  // if (sort === "app") {
  //   filteredResults = filteredResults.filter(app => {
  //     return app.title.includes(app);
  //   });
  // }
  res.json(results);
});

app.listen(8000, () => {
  console.log("Express server is listening on port 8000....wooo hooo!");
});
