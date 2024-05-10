const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const expressHbs = require('express-handlebars');

app.use(express.static(__dirname + '/html'))
// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/html/index.htm');

// });

app.engine("hbs", expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: "hbs",
    defaultLayout: "layout",
}));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    // lấy file index.hbs đổ vào layout body trong phần body của layout.hbs
    res.locals.title = "Jeopardize Contest"
    res.render("index")
})

// parse data được truyền ở body http request thành định dạng json => có thể truy xuất thông qua req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/task1", require("./routes/task1Route"));
app.use("/task2", require("./routes/task2Route"));
app.use("/task3", require("./routes/task3Route"));
app.use("/task4", require("./routes/task4Route"));

app.get((req, res) => {
    throw new Error("Not implemented")
})
app.use((req, res) => {
    res.send("Request not found");
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
