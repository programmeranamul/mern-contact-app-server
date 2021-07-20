const express = require("express");
// const router = require("./userRouter");
const contactSchema = require("./Node Project/Contact/Contact.Schema");
const contactRouter = require("./Node Project/Contact/contact.route");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//mongodb+srv://stackContact:vDpSVGyybzKlQspD@cluster0.5yvtj.mongodb.net/stactContactApp?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://stackContact:vDpSVGyybzKlQspD@cluster0.5yvtj.mongodb.net/stactContactApp?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Mongoose connect successfully"));

// app.use("/user", router)
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("<h3> Hi, this is my frist get request</h3>");
});

app.get("*", (req, res) => {
  res.send("<h3>404 not found</h3>");
});

app.listen(process.env.PORT||8000, () => {
  console.log("App is running on port 8000");
});
