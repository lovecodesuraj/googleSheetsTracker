
import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToDb from "./db/db.js";
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import passport from "passport";
import session from "express-session";
import  "./passport.js"

var client={};

const port=process.env.PORT||5000;

connectToDb();

const app=express();
app.use(express.json());
app.use(session({ secret: 'SECRET' }));
app.use(passport.session());
app.use(
  cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/",postRoutes);
app.use("/auth",authRoutes); 




app.listen(port,()=>console.log(`server is running at port ${port}`));