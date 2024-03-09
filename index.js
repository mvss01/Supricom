const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const session = require("express-session");
const flash = require('connect-flash')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser("$2a$10$otMKbi0cL.kXBb/lfth21e4M7pjWkNOEEP8mePiLjEF0jMx30.tgm"))
app.use(session({
    secret: "$2a$10$otMKbi0cL.kXBb/lfth21e4M7pjWkNOEEP8mePiLjEF0jMx30.tgm", cookie: {maxAge: 604800000}
}))
app.use(flash())

//Data Base connection
const connection = require("./database/database");
connection.authenticate() .then(() =>{
    console.log("Connected!");
}).catch((error) => {
    console.log(error);
});

Controllers
const AdminController = require("./controllers/Admin/AdminController");
app.use("/", AdminController);

const AdsController = require("./controllers/Ads/AdsController");
app.use("/", AdsController);

const ClientsController = require("./controllers/Clients/ClientsController");
app.use("/", ClientsController);

const HomeController = require("./controllers/Home/HomeController");
app.use("/", HomeController);

const ResultsController = require("./controllers/Results/ResultsController");
app.use("/", ResultsController);

app.listen(80, () =>{
    console.log('Aplicação rodando na porta 80')
})
