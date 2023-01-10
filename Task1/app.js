const express = require("express")
const app = express();
const user = require("./routes/user.js")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", user)
app.listen(3000, () => { console.log("listening at the port 8000") })