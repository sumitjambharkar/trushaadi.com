const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/User');
const Profile = require("./model/Profile")
const PatnerDetails = require('./model/PatnerDetails');
const cors = require('cors')
const app = express()
const Port = process.env.PORT || 3001;

mongoose.connect("mongodb+srv://sumitjambharkar:sumitjambharkar@cluster0.nlsrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(express.json())
app.use(cors())

app.get('/',(req, res) => {
  res.json({
    msge: "Hello"
  })

})
app.get('/profile',async (req, res) => {
  const profile =await Profile.find(req.body)
  res.json({
    profile:profile
  }) 

})
app.get('/profile/:id',async(req, res) => {
  const {id} = req.params.id
  const profile = await Profile.findById(req.params.id)
  console.log(profile);
  res.json({
    profile
  })

})
app.get("/register", (req, res) => {
  res.json({
    msge: "Register page"
  })
})

app.post("/register",(req, res) => {
  const { name, number, birth, email, password } = req.body
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.json({
        msge : "user Alerady exits"
      })
    }
    else{
      const user = User({ name, number, birth, email, password })
      user.save()
        .then((result) => {
          res.status(200).json({
            msge: "success",
            result
          })
        })
        .catch((error) => {
          res.status(400).json({
            msge: "error",error
          })
        })

    }
  })




})

app.get("/login", (req, res) => {
  res.json({
    message: "Login Page"
  })
})
app.post("/login",(req, res) => {
  const {email, password} = req.body
  User.findOne({email:email},(err,user)=>{
    if(user){
      if(password===user.password){
        res.status(200).json({
          msge : "Login Success"
        })
      }else{
        res.status(400).json({
          msge : "password not match"
        })
  
      }
    }else {
      res.status(400).json({
        msge : "user not Register"
      })
    }

  })
})

app.post("/patener-details", (req, res) => {
  const patnerDetails = PatnerDetails.create(req.body)
  res.json({
    msge: "create",
    patnerDetails
  })

})

app.post("/profile/:_id",async(req,res)=>{
  const {id:_id} = req.params
    const profile =await User.create(req.body)
    res.json({
      profile
    })
  
})


app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
})