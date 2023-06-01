const express = require('express')
const app = express()
const port = 3000

const USERS = [
  {
    email:"edaj8080@gmail.com",
    password:"fuckmyself"
  },
]



const QUESTIONS = [{
  title:"two sums ",
  description:"givne array and all that shit story ",
  testcases:[
    {
    input:"[1,2,3,4,5]",
    output: "5"
    },
      ]
  },
      ]

const SUBMISSIONS = [
  {
   userId:"1",
   questionId:"1",
   code:"#incldue<iostream>",
   status:"accepted"
  }
]

app.get('/', function(req, res) {
  res.send('Hello World!')
})



app.post('/signup', function(req,res){

  // add logic to decode the body
  //  body should contain the email and passord of the user 

  // store email and password in the user array above only if the user 
  // with giver email doesent exist
  // then return 200 status code to client
  // 
    
  const {email , password} = req.body;

  const userExist = USERS.some(user => user.email === email);
  if(userExist)
  {
     res.status(400).send("user already exists");

  }else{
    USERS.push({email,password});
     res.status(200).send("user created ");
  }

})

app.post ('/login', function(req,res){
  // body should have email and password 
  // check if the user with given email exist in the users array
  // also ensure that the password is the same
  // if same then 200 code return to the client and an token 

     res.send('hello world')
})



app.get('/questions', function(req, res){

  // it should return all the question in the questions array 
  res.send('hello world')
})

app.get('/submissions', function(req,res){
  // return all the submissions of user for this problem
  res.send('hello world')
})

app.post('/submissions', function(req,res){
  // it let user submit the solution of the questions
  // accept or reject randomly and store the submissions in the 
  // submission array above 
  res.send('hello world')
})




app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})