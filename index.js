import express from "express";
import cors from "cors";

const app = express()
const sampleEmployee = {
    name: {
      first: "alut",
      last: "Ouais",
    },
    email: "alut.ouais@example.com",
    picture: {
      medium: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
  };


app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/api/employees", (req, res) => {
res.json({results: [sampleEmployee]});
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});