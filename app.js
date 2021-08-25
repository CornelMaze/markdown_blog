const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const articleRouter = require("./router/articles");
const methodOverride = require("method-override");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./static")));

const morgan = require("morgan");
app.use(morgan("tiny"));
// app.use(morgan("dev"));
const Article = require("./models/article");

// Allow us to access our body data using: req.body.data
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
const PORT = process.env.PORT || 3002;

mongoose.connect("mongodb://localhost/blog", {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
});

app.use("/articles", articleRouter);

app.get("/", async (req, res) => {
 const articles = await Article.find().sort({ createdAt: "desc" });
 console.log(new Article());
 res.render("articles/index", { articles: articles });
});
app.listen(PORT, () => {
 console.log(`server is listening on http://localhost:${PORT}`);
});
