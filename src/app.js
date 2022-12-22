const express = require("express");
const app = express();
const path=require("path")

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
 
const viewspath=path.join(__dirname,"../templet/views")
const publicpath=path.join(__dirname,"../public")

app.set("view engine","hbs");
app.set("views",viewspath)
app.use(express.static(publicpath))
app.get("/",(req,resp)=>{
    resp.render("home")
})
   

app.listen(PORT, () => {
  console.log("server are Runnig" + PORT);
});
