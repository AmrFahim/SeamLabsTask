const express = require("express");
const count_numbers = require("./count_numbers");
const app = express();
const port = 3000;

app.get("/count_numbers/:start/:end", (req, res) => {
  ans = count_numbers(
    parseInt(req.params["start"]),
    parseInt(req.params["end"])
  );
  res.send({ output: ans });
});
app.listen(port, () => {
  console.log("Listening on port 3000");
});
