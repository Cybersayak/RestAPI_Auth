import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello Backend Devs Building RestAPI and Learning Authentication using Typescript"
  );
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
