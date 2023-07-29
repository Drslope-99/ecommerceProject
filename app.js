const path = require("path");

/* third party modules install using npm*/
const express = require("express");
const bodyParser = require("body-parser");

// importing the routes file
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();
app.set("view engine", "ejs");
app.set("view");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
