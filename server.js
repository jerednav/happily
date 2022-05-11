import cors from 'cors'
import express from "express";
const app = express();
import dotenv from "dotenv";
//start dotenv
dotenv.config();
import "express-async-errors";

//db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import moodsRouter from "./routes/moodRoutes.js";

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.use(cors())
//will make JSON data available to us in the controllers
app.use(express.json());
console.log('hello')

app.get("/", (req, res) => {
  res.json({msg:"Welcome!"});
});
app.get("/api/v1", (req, res) => {
  res.json({msg:"API!"});
});

//route where the api routes will be stored
app.use("/api/v1/auth", authRouter);
//route where the mood routes will be stored
app.use("/api/v1/moods", moodsRouter);

//initializes the notFoundMiddleware and error handler
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 6000;

//only run the server if the connection was successful
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
