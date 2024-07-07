import mongoose from "mongoose";
import e from "express";
import cors from "cors";
import linkRoute from "./routes/link.route.js";
import noteRoute from "./routes/note.route.js";
import "dotenv/config";

const connectionString = process.env.connectionStr;
const myPort = process.env.myPort || 4000;
console.log(myPort)

const app = e();

//middleware
app.use(e.json());
app.use(cors());

//routes
app.use("/links", linkRoute);
app.use("/notes", noteRoute);

//connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from the API Server");
});

app.listen(myPort, '0.0.0.0', () => {
  console.log(`App listening on port ${myPort}`)
});
