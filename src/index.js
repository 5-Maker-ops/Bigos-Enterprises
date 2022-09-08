
const express = require('express')
const app = express()
const port = 3000

const middleware = require('./utilities/middleware')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('bigos Enterprise')
})

const me = [{
    name: "Momodou jah",
    phone: '3108349',
    email: 'momodoujah5@gmail.com'

    
}]

app.get('/me', (req, res) => {
    res.json(me)
  })


  let users=[
    {
    id: 1,
    username: 'idris',
    phone: '038448383383',
    password: 'momodou676444',

    
  },

  {
    id: 2,
    username: 'momodou',
    phone: '038448383383',
    password: 'momodou676444',

  },
 {
    id: 3,
    username: 'baba',
    phone: '038448383383',
    password: 'momodou676444',
 
 }
]

//Get One
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id === Number(id))
  
    if(user) {
      res.json(user)
    }
    
    else{
      res.status(404).end()
      //res.send("sorry user not found")
    }
  })

  //Get All
app.get('/api/users', (req, res) => {
    res.json(users)
  })

  //Delete One
app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id
    users = users.filter((user) => user.id !== Number(id))
  
    res.status(204).end()
  })

  // Create one
app.post('/api/users', (req, res) => {
    const content = req.body
  
    //here we save the content to the database
    console.log(content);
    res.json(content)
  })

// Put
app.put('api/users/:id', (req, res) =>{
    const id = req.params.id
  
    res.id
  })

  //app.put()
app.use(middleware.unknownEndpoint)
app.use(middleware.requestLogger)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
