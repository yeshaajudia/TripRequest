import express from "express"
import sessions from "express-session"
import cookieParser from "cookie-parser"

const app = express()
import router from "./routes/app-routes.js"
import routerAcc from "./routes/app-account.js"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use('/', router)
app.use('/account', routerAcc)


app.listen(1337, ()=>{
    console.log("listening at 1337")
})



// import connect from "./connect.js"
// app.get("/", async (req,res)=>{
//     const query = "select * from batch1btr_user"
//     const sol = await connect(query)
//     res.send(sol)
// })
