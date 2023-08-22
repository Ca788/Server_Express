const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send([
    {
      name: "Carlos",
      email: "carlos@gmail.com",
      phone: "12345678910",
      category_id: "id",
    },
  ]);
});

app.get("/contact", (request, response) => {
  response.send("Entre em contato através do email carlos@gmail.com");
});

app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});
