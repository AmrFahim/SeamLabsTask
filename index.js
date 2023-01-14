const express = require("express");
const count_numbers = require("./count_numbers");
const string_to_its_sum = require("./input_string");
const app = express();
const port = 3000;

app.get("/count_numbers/:start/:end", (req, res) => {
  ans = count_numbers(
    parseInt(req.params["start"]),
    parseInt(req.params["end"])
  );
  res.send({ output: ans });
});

app.get("/input_string/:str", (req, res) => {
  res.send({ output: string_to_its_sum(req.params["str"]) });
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});
