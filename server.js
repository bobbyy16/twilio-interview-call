const express = require("express");
require("dotenv").config();
const twilioRoutes = require("./routes/twilio.routes.js");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
          <html>
            <head><title>Success!</title></head>
            <body>
              <h1>You did it!</h1>
              <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
            </body>
          </html>
        `);
});

app.use("/", twilioRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
