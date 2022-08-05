// Imports
const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");
// mysql
const db = require("./db");
// routes
const routes = require("./routes");
// express
const app = express();
// socket.io
const http = require("http");
const server = http.createServer(app);

// bodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Plugins
app.set("view engine", "ejs");
app.use(express.static("public"));

//Views
// home
app.use("/", routes.main);

// ver2
app.use("/to", routes.to);

// 404
app.use(function (req, res, next) {
    res.status(404).render("404/404");
});

app.get("/", (req, res) => {
    if (req.subdomains[0] === "dop") {
        console.log(req.subdomains);
        console.log("req.subdomains");
    }
});

function fun(arg) {
    let a = "Hello, world!";
    return a;
}
let b = fun();
console.log(b);

// Start server
server.listen(PORT, () => {
    console.log(`Server Run on port: ${PORT}`);
});
